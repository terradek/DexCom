'use strict';
//@ts-check

const { until, By, Builder, RelativeBy, locateWith  } = require('selenium-webdriver');
const locators = require('../config/locators.json');
const { driver } = require('../utils/seleniumHelper');

class RoomPage {
    constructor() {
        this.locators = locators.roomPage;
    }

    get logOut() {
        const el = driver.wait(until.elementLocated(this.locators.logOut), 6000);
        return el;
    }

}

module.exports = new RoomPage();