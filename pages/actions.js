
import { expect } from "@playwright/test";

export class actions {
    constructor(page, context) {
        this.page = page;
        this.context = context;
        this.dismissPopup = page.locator('.button-footer .close-dialog'); 
        this.notYetaCustomer = page.locator('#login-form > #newCustomerLink');
        this.registrationEmail = page.locator('#emailControl'); 
        this.registrationPassword = page.locator('#passwordControl'); 
        this.registrationConfirmPassword = page.locator('#repeatPasswordControl'); 
        this.registrationSecurityQ = page.locator('#mat-select-1'); 
        this.registrationSecurityAns = page.locator('#securityAnswerControl'); 
        this.dropDownOptionsWait = page.locator('mat-option');
        this.selectDropDownOption = page.locator('mat-option >> text=');
        this.register = page.locator('#registration-form > #registerButton');
        this.addToCartBtn = page.locator('button', { hasText: 'Add to Basket' });
        this.email = page.locator('#email'); 
        this.password = page.locator('#password'); 
        this.accountBtn = page.locator('#navbarAccount');
        this.navLoginBtn = page.locator('#navbarLoginButton');
        this.loginBtn = page.locator('#login-form > #loginButton'); 
        this.addToCartAssertion = page.locator('.mat-mdc-snack-bar-label.mdc-snackbar__label');
        this.addToCartAssertionText = /Placed .* into basket\./;
        this.securityQ = 'mat-option >> text=';
        this.invalideLoginError = page.locator('.error.ng-star-inserted');
        this.invalideLoginErrorText = ('Invalid email or password.');
    }

    async visit() {
        await this.page.goto("/");
    }

    async login(email, password) {
        await this.dismissPopup.click();
        await this.accountBtn.click(); 
        await this.navLoginBtn.click(); 
        await this.email.fill(email);
        await this.password.fill(password);
        await this.loginBtn.click(); 
    }

    async registerUser(email, password, confirmPassword, securityQuestion, securityAnswer) {
        await this.dismissPopup.click();
        await this.accountBtn.click(); 
        await this.navLoginBtn.click(); 
        await this.notYetaCustomer.click();
        await this.registrationEmail.fill(email); 
        await this.registrationPassword.fill(password); 
        await this.registrationConfirmPassword.fill(confirmPassword);
        await this.page.waitForTimeout(3000);
        await this.registrationSecurityQ.click();
        await this.page.locator(this.securityQ + securityQuestion).click();
        await this.registrationSecurityAns.fill(securityAnswer); 
        await this.register.click();
    }

    async addToCart(count) {
        for (let i = 0; i < count; i++) {
            await this.addToCartBtn.nth(i).click();
            await this.page.waitForTimeout(2000);
            await expect(this.addToCartAssertion).toContainText(this.addToCartAssertionText); 
        }
    }

    async invalidLoginAssrtion() {
        await expect(this.invalideLoginError).toHaveText(this.invalideLoginErrorText); 
    }

}
