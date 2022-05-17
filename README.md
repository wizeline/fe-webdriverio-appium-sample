
# WebdriverIO + Appium - Mobile Automation Framework Sample

This repository contains the instructions to set WebdriverIO and Appium up to run automated end-to-end tests in a local machine for iOS and Android using the Sample app provided by [Sauce Demo](https://github.com/saucelabs/my-demo-app-rn).


## Table of Contents
- [Introduction](#introduction)
- [Getting Started with Mobile automation](#getting-started-with-mobile-automation)
    - [iOS Set up](#ios-setup)
    - [Android Set up](#android-setup)
- [Tech Stack](#tech-stack)
- [Installing and Setup](#installing-and-setup)
- [Execution in local](#execution-in-local)
- [Execution on BrowserStack](#execution-in-browserstack) - WIP
- [Framework's Structure](#frameworks-structure)
- [Recommendations](#recommendations)
    - [Selectors](#selectors)
- [FAQ](#faq)

## Introduction
The following document provides instructions about the set up required for mobile automation using Appium, as well as describes the technology stack, projects's structure, and general recommendations for the framework's development and maintenance. 

## Getting Started with Mobile automation
* As a starter point it is recommended to install [Homebrew](https://brew.sh/) to help you with the tool installation process.
* Also, we require to download and install [node](https://nodejs.org/en/download/).

    To see if Node is installed, type in `node -v`  Terminal.

    To see if NPM is installed, type in `npm -v`  Terminal.
* Install [appium-doctor](https://www.npmjs.com/package/appium-doctor) to check the required preconditions for appium to run successfully.
```bash
npm install -g appium-doctor
```
>Once installed executed `appium-doctor --ios` for iOS and `appium-doctor --android` to check the status of your mobile set up and find the missing tools required.


## iOS Setup
1. Download and install [XCode](https://developer.apple.com/xcode/) from Mac AppStore or Web.
2. Install required simulators:
    Launch Xcode and select **Xcode > Preferences > Components** to install the simulators that you might want to test against.

    ![Simulators](/assets/Simulators.png)

## Android Setup

1. Download and install [JAVA](https://www.oracle.com/java/technologies/downloads/) JDK.
2. Set up the JAVA_HOME path:

   *  You need to add a JAVA_HOME to the PATH variable inside the .zshrc file (in case there is no .zshrc file refer to [FAQ](#faq) section.):

    ```bash
    open -e ~/.zshrc
    ```

    * In a text editor, add the variable:
    
    ```
    export JAVA_HOME=$(/usr/libexec/java_home)
    export PATH=$JAVA_HOME/bin:$PATH
    ```

    * Save and close the file.

    * Apply the changes:

    ```bash
    source ~/.zshrc
    ```

    * Verify that you have Java installed on your local machine:

    ```bash
    java -version
    ```
3. Install the Android SDK and Platform Tools

    * Go to [Android Studio Download Link](https://developer.android.com/studio?pkg=studio) to download the latest version.
    * Launch the Android Studio DMG file and follow the Setup Wizard instructions through the rest of the setup, which includes downloading Android SDK components that are required for the development.

2. Add the ANDROID_HOME path to your PATH variable inside the .zshrc file:

```bash
open -e ~/.zshrc
```

3. In a text editor, add the following variables:

```bash
export ANDROID_HOME=/Users/<your.user>/Library/Android/sdk

export PATH=$PATH:$ANDROID_HOME/tools

export PATH=$PATH:$ANDROID_HOME/tools/bin

export PATH=$PATH:$ANDROID_HOME/platform-tools
```

4. Save and close the file.

5. Apply the changes:

```bash
source ~/.zshrc
```

## Tech Stack
- [Node](https://nodejs.org/en/)
- [NPM]()
- [Homebrew](https://brew.sh/)
- [Appium Doctor](https://www.npmjs.com/package/appium-doctor)
- [Appium](https://appium.io/)
    - [Appium Server](https://github.com/appium/appium-desktop/releases)
    - [Appium Inspector](https://github.com/appium/appium-inspector/releases)
- [WebdriverIO](https://webdriver.io/)
- [Jasmine](https://jasmine.github.io/)
- [Allure Reporter](https://webdriver.io/docs/allure-reporter/)
- [Eslint](https://eslint.org/)
- [Xcode](https://developer.apple.com/xcode/)
- [Android Studio](https://developer.android.com/studio)
- [BrowserStack](https://www.browserstack.com/)
​​

## Installing and Setup

After installing the prerequisites, open a terminal and follow the next steps
to install the project:

1. Clone the repository:

   ```shell
   https://github.com/wizeline/webdriverio-appium.git
   ```

2. Move into the newly created folder:

   ```shell
   cd webdriverio-appium
   ```

3. Install the project dependencies:

   ```shell
   npm install
    ```
4. You need to create a .env file with the following variables(use .env.example file as reference):

    ```bash
    APP_PATH_ANDROID= #Path to the sample app .apk file
    APP_PATH_IOS= #Path to the sample app .app file

    TEST_ENV= # Environment were the tests will be executed i.e. local

    TEST_RETRIES= #Number of intents the test will execute in case the first time fails

    USER_EMAIL= #User used to login to Fox Profile
    USER_PASSWORD= #Password used to login to Fox Profile
    ```
5. Navigate to [Sauce Demo](https://github.com/saucelabs/my-demo-app-rn/releases/) and download the latest version of the Sample App, .apk for Android and .app/.ipa for iOS.

6. Copy the path where the previously Sample app is stored and paste it into:
    ```bash
    APP_PATH_ANDROID= #Path to the sample app .apk file
    APP_PATH_IOS= #Path to the sample app .app/.ipa file
    ```

## Execution in local

To run the tests:

```bash
npm run <test script>
```

For example:

```bash
npm run e2e:ios
npm run lint
npm run allure:reporter
```

## Framework's Structure

To support tests for the different SDKs, we follow the next structure : 

```bash
.
├── config
│   ├── android
│   └── ios
├── e2e
│   ├── data
│   ├── screens
│   │   ├── BaseScreen.js
│   │   ├── CommonsScreen.js
│   │   └── LoginScreen.js
│   ├── test
│   │   ├── loginTests.js
│   │   ├── checkoutTests.js
│   │   └── reviewTests.js
│   └── utils
└── reports
    └── allure-results
```

## Recommendations:


### Selectors 
If there are no _element ID_, _acesibility ID_ or the  xpath of the element is too long; we recomend to use [Android UiSelector](https://developer.android.com/reference/android/support/test/uiautomator/UiSelector) and [iOS Predicates](http://appium.io/docs/en/writing-running-appium/ios/ios-predicate/). 

Read the following documentation for more detailed information about mobile [locators](https://kobiton.com/book/chapter-4-appium-locator-finding-strategies).

- Android

Different examples for mobile locators in Android.

![Android mobile locators](/assets/android-mobile-locators.png)

```javascript
Accesibility_ID: '~menu item log in',
Ui_Selector: 'android=new UiSelector().description("menu item log in")'
Xpath: '//android.view.ViewGroup[@content-desc="menu item log in"]'
```

- iOS

Different examples for mobile locators in iOS.

![iOS mobile locators](/assets/ios-mobile-locators.png)

```javascript
Accessibility_ID: '~menu item log in',
Class_Chain: '-ios class chain:**/XCUIElementTypeOther[`label == "Log In"`]',
Predicate_String: '-ios predicate string: type == "XCUIElementTypeOther" && label == "Log In"',
Xpath: '//XCUIElementTypeOther[@name="menu item log in"]'
```

## FAQ
Q1) How do I create a .zshrc file?

A1) Follow the instructions described in this [post](https://superuser.com/questions/886132/where-is-the-zshrc-file-on-mac).