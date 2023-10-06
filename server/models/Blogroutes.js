
const express = require("express");
const functions = require("../controllers/blogfunctions.js")
const router = express.Router();


router.get("/all-blogs", functions.blog_index)
router.get("/pet-registration", functions.blog_create_get)
router.post("/pet-registration", functions.blog_create_post)

router.get("/reviews/:id", functions.single_blog_index)
module.exports = router;