import CommonsScreen from './CommonsScreen'

const ELEMENTS = {
    PLACE_ORDER_BUTTON: '~Place Order button',
    CHECKOUT_COMPLETE: '~Checkout Complete'
}

class ReviewOrderScreen extends CommonsScreen {
    constructor () {
        super(ELEMENTS)
    }

    async placeOrder () {
        await this.elementTap(ELEMENTS.PLACE_ORDER_BUTTON)
    }

    async checkoutCompleteDisplayed () {
        return this.elementDisplayed(ELEMENTS.CHECKOUT_COMPLETE)
    }
}
export default new ReviewOrderScreen()
