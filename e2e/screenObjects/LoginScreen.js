import CommonsScreen from './CommonsScreen'

const ELEMENTS = {
    ERROR_CREDENTIALS: '~Provided credentials do not match any user in this service.',
    ERROR_LOCKED_USER: '~Sorry, this user has been locked out.',
    ERROR_REQUIRED_PASSWORD: '~Password is required',
    ERROR_REQUIRED_USERNAME: '~Username is required',
    LOGIN_BUTTON: '~Login button',
    LOG_OUT_ALERT: '~You are successfully logged out.', // **/XCUIElementTypeAlert[`label == "You are successfully logged out."`]
    PASSWORD_INPUT: '~Password input field',
    USERNAME_INPUT: '~Username input field'
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
