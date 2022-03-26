const companies = require("./seeder")();
const company = require("./../models/company");

const parseCompany = async () => {

    companies.forEach(async (element) => {
        let category, factories;
        factories = [];
        category = [];
        console.log("------");
        (element.categories).forEach((categorie) => {
                Object.keys(categorie).forEach((category_name) => {
                    //category.push({key: category_name, value: []});
                    let mm = [];
                    categorie[category_name].forEach((factory) => {
                        factories.push(factory);
                        mm.push(factory.key);
                    });
                    category.push({key: category_name, value: mm});

                });
            }
        )
        // console.log(category);
        // console.log(factories);

        await company.create({name: element.stockSymbol, factors: factories, category});
    })
}

module.exports = {
    parseCompany
};