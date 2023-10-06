const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PetSchema = new Schema({
    name: {
        type: String,
        required: false // Optional field for pet name
    },
    species: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    contactName: {
        type: String,
        required: true
    },
    contactNumber: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false // Optional field for a short description
    },
    photo: {
        type: String, // Store the path to the uploaded photo or use GridFS for binary data
        required: true
    }
}, { timestamps: true });

const Pet = mongoose.model("Pet", PetSchema);

module.exports = Pet;