import BaseScreen from './BaseScreen'

const ELEMENTS = {
    CATALOG_OPTION: '-ios predicate string: type == "XCUIElementTypeButton" && name CONTAINS "option catalog"',
    CART_OPTION: '-ios predicate string: type == "XCUIElementTypeButton" && name CONTAINS "option cart"',
    MENU_OPTION: '-ios predicate string: name CONTAINS \'option menu\'',
    OK_BUTTON: '~OK'
}

export default class CommonsScreen extends BaseScreen {
    constructor () {
        super(ELEMENTS)
    }

    async clickOnMenuOption () {
        await this.elementTap(ELEMENTS.MENU_OPTION)
    }

    async closeAlertOK () {
        await this.elementTap(ELEMENTS.OK_BUTTON)
    }
}
