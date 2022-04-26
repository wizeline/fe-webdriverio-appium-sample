import BaseScreen from './BaseScreen'

const ELEMENTS = {
    BACK_ARROW: '~navigation back button',
    CATALOG_OPTION: '~tab bar option catalog',
    CART_OPTION: '~tab bar option cart',
    CLOSE_MODAL: '~Close Modal button',
    MENU_OPTION: '~tab bar option menu',
    OK_BUTTON: '~OK',
    PRODUCT_ITEM: '-ios class chain:**/XCUIElementTypeOther[`name == "product row"`]',
    PRODUCT_PRICE: '~product price',
    REVIEW_MODAL: '~Thank you for submitting your review!',
    REVIEW_STAR: '-ios class chain:**/XCUIElementTypeOther[`name == "review star 5"`]',
    TOTAL_PRICE: '~total price'
}
export default class CommonsScreen extends BaseScreen {
    constructor () {
        super(ELEMENTS)
    }

    async clickOnMenuOption () {
        await this.elementTap(ELEMENTS.MENU_OPTION)
    }

    async clickOnCartOption () {
        await this.elementTap(ELEMENTS.CART_OPTION)
    }

    async clickOnCatalogOption () {
        await this.elementTap(ELEMENTS.CATALOG_OPTION)
    }

    async closeAlertOK () {
        await this.elementTap(ELEMENTS.OK_BUTTON)
    }

    async clickOnBackArrow () {
        await this.elementTap(ELEMENTS.BACK_ARROW)
    }

    async clickOnReview (index = 1) {
        await this.elementTap(`-ios class chain:**/XCUIElementTypeOther[\`name == "review star 5"\`][${index}]`)
    }

    async getProductPrice () {
        let originalPrice = await this.getElementText(ELEMENTS.PRODUCT_PRICE)
        let newPrice = originalPrice.replace('$', '')
        return parseFloat(newPrice)
    }

    async getTotalPrice () {
        let originalPrice = await this.getElementText(ELEMENTS.TOTAL_PRICE)
        let newPrice = originalPrice.replace('$', '')
        return parseFloat(newPrice)
    }

    async reviewModalDisplayed () {
        let modalDisplayed = await this.elementDisplayed(ELEMENTS.REVIEW_MODAL)
        await this.elementTap(ELEMENTS.CLOSE_MODAL)
        return modalDisplayed
    }

    async totalItems () {
        let totalItems = await this.finds(ELEMENTS.PRODUCT_ITEM)
        let countedItems = totalItems.length
        return countedItems.toString()
    }
}
