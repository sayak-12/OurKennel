const express = require("express");
const functions = require("../controllers/userfunctions.js")
const router = express.Router();


router.post("/signup", functions.signup)
router.post("/login", functions.login)
module.exports = router;