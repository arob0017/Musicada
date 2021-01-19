let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect("mongodb://localhost/project3", {
    useNewUrlParser: true,
    useFindAndModify: false
});