const express = require("express");
const seeder = require("./domain/seeder")
const app = express();
const bodyParser = require("body-parser")
const mongoose = require("mongoose");
const env = require("./config");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect(env.mongo_path, () => {
    console.log("Mongoose Initialized");
})

let companies = seeder();

app.listen(env.port, () => {
    console.log(JSON.stringify(companies, null, 4));
    console.log("Listening on port 5000");
})