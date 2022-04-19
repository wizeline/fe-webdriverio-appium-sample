import CommonsScreen from './CommonsScreen'

const ELEMENTS = {
    LOG_IN_OPTION: '~menu item log in',
    LOG_OUT_OPTION: '~menu item log out',
    LOG_OUT_BUTTON: '-ios predicate string: label == "Log Out" AND name == "Log Out" AND type == "XCUIElementTypeButton"'
}

class MenuScreen extends CommonsScreen {
    constructor () {
        super(ELEMENTS)
    }

    async tapOnLogin () {
        await this.clickOnMenuOption()
        await this.elementTap(ELEMENTS.LOG_IN_OPTION)
    }

    async tapOnLogOut () {
        await this.clickOnMenuOption()
        await this.elementTap(ELEMENTS.LOG_OUT_OPTION)
        await this.elementTap(ELEMENTS.LOG_OUT_BUTTON)
    }
}

export default new MenuScreen()
