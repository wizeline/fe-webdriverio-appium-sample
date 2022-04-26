/* eslint-disable no-undef */
import expect from 'expect'
import testData from '../data/testData'
import MenuScreen from '../screenObjects/MenuScreen'
import LoginScreen from '../screenObjects/LoginScreen'
import CatalogScreen from '../screenObjects/CatalogScreen'
import ProductScreen from '../screenObjects/ProductScreen'
import CartScreen from '../screenObjects/CartScreen'
import CheckoutScreen from '../screenObjects/CheckoutScreen'
import ReviewOrderScreen from '../screenObjects/ReviewOrderScreen'

describe('Checkout validation Suite', () => {
    beforeAll(async () => {
        await MenuScreen.tapOnLogin()
        await LoginScreen.userLogin(testData.credentials.validUser, testData.credentials.validPassword)
    })

    it('Complete a purchase', async () => {
        await CatalogScreen.selectItem(testData.items.backpack)
        await ProductScreen.addToCart()
        await ProductScreen.clickOnCartOption()
        await CartScreen.proceedToCheckout()
        await CheckoutScreen.enterUserData(testData.user.name, testData.user.address, testData.user.city,
            testData.user.zip, testData.user.country)
        await CheckoutScreen.enterPaymentData(testData.user.name, testData.user.cardNumber, testData.user.expirationDate,
            testData.user.securityCode)
        await ReviewOrderScreen.placeOrder()

        let checkoutCompleted = await ReviewOrderScreen.checkoutCompleteDisplayed()

        expect(checkoutCompleted).toBe(true)
    })
})
