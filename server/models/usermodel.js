const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username is required'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
    },
    profilePic: {
        type: String,
    },
    role: {
        type: String,
        enum: ['user', 'admin'], // Example roles, customize as needed
        default: 'user',
      },
    listings: {
        type: Array,
    },
    premiumListings: {
        type: Array,
    },
    reports: {
        type: Number, 
    },
    pawPoints: {
        type: Number,
    },
    address: {
        type: String,
    },
}, { timestamps: true });

userSchema.statics.signup = async function(username, email, password, role) {
    var exists = await User.findOne({email})
    if (exists) {
        throw Error('Email already exists')
    }
    const salt  = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const user = this.create({
        username,
        email, 
        password : hash,
    })
    return user;
}
userSchema.statics.login = async function(email, password){
    const user = await this.findOne({email});
    if (!user) {
        throw Error('This email does not exist')
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
        throw Error("Password does not match");
    }
    return user;
}

const User = mongoose.model("user", userSchema);
module.exports = User;