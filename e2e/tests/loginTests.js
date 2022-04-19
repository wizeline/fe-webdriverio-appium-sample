import expect from 'expect'
import testData from '../data/testData'
import LoginScreen from '../screenObjects/LoginScreen'
import MenuScreen from '../screenObjects/MenuScreen'

describe('Login feature tests', () => {
    beforeEach(async () => {
        await MenuScreen.tapOnLogin()
    })

    it('Login using a valid username and password', async () => {
        await LoginScreen.userLogin(testData.credentials.validUser, testData.credentials.validPassword)
        await MenuScreen.tapOnLogOut()

        let isLogoutAlertDisplayed = await LoginScreen.userLogOutAlertDisplayed()
        let logoutAlertText = await LoginScreen.userLogOutAlertMessage()
        await LoginScreen.closeAlertOK()

        expect(isLogoutAlertDisplayed).toBe(true)
        expect(logoutAlertText).toEqual(testData.messages.logout)
    })

    it('Login with missing username and password', async () => {
        await LoginScreen.userLogin(testData.credentials.emptyField, testData.credentials.emptyField)

        let missingCredentialsError = await LoginScreen.requiredUsernameErrorMessage()

        expect(missingCredentialsError).toEqual(testData.messages.login.requiredUsername)
    })

    it('Login with valid username but missing password', async () => {
        await LoginScreen.userLogin(testData.credentials.validUser, testData.credentials.emptyField)

        let missingPasswordError = await LoginScreen.requiredPasswordErrorMessage()

        expect(missingPasswordError).toEqual(testData.messages.login.requiredPassword)
    })

    it('Login with missing username but valid password', async () => {
        await LoginScreen.userLogin(testData.credentials.emptyField, testData.credentials.validPassword)

        let missingUsernameError = await LoginScreen.requiredUsernameErrorMessage()

        expect(missingUsernameError).toEqual(testData.messages.login.requiredUsername)
    })

    it('Login with locked username', async () => {
        await LoginScreen.userLogin(testData.credentials.lockedUser, testData.credentials.validPassword)

        let lockedUserError = await LoginScreen.lockedUserErrorMessage()

        expect(lockedUserError).toEqual(testData.messages.login.lockedUser)
    })

    it('Login with invalid credentials', async () => {
        await LoginScreen.userLogin(testData.credentials.invalidUser, testData.credentials.invalidPassword)

        let invalidCredentialsMessage = await LoginScreen.invalidCredentialsErrorMessage()

        expect(invalidCredentialsMessage).toEqual(testData.messages.login.incorrectCredentials)
    })
})
