const { expect } = require("chai")

class HomePage {
  /**
     * define selectors using getter methods
     */
  get scheduleNavLink () { return $("(//a[@title='Schedule'])")}
  /**
     * a method to encapsule automation code to interact with the page
     */
  async navigateToSchedulePage () {
    await browser.waitUntil( async () => {
      await this.scheduleNavLink.isExisting(), {
        timeout: 15000
      }
    })
    await this.scheduleNavLink.click()
    await expect(browser).toHaveUrlContaining('schedule')
  }
}

module.exports = new HomePage()