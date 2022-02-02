const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  email: String,
  RefferedUser:{
      type: Schema.Types.ObjectId,
      ref: 'User'
  },
  isPaymentMade:{
      type: Boolean,
      default: false
  },
  TotalEarning: {
    type: Number,
    default: 0
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
