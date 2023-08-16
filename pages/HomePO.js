'use strict';
//@ts-check

const { until, By, Builder, RelativeBy, locateWith  } = require('selenium-webdriver');
const locators = require('../config/locators.json');
const { driver, stopTheWorldWaiter, smallWait } = require('../utils/seleniumHelper');

class HomePage {
    constructor() {
        this.locators = locators.homePage;
    }

    get homeUsersButton() {
        const el = driver.findElement(this.locators.homeUsersButton);
        return el;
    }

}

module.exports = new HomePage();