const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullname: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: { type: String, required: true }, // To be hashed with bcrypt
    role: {
        type: String, 
        enum: ['admin', 'doctor', 'patient', 'receptionist'],
        default: 'patient'
    },
    phoneNumber: { type: String },
    isActive: { type: Boolean, default: true }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);