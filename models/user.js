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
        type: String,
        trim: true,
    },
    genre: {
        type: String,
        trim: true,
    },
    date: {
        type: Date,
        default: Date.now
    },
    // jamming: {
    //     type: String
    // },
    // jam: {
    //     type: Boolean,
    // },
    // bandFind: {
    //     type: Boolean,
    // },
    // bandRecruit: {
    //     type: Boolean,
    // }
});
const User = mongoose.model("users", UserSchema);
module.exports = User;