module.exports = () => {
    let companyNames = ["AAPL", "MSFT", "GOOGL", "AMZN", "FB", "TSM", "NVDA", "TSLA", "JNJ", "PG"];

    let factors = ["Business Ethics", "Competitive Behavior", "Management of the Legal & Regulatory Environment", 
                    "Critical Incident Risk Management", "Labor Practices", "Employee Engagement", "Diversity & Inclusion",
                    "Human Rights & Community Relations", "Data Security", "Product Quality & Safety", "Ecological Impacts"];

    let categories = ["Leadership & Governance", "Human Capital", "Social Capital", "Environment"];
    
    let companies = []; 

    companyNames.forEach(name => {
        let company = {stockSymbol: name, categories: []};
        let category1 = {"Leadership & Governance": []};
        for(let i = 0; i < 4; i++) {
            let factor = {
                key: factors[i],
                value: []
            };

            for(let zi = 0; zi < 5; zi++){
                factor.value.push((Math.random() * (20 - 5) + 5).toFixed(2));
            }
            category1["Leadership & Governance"].push(factor);
        }

        let category2 = {"Human Capital": []};
        for(let i = 0; i < 2; i++) {
                let factor = {
                    key: factors[4+i],
                    value: []
                };
                for(let zi = 0; zi < 5; zi++){
                    factor.value.push((Math.random() * (20 - 5) + 5).toFixed(2));
                }

                category2["Human Capital"].push(factor);
        }

        let category3 = {"Social Capital": []};
        for(let i = 0; i < 3; i++) {
            let factor = {
                key: factors[6+i],
                value: []
            };
            for(let zi = 0; zi < 5; zi++) {
                factor.value.push((Math.random() * (20 - 5) + 5).toFixed(2));
            }
            category3["Social Capital"].push(factor);
        }

        let category4 = {"Environment": []};
        let factor = {
            key: factors[factors.length - 1],
            value: []
        };
        for(let zi = 0; zi < 5; zi++){
            factor.value.push((Math.random() * (20 - 5) + 5).toFixed(2));
        }
        category4["Environment"].push(factor);
        // factors.forEach(factorName => {
        //     company.factors.push({
        //         name: factorName, 
        //         score: (Math.random() * (20 - 5) + 5).toFixed(2),
        //         category: category[i]})
        //     i++;
        // });
        company.categories = [category1, category2, category3, category4];
        companies.push(company);
    });

    return companies;
}
