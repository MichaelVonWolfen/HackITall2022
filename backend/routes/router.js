const express = require("express");
const router = express.Router();
const companyModel = require("./../models/company");
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const categoryMap = require("../domain/categoryMap");

router.get("/average/:company/:category", async (req, res) => {
    const companie = req.params.company;
    const categorie = req.params.category;
    const company = await companyModel.findOne({name: companie});
    const factory = company.category.filter((element) => element.key === categorie)[0];
    const medie = [0, 0, 0, 0, 0]
    factory.value.forEach((element) => {
        const procent = company.factors.find((factor) => factor.key === element);
        for (let i = 0; i < procent.value.length; i++)
            medie[i] += procent.value[i];
    })
    const response = medie.map(x => x / (factory.value.length));
    res.send(response);
});

router.get("/average/:category", async (req, res) => {
    try{
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
    }catch (e){
        console.log(e)
        return res.sendStatus(500)
    }
});

router.get("/factors/:company", async (req, res) => {
    try{
        const companyName = req.params.company;
        const company = await companyModel.findOne({name: companyName});
        const esg = {};
        company.factors.forEach(factor => {
            let sum = 0;
            for(let i = 0; i < 5; i++)
                sum += factor.value[i];
                esg[categoryMap[factor.key]] = sum;
        });
        res.send(esg);
    }catch (e){
        console.log(e)
        return res.sendStatus(500)
    }
});

router.get("/prediction/:company/:category", async(req, res) => {
    const company = req.params.company;
    const category = req.params.category;
    const findCompany = await companyModel.findOne({name: company});
    const factory = findCompany.category.find((element) => element.key === category);
    const medie = [0, 0, 0, 0, 0];

    factory.value.forEach(async (element) => {
        const procent = findCompany.factors.find((factor) => factor.key === element);
        const date = [];
        for (let i = 0; i < procent.value.length; i++)
            date.push([procent.value[i]]);
        await exec("python ./ml/ml.py " + date, (err, stdout, stderr) => {
            if (err) {
                console.log(`error: ${err.message}`);
                return;
            }
            if (stderr) {
                console.log(`stderr: ${stderr}`);
                return;
            }
           var b = stdout.split(',').map(function(item) {
                if (item[0]==='[')
                    return parseFloat(item.substring(1, item.length));
                return  parseFloat(item, 10);
            });

        for (let i=0;i<medie.length;i++){
            medie[i]+=b[i];
        } 
        if (element === factory.value[factory.value.length -1])
            {
                const ceva = medie.map((item)=>{
                    return  item=item/(medie.length);
                })
                res.send(ceva);
            }
        })    
    })
})

router.get("/prediction/:category", async(req, res) => {
    try{
        const category = req.params.category;
        const companies = await companyModel.find();
        const sumTotal = [0, 0, 0, 0, 0];
        const medie = [0, 0, 0, 0, 0]; 
        let index = 0;
        let prediction;
        companies.forEach(company => {
            const factors = company.category.filter(elem => elem.key === category)[0];
            factors.value.forEach( (element) => {
                const procent = company.factors.find((factor) => factor.key === element);
                index+=1;
                for(let i = 0; i < procent.value.length; i++){
                    medie[i]+=procent.value[i];
                }
            });
        });
        let data = medie.map((x)=> x/index);
        await exec("python ./ml/ml.py " + data, (err, stdout, stderr) => {
            if (err) {
                console.log(`error: ${err.message}`);
                return;
            }
            if (stderr) {
                console.log(`stderr: ${stderr}`);
                return;
            }
           prediction = stdout.split(',').map(function(item) {
                if (item[0]==='[')
                    return parseFloat(item.substring(1, item.length));
                return  parseFloat(item, 10);
            });
            res.send(prediction); 
        })
      
    }catch (e){
        console.log(e)
        return res.sendStatus(500)
    }
})

module.exports = router;
