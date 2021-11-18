const { addFeature } = require('@wdio/allure-reporter').default;
const LoginPage = require('../../pageobjects/login.page');
const DashboardPage = require('../../pageobjects/dashboard.page');
const ContractsPage = require('../../pageobjects/contracts.page');
const CreateContractsPage = require('../../pageobjects/createContract.page');
const ContractDetailsPage = require('../../pageobjects/contractDetails.page');
const contractData = require('../../test_data/contracts/index');
const userData = require('../../test_data/users/index');

describe('create fixed contract', () => {
  it('should create a fixed contract', async () => {
    addFeature('should create a fixed contract');

    let fixedContract = contractData.contracts.fixedContract

    // Open Login page
    await LoginPage.open();
    // Login
    await LoginPage.login(userData['user']['email'], userData['user']['password']);
    // Open "Contracts" page
    await DashboardPage.clickMenuItem('Create a Contract');
    // Select Contract Type
    await ContractsPage.selectContractType();

    // Create contract
    await CreateContractsPage.fillContractName(fixedContract['contractName']);
    await CreateContractsPage.selectJobTitle(fixedContract['job']);
    await CreateContractsPage.fillContractScope(fixedContract['scopeOfWork']);
    await CreateContractsPage.selectContractStartDate(fixedContract['contractStartDate'].format('D MMMM YYYY'));
    await CreateContractsPage.clickNext();
    await CreateContractsPage.fillRate(fixedContract['rate']);
    await CreateContractsPage.selectCurrency(fixedContract['currency']);
    await CreateContractsPage.selectCycle(fixedContract['cycle']);
    await CreateContractsPage.clickNext();
    await CreateContractsPage.clickNext();
    await CreateContractsPage.addSpecialClause(fixedContract['specialClause']);
    await CreateContractsPage.clickNext();
    await CreateContractsPage.selectContractorCountry(fixedContract['contractorTaxCountry']);
    await CreateContractsPage.selectTaxContractorState(fixedContract['contractorTaxState'])
    await CreateContractsPage.clickNext();

    // Check Details of the Created Contract
    await ContractDetailsPage.checkContractType(fixedContract["type"])
    await ContractDetailsPage.checkContractJobTitle(fixedContract["job"])
    await ContractDetailsPage.checkContractStartDate(fixedContract["contractStartDate"])
    await ContractDetailsPage.checkContractCountry(fixedContract["contractorTaxCountry"], fixedContract["contractorTaxState"])
    await ContractDetailsPage.checkContractSpecialClause(fixedContract["specialClause"])
    await ContractDetailsPage.checkContractScope(fixedContract["scopeOfWork"])
    await ContractDetailsPage.checkContractRate(fixedContract["rate"])
  });
});
