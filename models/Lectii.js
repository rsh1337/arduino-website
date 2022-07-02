import mongoose from 'mongoose'

const LectiiSchema = new mongoose.Schema({
    nume: {
        type: String,
        required: true
    },
    imagine: {
        type: String,
        required: true
    },
    link: {
        type: String
    },
})

module.exports = mongoose.models.Lectii || mongoose.model('Lectii', LectiiSchema)