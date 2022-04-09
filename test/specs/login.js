const LoginPage = require('../pageobjects/loginPage') 
const users = require('../testdata/users') 

describe('auth form', () => {
    it('should not login to PlanDay because of the wrong crendentials', async () => {
        await browser.url('https://test1234.planday.com')
        await LoginPage.username.setValue(users.invalidUsername)
        await LoginPage.password.setValue(users.invalidPassword)
        await LoginPage.login()

        await LoginPage.usernameError.waitForDisplayed()
        await expect(LoginPage.usernameError).toHaveTextContaining('The username or password is incorrect.')
        await LoginPage.passwordError.waitForDisplayed()
        await expect(LoginPage.passwordError).toHaveTextContaining('The username or password is incorrect.')
    })

    it('Should login to PlanDay', async () => {
        await browser.url('https://test1234.planday.com')
        await LoginPage.username.setValue(users.validUsername)
        await LoginPage.password.setValue(users.invalidPassword)
        await LoginPage.login()   
    })
})