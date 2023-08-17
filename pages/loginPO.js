'use strict';
//@ts-check

const { until, By, Builder, RelativeBy, locateWith  } = require('selenium-webdriver');
const locators = require('../config/locators.json');
const { driver, stopTheWorldWaiter } = require('../utils/seleniumHelper');

class LoginPage {
    constructor() {
        this.locators = locators.loginPage;
    }

    getEmail = async () => {

        const el = await driver.wait(until.elementLocated(this.locators.email), 40000);
        await driver.wait(until.elementIsVisible(el), 60000);

        return el;
    }

    get password() {
        const el = driver.wait(until.elementLocated(this.locators.password), 40000);
        
        return el;
    }
 
    get loginButton() {
        const el = driver.wait(until.elementLocated(this.locators.loginButton), 40000);
        return el;
    }

    get accessToken() {
       return this.getAccessToken().then((token)=> token);
    }

    async LoginToSystem(userName, password) {
        const emailEl = await this.getEmail();
        await emailEl.sendKeys(userName);
        await this.password.sendKeys(password);
        await this.loginButton.click();
        await this.getAccessToken();
    }

    async getAccessToken() {
        const page = await driver.getPageSource();
        const regex = /(?<=window.ACCESS_TOKEN = ")[^"]+/;
        return page.match(regex)[0];
    }
}

module.exports = new LoginPage();