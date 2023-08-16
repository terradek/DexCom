'use strict';
//@ts-check

const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const browser = require('../config/config.json');

const browserName = browser.browserName;

class BrowserFactory {
    static getInstance() {
        let options;
        switch (browserName) {
            case 'chrome':
                options = new chrome.Options();
                options.addArguments('disable-extensions');
                options.addArguments('start-maximized');
                return new webdriver.Builder().forBrowser('chrome').setChromeOptions(options).build();
            case 'firefox':
                return new webdriver.Builder().withCapabilities(webdriver.Capabilities.firefox()).build();
            case 'safari':
                return new webdriver.Builder().withCapabilities(webdriver.Capabilities.safari()).build();
            default:
                console.log('Invalid browser name. Please specify a valid browser name in the environment variable or config.json file.');
                return null;
        }
    }
}

async function smallWait(){ 
    return new Promise((resolve, reject) => {    setTimeout(() => resolve("Fulfilled"), 3000)  });
}
async function stopTheWorldWaiter(){ 
    return new Promise((resolve, reject) => {    setTimeout(() => resolve("Fulfilled"), 30000000)  });
}

module.exports = {
    driver: BrowserFactory.getInstance(),
    stopTheWorldWaiter,
    smallWait
};



