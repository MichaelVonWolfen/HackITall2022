const express = require("express");
const router = express.Router();
const companyModel = require("./../models/company");

router.get("/average/:company/:category", async (req, res) => {
    const companiaPLM = req.params.company;
    const categorie = req.params.category;
    const company = await companyModel.findOne({name: companiaPLM});
    const factory = company.category.filter((element) => element.key === categorie)[0];
    console.log(company);
    const medie = [0, 0, 0, 0, 0]
    factory.value.forEach((element) => {
        const procent = company.factors.find((factor) => factor.key === element);
        for (let i = 0; i < procent.value.length; i++)
            medie[i] += procent.value[i];
    })
    const plm = medie.map(x => x / (factory.value.length));
    res.send(plm);
});

router.get("/average/:category", async (req, res) => {
    try{
        console.log("AICI PICA?")
        const category = req.params.category;
        const companies = await companyModel.find();
        const sumTotal = [0, 0, 0, 0, 0];
        companies.forEach(company => {
            const factors = company.category.filter(elem => elem.key === category)[0];
            console.log(factors)
            const medie = [0, 0, 0, 0, 0];
            factors.value.forEach(element => {
                const procent = company.factors.find((factor) => factor.key === element);
                for(let i = 0; i < procent.value.length; i++)
                    medie[i] += procent.value[i];
            });
            const med = medie.map(x => x / factors.value.length);
            med.forEach((elem, i) => {
                sumTotal[i] += elem;
            });
        });
        const medieTotal = sumTotal.map(x => x / companies.length);
        res.send(medieTotal);

        console.log("NU PICA")
    }catch (e){
        console.log(e)
        return res.sendStatus(500)
    }
});

module.exports = router;
