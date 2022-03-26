const express = require("express");
const seeder = require("./domain/seeder")
const app = express();
const bodyParser = require("body-parser")
const mongoose = require("mongoose");
const env = require("./config");
const axios = require("axios");
const company = require("./models/company");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect(env.mongo_path, () => {
    console.log("Mongoose Initialized");
})
// const parse = require("./domain/parse");
// parse.parseCompany();

// axios.get(env.db_path).then(res => {
//     console.log(res.data)
// });


app.listen(env.port, () => {
    // let companies = seeder();
    // console.log(JSON.stringify(companies, null, 4));
    console.log("Listening on port 5000");
})