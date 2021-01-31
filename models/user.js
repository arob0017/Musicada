const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    DOB: {
        type: String,
    },
    password: {
        type: String,
        required: true
    },
    instrumentMain: {
        type: String,
        lowercase: true,
        trim: true,
    },
    otherInstrument: {
        type: [String],
        trim: true,
    },
    genre: {
        type: [String],
        trim: true,
    },
    date: {
        type: Date,
        default: Date.now
    },

    jam: {
        type: String,
        enum: ["yes", "no"]
    },
    band: {
        type: String,
        enum: ["Find a Band", "Recruit for a Band"]
    },
});
const User = mongoose.model("users", UserSchema);
module.exports = User;