const LoginPage = require('../pageobjects/login.page')
const HomePage = require('../pageobjects/home.page')
const { navigateToSchedulePage } = require('../pageobjects/home.page')


describe('Planday', () => {
    before('Should open the Planday login page and accept the cookies', async() => {
        await LoginPage.openLoginPage()
        await LoginPage.acceptCookies()
    })
    it('Should not login with invalid credentials', async () => {
        await LoginPage.login('invalidUsername','invalidPassword')
        await LoginPage.checkErrorMessages()
    })

    it('Should login with valid credentials', async () => {
        await LoginPage.login('plandayqa@outlook.com', 'APItesting21')
    })

    it('Should redirect to the schedule', async () => {
        await navigateToSchedulePage()
    })
})
