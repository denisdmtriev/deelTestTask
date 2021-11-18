const Page = require('./page');

class CreateContractsPage extends Page {
    get txtContractName() { return $('[name="name"]') }
    get txtContractScope() { return $('[name="scope"]') }
    get selectDate() { return $('[name="effectiveDate"]') }
    get btnNext() { return $('.button[theme="primary"]') }
    get txtRate() {return $('[name="rate"]') }
    get txtJob() {return $('[name="jobTitle"]') }
    get txtCurrency() {return $('[data-qa="currency-select"] .select__single-value') }
    get txtPer() {return $('[data-qa="cycle-select"] .select__control') }
    get btnAddASpecialClause() {return $('[data-qa="special-clause-card"] button') }
    get txtSpecialClause() {return $('[data-qa="special-clause-card"] textarea') }
    get txtContractorCountry() {return $('[data-qa="contractor-tax-residence"] .select__control') }
    get txtContractorState() {return $('[data-qa="contractor-tax-residence-province"] .select__control') }

    async fillContractName(name) {
        await (await this.txtContractName).setValue(name);
    }

    async fillContractScope(scope) {
        await (await this.txtContractScope).setValue(scope);
    }

    async selectContractStartDate(date) {
        await (await this.selectDate).click();
        await (await $(`[aria-label="${date}"]`)).click();
    }

    async fillRate(rate) {
        await (await this.txtRate).setValue(rate);
    }

    async selectCurrency(currency) {
        await (await this.txtCurrency).click();
        await (await $(`div=${currency}`)).click();
    }

    async selectJobTitle(job) {
        await (await this.txtJob).click();
        await (await this.txtJob).setValue(job);
        await (await $(`p=${job}`)).click();
    }

    async selectCycle(per) {
        await (await this.txtPer).click();
        await (await $(`div=${per}`)).click();
    }

    async addSpecialClause(value) {
        await (await this.btnAddASpecialClause).click()
        await (await this.txtSpecialClause).setValue(value);
    }

    async selectContractorCountry(country) {
        await (await this.txtContractorCountry).click();
        await (await $(`div=${country}`)).click();
    }

    async selectTaxContractorState(state) {
        await (await this.txtContractorState).click();
        await (await $(`div=${state}`)).click();
    }

    async clickNext() {
        await (await (await this.btnNext).waitForClickable());
        await (await this.btnNext).click();
    }
}

module.exports = new CreateContractsPage();
