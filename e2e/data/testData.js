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
    },
    items: {
        backpack: 'Sauce Labs Backpack',
        light: 'Sauce Labs Bike Light',
        tShirt: 'Sauce Labs Bolt T-Shirt',
        fleece: 'Sauce Labs Fleece Jacket',

    },
    user: {
        name: 'Homero Sipmson',
        address: 'Avenida Siempreviva No 712',
        city: 'Springfield',
        zip: 89758,
        country: 'US',
        cardNumber: '4111111111111111',
        expirationDate: 1227,
        securityCode: 333
    }
}
