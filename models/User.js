import mongoose from 'mongoose'

const User = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    email: {
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
  });  

module.exports = mongoose.models.User || mongoose.model('User', User)