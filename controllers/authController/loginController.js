const bcrypt = require("bcrypt");
const userSchema = require("../../models/userSchema");
const { validEmail, isvalidpassword } = require("../../helpers/utils");

const loginController = async (req, res) => {
    const {email,password}= req.body;
    const errors = {};
    try {
    const user = await userSchema.findOne({email});
    if (!user ){
       res.status(400).json({message: "user not found!"})
    };
    if (!password || password.trim() === "" || !isvalidpassword(password)){
         errors.password = "Enter your valid password"
    };

    if (!email || email.trim() === "" || !validEmail(email)){
         errors.password = "Enter your valid Email"
    };

    if (!user.isvalidEmail){
        errors.isvalidEmail = "Email is not verified!"
    }

    //for password compaire
    const isMatch = await user.comparePassword(password);
    if (!isMatch){
        errors.isMatch = "Incorrect Password!"
    }

    
    if (Object.keys(errors).length > 0) {
    return res.status(400).json({
      message: errors
    });
  }
    res.status(200).json({message:" login successfull"})
    } catch (error) {
        
    }
}

module.exports = loginController;
