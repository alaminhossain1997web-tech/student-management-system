const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userSchema = new mongoose.Schema({
    name: {
        type : String,
        required : true,
        trim : true

    },
    email : {
        type : String,
        required: true,
        unique : true,
        trime : true,
        lowerase: true
    },

    password :{
        type : String,
        ruquired : true
    },
    OTP:{
      type : String,
      default : null
    },
    OTPExpires : {
      type : Date,
      default : null
    },

    isEmailVerified: {
      type: Boolean,
      default: false,
    },

    //    emailVerificationToken: {
    //   type: String,
    //   select: false,
    // },

    // emailVerificationExpires: {
    //   type: Date,
    //   select: false,
    // },

    passwordResetToken: {
      type: String,
      select: false,
    },

    passwordResetExpires: {
      type: Date,
      select: false,
    },
},
  {
    timestamps: true,
  })


// password hashing before saving the user to the database
  userSchema.pre("save", async function () {
  if (!this.isModified("password")) {
    return;
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});


//compare password method for comparing the hash password stored in the data base

userSchema.methods.comparePassword = async function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};



module.exports = mongoose.model("user",userSchema )