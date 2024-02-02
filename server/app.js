const express = require("express");
const mongoose = require("mongoose");
const app = express();
var dotenv = require('dotenv');
const cors = require('cors');
const route = require('./routes/userRoutes.js')

dotenv.config();
const db = process.env.DATABASE_KEY;
mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
.then(res=>{console.log("Succesfully connected to MongoDB");
//server listen
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
})
.catch(err=>{console.log("Some error occured: \n", err);})
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));
app.use(cors())
app.use(route);

