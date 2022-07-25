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
            >
        </div>
        <div class="product-info">
            <h1>{{ title }}</h1>
            <p v-if="inStock">In Stock</p>
            <p v-else>Out of Stock</p>
            <p v-if="onSale">{{onSaleProduct}}</p>
            <p>Shipping: {{ shipping }}</p>
            <p><b>Description:</b> {{ description }}</p>
            <!-- <ul>
            <li v-for="detail in details">{{ detail }}</li>
            </ul>
            <p><b>Colors:</b></p>
            <p><b>Sizes:</b></p>
            <div v-for="size in sizes" style="display: in-flex;">{{ size.size }}</div>  -->
            
            <div v-for="(variant, index) in variants"
                :key="variant.id" 
                @mouseover="updateVariant(index)"
                class="color-circle"
                :style="{ backgroundColor: variant.color}"
                >{{ variant.color }}
            </div>
            
            <button 
            class="button" 
            @click="addToCart"
            :disabled="!inStock"
            :class="{ disabledButton: !inStock }"
            >+</button>
            {{cart}}
            <button 
            class="button" 
            @click="removeFromCart"
            :disabled="!inStock"
            :class="{ disabledButton: !inStock }"
            >-</button>
            <a :href="url">Checkout</a>
        </div>
    </div>`,
  data() {
    return {
        product: 'Socks',
        description: 'Long socks',
        selectedVariant: 0,
        details: ['50% cotton', '30% wool', '20% polyester'],
        url: './checkout.html',
        onSale: true,
        brand: 'Jay ',
        variants: [
            { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
            { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 }
        ],
        sizes: [
            { id: 2234, size: 'S'},
            { id: 2235, size: 'L'},
            { id: 2236, size: 'XL'},
            { id: 2236, size: 'XXL'},
        ]
    }
    },
    methods: {
        addToCart() {
            this.$emit('add-to-cart')
        },
        removeFromCart() {
            this.$emit('remove-from-cart')
        },
        updateVariant(index) {
            this.selectedVariant = index
        }
    },
    computed: {
        title() {
            return this.brand + '' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].image
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity
        },
        onSaleProduct() {
            if (this.inStock) {
                return this.brand + '' + this.product + ' is on sale.'
            } else {
                return this.brand + '' + this.product + ' is not on sale.'
            }
        },
        shipping() {
            if (this.premium) {
                return 'Free'
            }
            return 2.99
        }
    }
})