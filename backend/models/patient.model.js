const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    dateOfBirth: { type: Date, required: true },
    gender: { type: String, enum: ["Male", "Female", "Other"], required: true },
    bloodGroup: { type: String, enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"] },
    address: {
        street: String,
        city: String,
        zipCode: String
    },
    emergencyContact: {
        name: String,
        relationship: String,
        phone: String,
    },
    allergies: [{ type: String }], // Critical for medical history
    insuranceDetails: {
        provider: String,
        policyNumber: String
    }
}, { timestamps: true });

module.exports = mongoose.model('Patient', patientSchema);