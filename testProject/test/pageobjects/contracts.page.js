const Page = require('./page');

class ContractsPage extends Page {
    get btnFixeRateContract() {
        return $('[href="/create/fixed"]')
    }

    async selectContractType() {
        await (await this.btnFixeRateContract).click();
    }

}

module.exports = new ContractsPage();
