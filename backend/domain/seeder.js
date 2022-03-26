module.exports = () => {
    let companyNames = ["AAPL", "MSFT", "GOOGL", "AMZN", "FB", "TSM", "NVDA", "TSLA", "JNJ", "PG"];

    let factors = ["Business Ethics", "Competitive Behavior", "Management of the Legal & Regulatory Environment", 
                    "Critical Incident Risk Management", "Labor Practices", "Employee Engagement, Diversity & Inclusion",
                    "Human Rights & Community Relations", "Data Security", "Product Quality & Safety", "Ecological Impacts"];

    let category = ["Leadership & Governance", "Leadership & Governance", "Leadership & Governance", "Leadership & Governance", 
                    "Human Capital", "Human Capital", "Social Capital", "Social Capital", "Social Capital", "Environment"];
    let companies = []; 
    companyNames.forEach(name => {
        let company = {stockSymbol: name, factors: []};
        let i = 0;
        factors.forEach(factorName => {
            company.factors.push({
                name: factorName, 
                score: (Math.random() * (20 - 5) + 5).toFixed(2),
                category: category[i]})
            i++;
        });
        companies.push(company);
    });

    //console.log(JSON.stringify(companies, null, 4));
    return companies;
}