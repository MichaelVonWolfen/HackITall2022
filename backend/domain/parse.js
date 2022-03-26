const companies = require("./seeder")();
const company = require("./../models/company");

const parseCompany = async () => {
    companies.forEach((element) => {
        let companie, category = [], factories;
        // console.log(element.stockSymbol);
        console.log(JSON.stringify(element, null, 4));
        (element.categories).forEach((categorie) => {
                companie = [];
                factories = [];
                category = [];
                Object.keys(categorie).forEach((category_name) => {
                    category.push(category_name);
                    categorie[category_name].forEach((factory) => {


                        //console.log(factories[factory.name]);
                    });
                });

            }
        )
    })
}

module.exports = {
    parseCompany
};