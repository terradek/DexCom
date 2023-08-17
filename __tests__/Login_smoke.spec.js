'use strict';
//@ts-check

/**
 * Test Steps:
1.      Start with a GET call to https://clarity.dexcom.com
2.      Login with username and password codechallenge / Password123
3.      Make HTTP POST request call to "/api/subject/1681277794575765504/analysis_session"
4.      Assert analysisSessionId should not be None
 */

const { driver, waiting, smallWait, stopTheWorldWaiter } = require('../utils/seleniumHelper');
const { until, By, Builder, RelativeBy, locateWith  } = require('selenium-webdriver');

const homePage = require('../pages/HomePO');
const loginPage = require('../pages/loginPO');
const api = require('../utils/api');
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
        const token = await loginPage.getAccessToken();
        console.log(token);

        //Checking the page has a LogOut button
        const success = await roomPage.logOut;
        expect(success.isDisplayed()).toBeTruthy();
        
        //Checking POST response not null
        await api.post();
    }, 35000);


    afterAll(async function() {
        await driver.quit();
    });
});
