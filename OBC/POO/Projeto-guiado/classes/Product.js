module.exports = class Product {
    constructor( name, description, price, inStock = 0 ) {
        this.name = name
        this.description = description
        this.price = price
    }

    addInStock(quantity) {
        this.inStock += quantity 
    }

    removeStock(quantity) {
        this.inStock -= quantity
    }
}