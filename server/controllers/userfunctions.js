const User = require("../models/usermodel.js");
const jwt = require("jsonwebtoken");
const cloud = require("../utils/cloudinary.js")
const webp = require("webp-converter");
const util = require("util");
const fs = require("fs");
const uploadAsync = util.promisify(cloud.v2.uploader.upload);
const unlinkAsync = util.promisify(fs.unlink);

webp.grant_permission();
const createToken = (id) => {
  return jwt.sign({ _id: id }, process.env.SECRET_KEY, { expiresIn: "3d" });
};
const signup = async (req, res)=>{
  const {username, email, password} = req.body;
  if (email == ""||password==""||username == "") {
    res.status(400).json({error: "Please fill out all fields"})
  }
  else{
    try{
    const user = await User.signup(username, email, password);
    const token = createToken(user._id);
    res.status(200).json({email, user, token})
  }
  catch (err){
    res.status(400).json({error: err.message})
  }
  }
  
}
const login = async (req, res) => {
  const { email, password } = req.body;
  if (email == "" || password == "") {
    return res.status(400).json({ error: "Please fill out all fields" });
  }
  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);
    res.status(200).json({ user, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const upload = async (req, res) => {
  let result; // Define result outside the try block

  try {
    console.log(req.file);
    const convertedFileName = req.file.filename.replace(/\.[^.]+$/, '.webp');
    console.log(convertedFileName);
    await webp.cwebp(req.file.path, convertedFileName, "-q 80");
    console.log("reaching here");
    result = await uploadAsync(convertedFileName);
    await Promise.all([unlinkAsync(req.file.path), unlinkAsync(convertedFileName)]);
  } catch (error) {
    console.error("Error uploading file:", error);
    return res.status(500).json({
      output: false,
      error: "Error uploading file to Cloudinary",
    });
  }
  
  res.status(200).json({
    output: "ok",
    uploadResults: result,
  });
};

module.exports = {
  signup, login, upload
};
