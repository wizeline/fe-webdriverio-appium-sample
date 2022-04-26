import CommonsScreen from './CommonsScreen'

const ELEMENTS = {
    ADD_CART_BUTTON: '~Add To Cart button',
    PRODUCT_NAME: '~container header',
    PRODUCT_PRICE: '~product price'
}

class ProductScreen extends CommonsScreen {
    constructor () {
        super(ELEMENTS)
    }

    async addToCart () {
        await this.elementTap(ELEMENTS.ADD_CART_BUTTON)
    }

    async getProductDetails () {
        let price = await this.getElementText(ELEMENTS.PRODUCT_PRICE)
        let name = await this.getElementText(ELEMENTS.PRODUCT_NAME)
        return { name, price }
    }

    async getProductPrice () {
        return this.getElementText(ELEMENTS.PRODUCT_PRICE)
    }

    async getProductName () {
        return this.getElementText(ELEMENTS.PRODUCT_NAME)
    }
}

export default new ProductScreen()
