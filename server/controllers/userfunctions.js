const User = require("../models/usermodel.js");
const jwt = require("jsonwebtoken");
const createToken = (id) => {
  return jwt.sign({ _id: id }, process.env.SECRET_KEY, { expiresIn: "3d" });
};
const signup = async (req, res)=>{
  const {username, email, password} = req.body;
  console.log({
    username, email, password
  })
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
module.exports = {
  signup
};
