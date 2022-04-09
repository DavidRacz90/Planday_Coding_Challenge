const Page = require('./page')

module.exports = class LoginPage extends Page {
  /**
   * define elements
   */
  get usernameField () { return $('#Username') }
  get passwordField () { return $('#Password') }
  get loginButton () { return $('#MainLoginButton') }
  get usernameError () { return $('#Username-validation-error')}
  get passwordError () { return $('#Password-validation-error')}

  /**
   * define or overwrite page methods
   */
  // open () {
  //     return super.open('login')
  // }

  async login () {
      await this.loginButton.click()
  }
}

// export default new LoginPage()