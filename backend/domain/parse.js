const companies = require("./seeder")();
const company = require("./../models/company");

const parseCompany = async () => {

    companies.forEach(async (element) => {
        let category, factories;
        factories = [];
        category = [];
        
        (element.categories).forEach((categorie) => {
                Object.keys(categorie).forEach((category_name) => {
                    let categ = [];
                    categorie[category_name].forEach((factory) => {
                        factories.push(factory);
                        categ.push(factory.key);
                    });
                    category.push({key: category_name, value: mm});

                });
            }
        )
        await company.create({name: element.stockSymbol, factors: factories, category});
    })
}

module.exports = {
    parseCompany
};