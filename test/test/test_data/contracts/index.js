const faker = require('faker');
const moment = require('moment');

module.exports = {
    contracts: {
        fixedContract: {
            type: "Fixed Rate",
            contractName: faker.company.companyName(),
            job: "QA Engineer",
            scopeOfWork: faker.lorem.sentence(),
            contractStartDate: moment().subtract(1, 'days'),
            rate: "1000",
            currency: "GBP - British Pound",
            cycle: "Week",
            specialClause: faker.lorem.sentence(),
            contractorTaxCountry: "United States",
            contractorTaxState: "Colorado",
        }
    }
}
