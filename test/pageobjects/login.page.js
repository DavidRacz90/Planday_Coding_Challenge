const Page = require('./page');

class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
     get cookieConsentButton () { return $('#cookie-consent-button')}
     get usernameField () { return $('#Username') }
     get passwordField () { return $('#Password') }
     get loginButton () { return $('#MainLoginButton') }
     get usernameError () { return $('#Username-validation-error')}
     get passwordError () { return $('#Password-validation-error')}
   

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.usernameField.setValue(username);
        await this.passwordField.setValue(password);
        await this.loginButton.click();
    }
    
    async checkErrorMessages () {
        await this.usernameError.isExisting()
        await this.passwordError.isExisting()
        await expect(this.usernameError).toHaveTextContaining('The username or password is incorrect.')  
        await expect(this.passwordError).toHaveTextContaining('The username or password is incorrect.')  
    }

    async acceptCookies () {
        await this.cookieConsentButton.click()
    }

    async openLoginPage () {
        super.open()
    }
}

module.exports = new LoginPage();
