'use strict';
//@ts-check

const frisby = require('frisby');
const Joi = require('joi');
const locators = require('../config/locators.json');
const loginPage = require('../pages/loginPO');

class API {
    constructor() {
        this.locators = locators.api;
    }
    async post() {
        frisby.globalSetup({
            request: {
                headers: {
                    'Content-Type': 'application/json; charset=utf-8',
                    "Access-Token": await loginPage.getAccessToken()
                }
            }
        });

        await frisby.post(`https://clarity.dexcom.com${this.locators.session}`)
            .expect('status', 200)
            .then((res) => {
                expect(res.json.analysisSessionId).not.toBe(null);
                console.log(res.json);
            });
    }
}

module.exports = new API();