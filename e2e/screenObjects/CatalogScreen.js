import testData from '../data/testData'
import CommonsScreen from './CommonsScreen'

const ELEMENTS = {
}

class CatalogScreen extends CommonsScreen {
    constructor () {
        super(ELEMENTS)
    }

    async selectItem (itemToSelect) {
        await this.elementTap(`~${itemToSelect}`)
    }

    async reviewFromCatalog (itemToReview) {
        let index = 1
        switch (itemToReview) {
        case testData.items.backpack:
            index = 1
            break
        case testData.items.light:
            index = 2
            break
        case testData.items.tShirt:
            index = 3
            break
        case testData.items.fleece:
            index = 4
            break
        default:
            index = 1
        }
        await this.clickOnReview(index)
    }
}

export default new CatalogScreen()
