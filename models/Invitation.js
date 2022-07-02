import mongoose from "mongoose";

const Invitation = new mongoose.Schema({
  invitation: {
    type: String,
    required: true,
  },
  createdBy:{
    type: String,
    required: true,
  },
  since: {
    type: Date,
    default: Date.now,
  },
});

module.exports =
  mongoose.models.Invitation || mongoose.model("Invitation", Invitation);
