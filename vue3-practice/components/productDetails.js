app.component('product-details', {
    props: {
        details: {
            type: String,
            required: true
        }
    },
    template: 
    ` Details:
    <ul>
      <li v-for="detail in details">{{detail}}</li>
    </ul>
    <ul>
      <li v-for="size in sizes">{{size}}</li>
    </ul>`,
    data() {
        return {
            details: ['50% cotton', '30% wool', '20% polyester'],
        }
    },

})