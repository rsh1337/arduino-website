import mongoose from 'mongoose'

const Admin = new mongoose.Schema({
  nume:{
    type: String,
    required: true
  },
    email: {
      type: String,
      required: true
    },
    invitation: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    since: {
      type: Date,
      default: Date.now
    },
  });  

module.exports = mongoose.models.Admin || mongoose.model('Admin', Admin)