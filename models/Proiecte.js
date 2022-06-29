import mongoose from 'mongoose'

const ProiecteSchema = new mongoose.Schema({
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
    utilizare: {
        type: String,
        required: true
    },
    imagini: {
        type: Array,
        required: true
    },
    video: {
        type: String
    },
    cod_folosit: {
        type: String
    }
})

module.exports = mongoose.models.Proiecte || mongoose.model('Proiecte', ProiecteSchema)