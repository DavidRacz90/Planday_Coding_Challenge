class HomePage {
  /**
     * define selectors using getter methods
     */
  get scheduleNavLink () { return $('#root > div > header > nav.sc-bqiRlB.hJGaWF > ul > li:nth-child(2) > a')}
  /**
     * a method to encapsule automati'on code to interact with the page
     */
  async navigateToSchedulePage () {
    await this.scheduleNavLink.waitForExist(20000)
    await this.scheduleNavLink.click()
    await expect(browser).toHaveUrlContaining('schedule')
  }
}

module.exports = new HomePage()
