const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const mongoose = require("mongoose");
const env = require("./config");
const axios = require("axios");
const cors = require('cors');

app.use(cors({
    origin: 'http://localhost:3000'
}));
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

const company = require("./routes/router");
app.use("/api", company);

app.listen(env.port, () => {
    console.log("Listening on port 5000");
})