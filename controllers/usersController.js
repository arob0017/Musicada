const db = require("../models");

// Defining methods for the UsersController
module.exports = {
    findAll: function (req, res) {
        db.User
            .find(req.query)
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.User
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.User
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        db.User
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.User
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    removeGenre: async function (req, res) {
        const user = await db.User.findOne({ _id: req.body.userId })
        const genreToRemove = req.body.genre;
        console.log(user)
        db.User.findOneAndUpdate({ _id: req.body.userId }, null, {
            genre: user.genre.filter(g => g !== genreToRemove)
        }).then(resp => res.json(resp)).catch(err => res.status(500).json(err))
    },
    removeInstrument: async function (req, res) {
        const user = await db.User.findOne({ _id: req.body.userId })
        const instrumentToRemove = req.body.otherInstrument;
        console.log(user)
        db.User.findOneAndUpdate({ _id: req.body.userId }, null, {
            otherInstrument: user.otherInstrument.filter(g => g !== instrumentToRemove)
        }).then(resp => res.json(resp)).catch(err => res.status(500).json(err))
    },
    addGenre: async function (req, res) {
        const user = await db.User.findOne({ _id: req.body.userId })
        const genreToAdd = req.body.genre;
        db.User.findOneAndUpdate({ _id: req.body.userId }, null, {
            genre: user.genre.filter(g => g == genreToAdd)
        }).then(resp => res.json(resp)).catch(err => res.status(500).json(err))
    },
};
