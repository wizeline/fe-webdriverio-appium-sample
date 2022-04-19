module.exports = {
    messages: {
        login: {
            incorrectCredentials: 'Provided credentials do not match any user in this service.',
            lockedUser: 'Sorry, this user has been locked out.',
            requiredUsername: 'Username is required',
            requiredPassword: 'Password is required',
        },
        logout: 'You are successfully logged out.'
    },
    credentials: {
        validUser: process.env.VALID_USERNAME,
        validPassword: process.env.VALID_PASSWORD,
        lockedUser: process.env.LOCKED_USERNAME,
        emptyField: '',
        invalidUser: 'test@test.com',
        invalidPassword: 'testcredentials'
    }
}
