const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");
// Load User model
const db = require("../../models");
const usersController = require("../../controllers/usersController");


// Matches with "/api/user"
router.route("/")
    .get(usersController.findAll)
    .post(usersController.create);

// Matches with "/api/user/:id"
router
    .route("/:id")
    .get(usersController.findById)
    .put(usersController.update)
    .delete(usersController.remove);

// Matches with /api/user/genre
router.route("/genre").post(usersController.removeGenre)
// router.route("/genre").post(usersController.addGenre)

// Matches with /api/user/otherInstrument

router.route("/otherInstrument").post(usersController.removeInstrument)

// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/register", (req, res) => {
    // Form validation
    const { errors, isValid } = validateRegisterInput(req.body);
    // Check validation
    console.log(req.body, isValid);
    if (!isValid) {
        return res.status(400).json(errors);
    }

    db.User.findOne({ email: req.body.email }).then(user => {
        if (user) {
            return res.status(400).json({ email: "Email already exists" });
        } else {
            const newUser = new db.User({
                name: req.body.name,
                email: req.body.email,
                DOB: req.body.DOB,
                password: req.body.password,
                instrumentMain: req.body.instrumentMain,
                otherInstrument: req.body.otherInstrument,
                genre: req.body.genre,
                jam: req.body.jam
            });
            // Hash password before saving in database
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser
                        .save()
                        .then(({ name, id, email, DOB, instrumentMain, otherInstrument, genre, jam }) => res.json({ name, id, email, DOB, instrumentMain, otherInstrument, genre, jam }))
                        .catch(err => console.log(err));
                });
            });
        }
    });
});

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/login", (req, res) => {
    // Form validation
    const { errors, isValid } = validateLoginInput(req.body);
    // Check validation
    console.log(req.body, isValid);
    if (!isValid) {
        return res.status(400).json(errors);
    }
    const email = req.body.email;
    const password = req.body.password;

    // Find user by email
    db.User.findOne({ email }).then(user => {
        // Check if user exists
        if (!user) {
            return res.status(404).json({ emailnotfound: "Email not found" });
        }
        // Check password
        bcrypt.compare(password, user.password).then(isMatch => {
            if (isMatch) {
                // User matched
                // Create JWT Payload
                // const payload = {
                //     id: user.id,
                //     name: user.name
                // };
                // Sign token
                // jwt.sign(
                //     payload,
                //     keys.secretOrKey,
                //     {
                //         expiresIn: 31556926 // 1 year in seconds
                //     },
                //     (err, token) => {
                //         res.json({
                //             success: true,
                //             token: "Bearer " + token
                //         });
                //     }
                // );
                const { name, id, email, DOB, instrumentMain, otherInstrument, genre, jam } = user;
                res.json({ name, id, email, DOB, instrumentMain, otherInstrument, genre, jam })
            } else {
                return res
                    .status(400)
                    .json({ passwordincorrect: "Password incorrect" });
            }
        });
    });
});

module.exports = router;