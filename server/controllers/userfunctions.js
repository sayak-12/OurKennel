const User = require("../models/usermodel.js");
const jwt = require("jsonwebtoken");
const cloud = require("../utils/cloudinary.js")
const webp = require("webp-converter");
const util = require("util");
const fs = require("fs");
const Usermodel = require("../models/usermodel.js");
const uploadAsync = util.promisify(cloud.v2.uploader.upload);
const unlinkAsync = util.promisify(fs.unlink);

webp.grant_permission();
const createToken = (id) => {
  return jwt.sign({ _id: id }, process.env.SECRET_KEY, { expiresIn: "3d" });
};
const index = async (req, res) => {
  const {user} = req.body;
  try {
    const decoded = jwt.verify(user, process.env.SECRET_KEY);
  var userdecoded = await Usermodel.findById(decoded._id)
  res.json({user: userdecoded});
  } catch (error) {
    console.log(error);
    res.json({msg:"there is error", error})
  }
  
}
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
    const convertedFileName = req.file.filename.replace(/\.[^.]+$/, '.webp');
    await webp.cwebp(req.file.path, convertedFileName, "-q 80");
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
const update = async (req, res)=>{
  const {type, url, token} = req.body;
  try {
    const decoded = jwt.verify(token.token, process.env.SECRET_KEY);
    var result = await Usermodel.findByIdAndUpdate(decoded._id, {profilePic : url})
    res.json({decoded: result});
  } catch (error) {
    console.log(error);
    res.json({error});
  }
  
  
}
module.exports = {
  signup, login, upload, update, index
};
