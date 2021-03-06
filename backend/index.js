const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const mongoose = require("mongoose");
const env = require("./config");
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

const company = require("./routes/router");
const user = require("./routes/register");
app.use("/api", company);
app.use("/api", user);

app.listen(env.port, () => {
    console.log("Listening on port 5000");
})