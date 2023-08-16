'use strict';
//@ts-check

const { driver, waiting, smallWait } = require('../utils/seleniumHelper');
const { until, By, Builder, RelativeBy, locateWith  } = require('selenium-webdriver');

const homePage = require('../pages/HomePO');
const loginPage = require('../pages/loginPO');
const roomPage = require('../pages/roomPO');
const config = require('../config/config.json');
const baseUrl = config.baseUrl, 
    userName = config.login, 
    password = config.password;

describe('DexCom Front page and Login testing', function () {

    beforeAll(async () => {
        await driver.get(baseUrl);
    });

    it("Dexcom. First test. Test Front page", async function () {
        await homePage.homeUsersButton.click();
        await loginPage.LoginToSystem(userName, password);

        //Checking the page has a LogOut button
        const success = await roomPage.logOut;
        expect(success.isDisplayed()).toBeTruthy();
    }, 35000);


    afterAll(async function() {
        await driver.quit();
    });
});
