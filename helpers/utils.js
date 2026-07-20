const crypto = require("crypto")
//email validation function
const validEmail = (email) => {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
};
// password validation function
const isvalidpassword = (password) => {
  const regex = /^(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return regex.test(password);
};

// otp genaration function
const otpGenerator = () => {
 return crypto.randomInt(1000, 10000).toString()
}
// otp expire time
 const otpExpires = new Date(Date.now() + 5 * 60 * 1000);



module.exports= {validEmail, isvalidpassword, otpGenerator, otpExpires}