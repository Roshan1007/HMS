const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    deptId: { type: mongoose.Schema.Types.ObjectId, ref: 'Department', required: true },
    specialization: { type: String, required: true },
    experience: { type: Number }, // in years
    bio: { type: String }, // For the "About Doctor" section in Angular
    consultationFee: { type: Number, default: 0 },
    availability: [{
        dayOfWeek: {
            type: String,
            enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
        },
        startTime: String, // e.g., "09:00"
        endTime: String    // e.g., "17:00"
    }]
}, { timestamps: true });

module.exports = mongoose.model('Doctor', doctorSchema);