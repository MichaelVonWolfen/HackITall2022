const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CompanySchema = new Schema({
    name: {
        type: String,
        require: true,
        trim: true
    },
    factors: [{
        type: {
            key: {
                type: String,
                trim: true
            },
            value: [{
                type: Number,
                trim: true
            }]
        },
    }],
    category: [{
        type: {
            key: {
                type: String,
                trim: true
            },
            value: [{
                type: String,
                trim: true
            }]
        },
    }]
});

module.exports = mongoose.model("Company", CompanySchema);
