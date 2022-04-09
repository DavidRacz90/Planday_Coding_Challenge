module.exports = class Page {
    async open () {
        return browser.url('https://test1234.planday.com/')
    }
}
