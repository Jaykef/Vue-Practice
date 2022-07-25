app.component('product-details', {
    props: {
        details: {
            type: String,
            required: true
        }
    },
    template:
    `<p>Product Details goes here</p>`
})