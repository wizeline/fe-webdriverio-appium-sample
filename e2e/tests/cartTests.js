
import expect from 'expect'
import testData from '../data/testData'
import MenuScreen from '../screenObjects/MenuScreen'
import LoginScreen from '../screenObjects/LoginScreen'
import CatalogScreen from '../screenObjects/CatalogScreen'
import ProductScreen from '../screenObjects/ProductScreen'
import CartScreen from '../screenObjects/CartScreen'

describe('Checkout validation Suite', () => {
    beforeAll(async () => {
        await MenuScreen.tapOnLogin()
        await LoginScreen.userLogin(testData.credentials.validUser, testData.credentials.validPassword)
    })

    it('Complete a purchase', async () => {
        await CatalogScreen.selectItem(testData.items.backpack)
        await ProductScreen.addToCart()

        let backpackPrice = await CartScreen.getProductPrice()

        await ProductScreen.clickOnBackArrow()
        await CatalogScreen.selectItem(testData.items.fleece)
        await ProductScreen.addToCart()

        let fleecePrice = await CartScreen.getProductPrice()

        await ProductScreen.clickOnCatalogOption()
        await CatalogScreen.selectItem(testData.items.tShirt)
        await ProductScreen.addToCart()

        let tShirtPrice = await CartScreen.getProductPrice()

        await ProductScreen.clickOnCartOption()

        let totalItems = await CartScreen.getTotalItems()
        let countTotalItems = await CartScreen.totalItems()
        let totalPrice = await CartScreen.getTotalPrice()
        let expectedPrice = backpackPrice + tShirtPrice + fleecePrice

        expect(totalItems).toContain(countTotalItems)
        expect(totalPrice).toEqual(expectedPrice)
    })
})
