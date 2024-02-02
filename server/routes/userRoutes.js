const express = require("express");
const functions = require("../controllers/userfunctions.js")
const router = express.Router();


router.post("/signup", functions.signup)
module.exports = router;