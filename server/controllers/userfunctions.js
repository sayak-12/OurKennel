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
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 30);
    res.cookie('jwt', token, {
      expires: expirationDate,
      httpOnly: true
    });
    res.status(200).json({email, user})
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
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 30);
    res.cookie('jwt', token, {
      expires: expirationDate,
      httpOnly: true
    });
    res.status(200).json({ user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  signup, login
};
