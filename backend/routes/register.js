const express = require("express");
const router = express.Router();
var passwordValidator = require('password-validator');
var validator = require("email-validator");
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
const userModel = require("./../models/user");
const passport = require("passport");

router.post("/register", async (req, res) => {
    console.log(req.body)
    const {name, email, password} = req.body;
    const schema = new passwordValidator();
    schema
        .is().min(8)
        .is().max(32)
    if (!validator.validate(email)){
        console.log("Email invalid")
        return res.status(400).send({err:"Nu-i bun mailul"});
    }
    if (!schema.validate(password)){
        console.log("Parola nu este velida")
        return res.status(400).send({err:"Nu-i buna parola"});
    }
    const new_password = await bcrypt.hash(password, 12);
    await userModel.create({name, email, password: new_password});
    return res.status(201).send({ok:"Succes!"});
});


router.post("/login", async (req, res) => {
    const {name, password} = req.body;
    console.log(req.body);
    const user = await userModel.findOne({name});
    if (!user)
        return res.status(400).send("Nu a fost gasit numele in DB");
    if (!bcrypt.compareSync(password, user.password))
        return res.status(400).send("N-ai parola buna");

    const token = jwt.sign({user}, 'Evrika');
    res.json({token:token});
})

module.exports = router;