const cloudinary  = require('cloudinary');
const dotenv = require('dotenv');
dotenv.config();
cloudinary.config({ 
    cloud_name: process.env.CLOUDNAME, 
    api_key: process.env.API_KEY, 
    api_secret: process.env.CLOUDSECRET 
  });
module.exports = cloudinary;