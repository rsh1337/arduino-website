import mongoose from 'mongoose'

const User = new mongoose.Schema({
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
    bookmark: {
      type: Array
    },
    admin:{
        type: Boolean,
        default: false
    },
    owner:{
        type: Boolean,
        default: false
    },
    since: {
      type: Date,
      default: Date.now
    },
    session:{
      type: String
    }
  });  

module.exports = mongoose.models.User || mongoose.model('User', User)