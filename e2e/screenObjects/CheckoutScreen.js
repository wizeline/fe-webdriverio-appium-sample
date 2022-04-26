import CommonsScreen from './CommonsScreen'

const ELEMENTS = {
    FULL_NAME: '~Full Name* input field',
    ADDRESS: '~Address Line 1* input field',
    CITY: '~City* input field',
    ZIP_CODE: '~Zip Code* input field',
    COUNTRY: '~Country* input field',
    TO_PAYMENT_BUTTON: '~To Payment button',
    CARD_NUMBER: '~Card Number* input field',
    EXPIRATION_DATE: '~Expiration Date* input field',
    SECURITY_CODE: '~Security Code* input field',
    REVIEW_ORDER_BUTTON: '~Review Order button'
}

class CheckoutScreen extends CommonsScreen {
    constructor () {
        super(ELEMENTS)
    }

    async enterUserData (name, address, city, zipCode, country) {
        await this.sendText(ELEMENTS.FULL_NAME, name)
        await this.sendText(ELEMENTS.ADDRESS, address)
        await this.sendText(ELEMENTS.CITY, city)
        await this.sendText(ELEMENTS.ZIP_CODE, zipCode)
        await this.sendText(ELEMENTS.COUNTRY, country)
        await this.elementTap(ELEMENTS.TO_PAYMENT_BUTTON)
    }

    async enterPaymentData (name, cardNumber, expiration, cvv) {
        await this.sendText(ELEMENTS.FULL_NAME, name)
        await this.sendText(ELEMENTS.CARD_NUMBER, cardNumber)
        await this.sendText(ELEMENTS.SECURITY_CODE, cvv)
        await this.sendText(ELEMENTS.EXPIRATION_DATE, expiration)
        await this.elementTap(ELEMENTS.REVIEW_ORDER_BUTTON)
    }
}
export default new CheckoutScreen()
