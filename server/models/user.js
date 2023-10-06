const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');
const validator = require('validator');

const Userschema = new Schema({
    username: {
        type: String,
        required: [true, 'Full name is required']
    },
    email: {
        type: String,
        required: [true, 'email is required'],
        unique: true,
        validate: {
            validator: function (v) {
                // Check if the email is in a valid format using a regular expression
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
            },
            message: 'Invalid email format'
        }
    },
    phone: {
        type: String,
        required: true,
        validate: {
            validator: function (v) {
                return /^[0-9]{10}$/.test(v);
            },
            message: 'Phone number must be exactly 10 digits long'
        }
    },
    address: {
        type: String,
        required: [true, 'Address is required']
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    }
}, { timestamps: true });


//static signup function
Userschema.statics.signup = async function (username, email, phone, address, password, cpass) {
    const exists = await this.findOne({email});
    if (!exists){
        if(password === cpass){
            var salt = await bcrypt.genSalt(10);
        var hash = await bcrypt.hash(password, salt);
        const user = await this.create({username: username, email: email, phone:phone, address:address, password: hash});
        return user;
        }
        else{
            throw Error("user validation failed: format: Password and Confirm password fields don't match");
        }
    }
    else{
        throw Error("user validation failed: format: Email already exists");

    }
}
//static login function
Userschema.statics.login = async function(email, password){
    const user = await this.findOne({email});
    if (!user){
        throw Error("user validation failed: email: This email does not exist");
    }
    else{
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            throw Error("user validation failed: password: Password does not match");

        }
        return user;
    }
}

const User = mongoose.model("user", Userschema);

module.exports= User;