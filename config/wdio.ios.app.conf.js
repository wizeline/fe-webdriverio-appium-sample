import dotenv from 'dotenv'
import { config } from './wdio.shared.conf'

dotenv.config()

// ====================
// Specify Test Files
// ====================
config.specs = [
    './e2e/tests/*.js',
]
// Patterns to exclude.
config.exclude = [
    // './e2e/tests/android*.js',
]

// ====================
// Capabilities
// ====================
config.capabilities = [
    {
        platformName: 'iOS',
        maxInstances: 1,
        'appium:platformVersion': '15.2',
        'appium:deviceName': 'iPhone 12',

        'appium:automationName': 'XCUITest',
        'appium:unicodeKeyboard': true,
        'appium:resetKeyboard': true,
        'appium:app': process.env.APP_PATH
    },
]

exports.config = config
