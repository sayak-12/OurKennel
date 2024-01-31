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