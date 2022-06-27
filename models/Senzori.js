import mongoose from 'mongoose'

const SenzoriSchema = new mongoose.Schema({
    nume: {
        type: String,
        required: true
    },
    descriere: {
        type: String,
        required: true
    },
    descrieremini: {
        type: String,
        required: true
    },
    video: {
        type: String
    },
    utilizare: {
        type: String,
        required: true
    },
    imagine1: {
        type: String,
        required: true
    },
    imagine2: {
        type: String
    },
    imagine3: {
        type: String
    }
})

module.exports = mongoose.models.Senzori || mongoose.model('Senzori', SenzoriSchema)