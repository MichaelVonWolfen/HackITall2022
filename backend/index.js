const express = require("express");
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

// axios.get(env.db_path).then(res => {
//     console.log(res.data)
// });

// const gigel = async () => {
//     await company.create({
//         name: "Marcel",
//         factors: [{key: "das", value: [1, 2]}, {key: "dasdas", value: [1, 3, 4]}],
//         category: ["Plm"]
//     });
// }
// gigel();

app.listen(env.port, () => {

    console.log("Listening on port 5000");
})