const express = require("express");
const router = express.Router();
const companyModel = require("./../models/company");

router.get("/average/:company/:category", async (req, res) => {
    const companiaPLM = req.params.company;
    const categorie = req.params.category;
    const company = await companyModel.findOne({name: companiaPLM});
    const factory = company.category.filter((element) => element.key === categorie)[0];
    const medie = [0, 0, 0, 0, 0]
    factory.value.forEach((element) => {
        const procent = company.factors.find((factor) => factor.key === element);
        for (let i = 0; i < procent.value.length; i++)
            medie[i] += procent.value[i];
    })
    const plm = medie.map(x => x / (factory.value.length));
    res.send(plm);
});

router.get("/average-all/:category", async (req, res) => {
    const category = req.params.category;
    const companies = await companyModel.find();
    const factors = companies.category.filter(elem => elem.key === category)[0];
    const medie = [0, 0, 0, 0];
    console.log(factors);
});

module.exports = router;