const express = require("express");
const router = express.Router();
var passwordValidator = require('password-validator');
var validator = require("email-validator");
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
const userModel = require("./../models/user");
const passport = require("passport");

router.post("/register", async (req, res) => {
    const {name, email, password} = req.body;
    const schema = new passwordValidator();
    schema
        .is().min(8)
        .is().max(32)
    if (!validator.validate(email))
        return res.status(400).send("Nu-i bun mailul");
    if (!schema.validate(password))
        return res.status(400).send("Nu-i buna parola");
    const new_password = await bcrypt.hash(password, 12);
    await userModel.create({name, email, password: new_password});
    res.send("Succes!");
});


router.post("/login", async (req, res) => {
    const {name, password} = req.body;
    const user = await userModel.findOne({name});
    if (!user)
        return res.status(400).send("Nu a fost gasit numele in DB");
    if (!bcrypt.compareSync(password, user.password))
        return res.status(400).send("N-ai parola buna");

    const token = jwt.sign({user}, 'Evrika');
    res.json({token:token});
})

module.exports = router;