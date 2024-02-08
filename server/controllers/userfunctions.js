const User = require("../models/usermodel.js");
const jwt = require("jsonwebtoken");
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
const upload = (req, res) => {
  console.log(req.body);
  res.send(req.file);
}
module.exports = {
  signup, login, upload
};
