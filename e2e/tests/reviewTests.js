import expect from 'expect'
import testData from '../data/testData'
import CatalogScreen from '../screenObjects/CatalogScreen'
import ProductScreen from '../screenObjects/ProductScreen'

describe('Review tests scripts', () => {
    it('Review product from catalog screen', async () => {
        await CatalogScreen.reviewFromCatalog(testData.items.fleece)

        let reviewModalDisplayed = await CatalogScreen.reviewModalDisplayed()

        expect(reviewModalDisplayed).toBeTruthy()
    })

    it('Review product from product\'s screen', async () => {
        await CatalogScreen.selectItem(testData.items.fleece)
        await ProductScreen.clickOnReview()

        let reviewModalDisplayed = await CatalogScreen.reviewModalDisplayed()

        expect(reviewModalDisplayed).toBeTruthy()
    })
})
