class SchedulePage {
    /**
     * define selectors using getter methods
     */
     get board () { return $('#container-platform-scheduling')}
     get timeSlot () { return $('//*[@id="container-platform-scheduling"]/div/div[2]/div[3]/div/div[2]/div[1]/div/div/div[2]/div[2]/div')}
     get shiftStartFrom () { return $('#shiftStartEnd_start')}
     get shiftEndsAt () { return $('#shiftStartEnd_end')}
     get createShiftButton () { return $("//button[contains(.,'Create')]")}
     get timeLine () { return $('//*[@id="container-platform-scheduling"]/div/div[2]/div[3]/div/div[2]/div[1]/div/div/div[2]/div[2]/div/div/div/div[2]')}
     get deleteButton () { return $('//button[contains(.,"Delete")]')}
     get editShiftBox () { return $('//div[contains(@class,"edit-shift-modal__box")]')}
     get employeeName () { return $('//div[@class="row-header3__text__title"][contains(.,"Employee")]')}
    
     /**
     * a method to encapsule automation code to interact with the page
     */
     
    async countEmployees () {
      await this.board.waitForExist({timeout:10000})
      await this.employeeName.waitForExist({timeout:10000})
      const numberOfEmployees = await $$('//div[@class="row-header3__text__title"][contains(.,"Employee")]').length
      await expect(numberOfEmployees).toEqual(3)
    }

     async createShift () {
        await this.board.waitForExist({timeout:10000})
        await this.timeSlot.click()
        await this.editShiftBox.waitForExist({timeout:10000})
        await this.shiftStartFrom.setValue('09.00')
        await this.shiftEndsAt.setValue('17.00')
        await this.createShiftButton.click()
    }

    async checkIfShiftCreated () {
        await this.timeLine.waitForExist({timeout:10000})
        await expect(this.timeLine).toHaveChildren(3)
    }

    async deleteShift() {
        await this.timeSlot.click()
        await this.editShiftBox.waitForExist({timeout:10000})
        await this.deleteButton.click()
        await this.deleteButton.click()
    }

}

module.exports = new SchedulePage()
