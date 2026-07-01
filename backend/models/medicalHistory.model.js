const mongoose = require('mongoose');

const medicalHistorySchema = new mongoose.Schema({
    patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
    doctorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor', required: true },
    appointmentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Appointment' },
    
    dateOfVisit: { type: Date, default: Date.now },
    
    vitals: {
        temperature: String,
        bloodPressure: String,
        heartRate: String,
        weight: String
    },
    
    diagnosis: { type: String, required: true },
    treatmentPlan: { type: String },
    prescriptions: [{
        medicineName: String,
        dosage: String,
        frequency: String, // e.g., "Twice a day"
        duration: String    // e.g., "5 days"
    }],
    notes: String,
    labResults: [{
        testName: String,
        resultUrl: String // Link to Cloudinary/S3 bucket
    }]
}, { timestamps: true });

module.exports = mongoose.model('MedicalHistory', medicalHistorySchema);