import CommonsScreen from './CommonsScreen'

const ELEMENTS = {
    ERROR_CREDENTIALS: '-ios predicate string: type == "XCUIElementTypeStaticText" && name CONTAINS "Provided credentials do not match"',
    ERROR_LOCKED_USER: '-ios predicate string: type == "XCUIElementTypeStaticText" && name CONTAINS "this user has been locked out."',
    ERROR_REQUIRED_PASSWORD: '-ios predicate string: name == "Password is required"',
    ERROR_REQUIRED_USERNAME: '-ios predicate string: name == "Username is required"',
    LOGIN_BUTTON: '~Login button',
    LOG_OUT_ALERT: '-ios class chain:**/XCUIElementTypeStaticText[`label == "You are successfully logged out."`]',
    PASSWORD_INPUT: '-ios predicate string: name == "Password input field"',
    USERNAME_INPUT: '-ios class chain:**/XCUIElementTypeTextField[`name == "Username input field"`]'
}

class LoginScreen extends CommonsScreen {
    constructor () {
        super(ELEMENTS)
    }

    async invalidCredentialsErrorMessage () {
        return this.getElementText(ELEMENTS.ERROR_CREDENTIALS)
    }

    async lockedUserErrorMessage () {
        return this.getElementText(ELEMENTS.ERROR_LOCKED_USER)
    }

    async userLogin (username, password) {
        await this.sendText(ELEMENTS.USERNAME_INPUT, username)
        await this.sendText(ELEMENTS.PASSWORD_INPUT, password)
        await this.elementTap(ELEMENTS.LOGIN_BUTTON)
    }

    async userLogOutAlertDisplayed () {
        return this.elementDisplayed(ELEMENTS.LOG_OUT_ALERT)
    }

    async userLogOutAlertMessage () {
        return this.getElementText(ELEMENTS.LOG_OUT_ALERT)
    }

    async requiredUsernameErrorMessage () {
        return this.getElementText(ELEMENTS.ERROR_REQUIRED_USERNAME)
    }

    async requiredPasswordErrorMessage () {
        return this.getElementText(ELEMENTS.ERROR_REQUIRED_PASSWORD)
    }
}

export default new LoginScreen()
