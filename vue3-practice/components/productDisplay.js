app.component('product-display', {
  props: {
    premium: {
      type: Boolean,
      required: true
    }
  },
  template: 
    /*html*/
    `<div class="product-display">
    <div class="product-container">
      <div class="product-image">
        <img 
          :src="image"
          :class="{ 'out-of-stock-img': !inStock }"
          alt=""
        >
      </div>
      <div class="product-info">
        <h1>{{title}}</h1>
        <p v-if="onSale">{{this.brand + product}} is on sale</p>
        <p v-if="inStock">In Stock</p>
        <p v-else>Out of Stock</p>
        <p>Shipping: {{shipping}}</p>

        <product-details :details="details"></product-details>
        <div v-for="(variant, index) in variants" :key="variant.id" @mouseover="updateVariant(index)" class="color-circle"
        :style="{ backgroundColor: variant.color }">
        </div><br>
        <button 
          class="button" 
          :class="{ disabledButton: !inStock }"
          v-on:click="removeFromCart"
          :disabled="!inStock || cart <= 0"
          >-</button>
        <div class="cart_no">{{ cart }}</div>
        <button 
          class="button" 
          :class="{ disabledButton: !inStock }"
          v-on:click="addToCart"
          :disabled="!inStock"
          >+</button><br>
        <button 
          :href="buyURL" 
          class="buy_button"
          :class="{ disabledButton: !inStock }"
          >Buy</button>
      </div>
    </div>
  </div>
  
  `,
data() {
    return {
        product: 'Socks',
        selectedVariant: 0,
        brand: 'Jaykef',
        variants: [
            { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50, onSale: true },
            { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0, onSale: false }
        ],
        sizes: ['S','M','L'],
        buyURL: './checkout.html'
    }
},
methods: {
    addToCart() {
        this.cart += 1
    },
    removeFromCart() {
        this.cart -= 1
    },
    updateVariant(index) {
        this.selectedVariant = index
    }

},
computed: {
    title() {
        return this.brand + ' ' + this.product
    },
    image() {
        return this.variants[this.selectedVariant].image
    },
    inStock() {
        return this.variants[this.selectedVariant].quantity
    },
    onSale() {
        return this.variants[this.selectedVariant].onSale
    },
    shipping() {
      if(this.premium) {
        return 'Free'
      }
      return 2.99
    }
}
})