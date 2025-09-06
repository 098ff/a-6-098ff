const mongoose = require("mongoose");

const HospitalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add a hospital name"],
        unique: true,
        trim: true,
        maxlength: [50, "Hospital name can not be more than 50 characters"],
    },
    address: {
        type: String,
        required: [true, "Please add an address"],
    },
    district: {
        type: String,
        required: [true, "Please add at least one district"],
    },
    province: {
        type: String,
        required: [true, "Please add a province"],
    },
    postalcode: {
        type: String,
        required: [true, "Please add a postal code"],
        maxlength: [5, "Postal code can not be more than 5 characters"],
    },
    tel: {
        type: String,
    },
    region: {
        type: String,
        required: [true, "Please add a region"],
    },
});

module.exports = mongoose.model("Hospital", HospitalSchema);