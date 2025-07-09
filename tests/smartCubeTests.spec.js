import { test } from "../lib/fixtures"
const moment = require('moment');
const timestamp = moment().format('YYYYMMDDHHmmss');
const email = 'test' + timestamp + '@smartcube.com';
const password = '123canon!';
const securityQuestion = 'Name of your favorite pet?';
const securityAnswer = 'Fluffy';

test.describe("Smart Cube Assignment: Web Application Automation Project", () => {
    test.beforeEach(async ({ actions }) => {
            await actions.visit();
    })

    test("User Registration:", async ({ actions }) => {
            await actions.registerUser(email, password, password, securityQuestion, securityAnswer);
    })

    test("Sign In & Add Items to Cart", async ({ actions }) => {
            await actions.login(email, password);
            await actions.assertLogin();
            await actions.addToCart(3);
    })

    test("-ve Try login with wrong password", async ({ actions }) => {
            await actions.login(email, 'abc1123');
            await actions.invalidLoginAssrtion();

    })
})