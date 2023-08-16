'use strict';
//@ts-check

const { until, By, Builder, RelativeBy, locateWith  } = require('selenium-webdriver');
const locators = require('../config/locators.json');
const { driver } = require('../utils/seleniumHelper');

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

    async LoginToSystem(userName, password) {
        const emailEl = await this.getEmail();
        await emailEl.sendKeys(userName);
        await this.password.sendKeys(password);
        await this.loginButton.click();
        
    }
}

module.exports = new LoginPage();