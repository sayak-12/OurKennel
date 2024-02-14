const express = require("express");
const multer = require("multer");
const functions = require("../controllers/userfunctions.js")
const router = express.Router();
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./uploads/");
    },
    filename: function (req, file, cb) {
      cb(null, `${Date.now()}-${file.originalname}`);
    },
  });
  const uploader = multer({ storage: storage, dest: 'uploads/' });
router.post("/", functions.index)
router.post("/signup", functions.signup)
router.post("/login", functions.login)
router.post("/upload",uploader.single("file"), functions.upload)
router.post("/update", functions.update)
module.exports = router;