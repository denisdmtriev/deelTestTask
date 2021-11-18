const Page = require('./page');

class ContractDetailsPage extends Page {
    get labelContractType() {
        return $('[data-qa="contract-type"]')
    }

    get labelJobTitle() {
        return $('[data-qa="job-title"]')
    }

    get labelContractStartDate() {
        return $('[data-qa="contractors-start-date"]')
    }

    get labelContractRate() {
        return $('[data-qa="rate"]')
    }

    get labelContractCountry() {
        return $('[data-qa="contractors-country"]')
    }

    get labelSpecialClause() {
        return $('[data-qa="dpa-row-special-clause-value"] .pre-wrap')
    }

    get labelContractScope() {
        return $('.scope-text')
    }

    async checkContractType(type) {
        await (await this.labelContractType).waitForDisplayed();
        expect(await (await this.labelContractType).getText()).toHaveText(type, {ignoreCase: true})
    }

    async checkContractStartDate(date) {
        await (await this.labelContractStartDate).waitForDisplayed();
        expect(await (await this.labelContractStartDate).getText()).toEqual(date.format('MMM Do, YYYY'))
    }

    async checkContractRate(rate) {
        await (await this.labelContractRate).waitForDisplayed();
        expect(await (await this.labelContractRate).getText()).toContain(rate.replace(/\B(?=(\d{3})+(?!\d))/g, ","))
    }

    async checkContractCountry(country, state) {
        await (await this.labelContractCountry).waitForDisplayed();
        expect(await (await this.labelContractCountry).getText()).toEqual(`${state} (${country})`)
    }

    async checkContractSpecialClause(clause) {
        await (await this.labelSpecialClause).waitForDisplayed();
        expect(await (await this.labelSpecialClause).getText()).toEqual(clause)
    }

    async checkContractJobTitle(job) {
        await (await this.labelJobTitle).waitForDisplayed();
        expect(await (await this.labelJobTitle).getText()).toEqual(job)
    }

    async checkContractScope(scope) {
        await (await this.labelContractScope).waitForDisplayed();
        expect(await (await this.labelContractScope).getText()).toEqual(scope)
    }
}

module.exports = new ContractDetailsPage();
