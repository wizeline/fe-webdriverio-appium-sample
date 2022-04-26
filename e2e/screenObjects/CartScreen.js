import CommonsScreen from './CommonsScreen'

const ELEMENTS = {
    NO_ITEMS: '~No Items',
    NO_ITEMS_MESSAGE: '~Oh no! Your cart is empty. Fill it up with swag to complete your purchase.',
    PRODUCT_NAME: '~product label',
    PRODUCT_PRICE: '~product price',
    CHECKOUT_BUTTON: '~Proceed To Checkout button',
    REMOVE_ITEM: '~remove item',
    TOTAL_ITEMS: '~total number'
}

class CartScreen extends CommonsScreen {
    constructor () {
        super(ELEMENTS)
    }

    async noItemsDisplayed () {
        return this.elementDisplayed(ELEMENTS.NO_ITEMS)
    }

    async getNoItemsMessage () {
        return this.getElementText(ELEMENTS.NO_ITEMS_MESSAGE)
    }

    async getTotalItems () {
        return this.getElementText(ELEMENTS.TOTAL_ITEMS)
    }

    async removeItemFromCart (index) {
        await this.elementTap(ELEMENTS.REMOVE_ITEM[index])
    }

    async proceedToCheckout () {
        await this.elementTap(ELEMENTS.CHECKOUT_BUTTON)
    }
}

export default new CartScreen()
