import { DEFAULT_TIMEOUT, CONTEXT_REF } from '../utils/constants'

export default class BaseScreen {
    constructor (selector) {
        this.selector = selector
    }

    /**
     * Waits for an specific element and clicks on in when displayed
     *
     * @param {selector} selector
     */
    async elementTap (selector) {
        await this.waitForElement(selector)
        const element = await this.find(selector)
        await element.click()
    }

    /**
     * Wait an element to be visible
     *
     * @param {selector} selector
     * @return {boolean}
     */

    async elementDisplayed (selector) {
        const element = await this.find(selector)
        try {
            await this.waitForElement(selector)
            return await element.isDisplayed()
        } catch (error) {
            return false
        }
    }

    /**
     * Returns if an element to be visible in that exact time
     *
     * @param {selector} selector
     * @return {boolean}
     */
    async elementVisible (selector) {
        const element = await this.find(selector)
        try {
            return await element.isDisplayed()
        } catch (error) {
            return false
        }
    }

    /**
     * Find and return the expected element if available
     *
     * @param {selector} selector
     * @return {element}
     */
    async find (selector) {
        return $(selector)
    }

    /**
     * Finds and return an array withe the element that match with the specified selector if available
     *
     * @param {selector} selector
     * @return {array of elements}
     */
    async finds (selector) {
        return $$(selector)
    }

    /**
     * Finds and return the desired element's value if available
     *
     * @param {selector} selector
     * @param {attribute} attribute
     * @return {string}
     */
    async getElementAttribute (selector, attribute) {
        await this.waitForElement(selector)
        const element = await this.find(selector)
        return element.getAttribute(attribute)
    }

    /**
     * Finds and return the desired element's text if available
     *
     * @param {selector} selector
     * @return {string}
     */
    async getElementText (selector) {
        await this.waitForElement(selector)
        const element = await this.find(selector)
        return element.getText()
    }

    /**
     * Returns String with current context
     *
     * @return {String} Containing the current context
     */
    async getCurrentContext () {
        return driver.getContext()
    }

    /**
     * Returns an object with the list of all available contexts
     *
     * @return {object} An object containing the list of all available contexts
     */
    async getCurrentContexts () {
        return driver.getContexts()
    }

    /**
     * Finds the required element and type text in it if available
     *
     * @param {selector} selector
     * @param {text} text
     */
    async sendText (selector, text) {
        const element = await this.find(selector)
        await this.waitForElement(selector)
        await element.clearValue()
        await element.setValue(text)
        await driver.pause(350)

        // Workaround to hide keyboard on iOS
        const returnButtonKeyBoard = await this.find('~Return')
        const doneButtonKeyBoard = await this.find('~Done')
        const context = await this.getCurrentContext()

        if (context.includes(CONTEXT_REF.NATIVE)) {
            if (await returnButtonKeyBoard.isDisplayed()) {
                await returnButtonKeyBoard.click()
                await driver.pause(300)
            } else if (await doneButtonKeyBoard.isDisplayed()) {
                await doneButtonKeyBoard.click()
                await driver.pause(300)
            }
        }
    }

    /**
     *  iOS Native: Select an option from a picker wheel depending on the amount of swipes and the direction
     *
     * @param {selector} selector
     * @param {totalSwipes} totalSwipes
     * @param {direction} direction next or previous
     */
    async selectPickerWheelValue (selector, totalSwipes, direction) {
        await this.waitForElement(selector)

        for (let count = 0; count < totalSwipes; count++) {
            await browser.execute('mobile: selectPickerWheelValue',
                {
                    'order': direction,
                    'offset': 0.15,
                    'element': await this.getElementAttribute(selector, 'UID')
                })
        }
    }

    /**
     *  iOS Native: Select an element to swipe into and the direction
     *
     * @param {selector} selector
     * @param {direction} direction left, right, up and down
     * @param {offset} offset percentage of the screen required to swipe
     */
    async swipeOnElement (selector, direction, offset) {
        await this.waitForElement(selector)

        await browser.execute('mobile: swipe',
            {
                'direction': direction,
                'offset': offset,
                'element': await this.getElementAttribute(selector, 'UID')
            })
    }

    /**
     *  Android Function: Swipe android screen
     *
     * @param {section} section
     */
    async swipeOnScreen (section) {
        const from = { x: 300, y: 650 }
        const to = { x: 300, y: 150 }
        for (let i = 0; i < section; i++) {
            await driver.pause(from, to)
        }
    }

    /**
     *  iOs Function: Switch content between NATIVE_APP and WEBVIEW
     *
     * @param {section} section
     */
    async switchToWebview (context) {
        if (context.includes(CONTEXT_REF.WEBVIEW)) {
            await this.waitForWebViewContextLoaded()
        }
        await driver.switchContext(this.getCurrentContexts()[context === CONTEXT_REF.WEBVIEW ? 1 : 0])
        if (context.includes(CONTEXT_REF.WEBVIEW)) {
            await this.waitForDocumentFullyLoaded()
        }
    }

    /**
     * Perform a touch/tap action on the specified coordinates on the device screen.
     *
     * @param {coordinatesX} coordinatesX
     * @param {coordinatesY} coordinatesY
     */
    async tapOnCoordinates (coordinatesX, coordinatesY) {
        await driver.touchAction({ action: 'tap', x: coordinatesX, y: coordinatesY })
    }

    /**
     * Wait for the login screen to be visible
     *
     * @param {selector} selector
     */
    async waitForElement (selector) {
        const element = await this.find(selector)
        return element.waitForDisplayed(DEFAULT_TIMEOUT)
    }

    /**
     * Wait for the webview context to be loaded
     *
     * By default you have `NATIVE_APP` as the current context. If a webview is loaded it will be
     * added to the current contexts and will looks something like this
     * `["NATIVE_APP","WEBVIEW_28158.2"]`
     * The number behind `WEBVIEW` can be any string
     */
    async waitForWebViewContextLoaded () {
        await driver.waitUntil(
            () => {
                const currentContexts = this.getCurrentContexts()
                return currentContexts.length > 1 &&
                currentContexts.find(context => context.includes(CONTEXT_REF.WEBVIEW))
            }, {
                timeoutMsg: 'Webview context not loaded',
                interval: 100,
            },
        )
    }

    /**
     * Wait for the document to be full loaded
     */
    async waitForDocumentFullyLoaded () {
        await driver.waitUntil(
            () => driver.execute(() => document.readyState) === 'complete',
            {
                timeoutMsg: 'Website not loaded',
                interval: 100,
            },
        )
    }
}
