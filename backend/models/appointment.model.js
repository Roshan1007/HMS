const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
    doctorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor', required: true },
    deptId: { type: mongoose.Schema.Types.ObjectId, ref: 'Department', required: true },
    
    startDateTime: { type: Date, required: true },
    endDateTime: { type: Date, required: true },
    
    status: { 
        type: String, 
        enum: ['pending', 'confirmed', 'completed', 'cancelled', 'no-show'], 
        default: 'pending' 
    },

    // Recurring Logic
    isRecurring: { type: Boolean, default: false },
    recurrenceRule: { type: String }, // RRULE string
    
    reasonForVisit: { type: String },
    bookedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' } // Admin/Receptionist tracking
}, { timestamps: true });

module.exports = mongoose.model('Appointment', appointmentSchema);