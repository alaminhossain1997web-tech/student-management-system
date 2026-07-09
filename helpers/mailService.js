const nodemailer = require("nodemailer");
const emailTemplate = require("../templates/emailTemplate")
const transporter = nodemailer.createTransport({
  service: "gmail",
  port: 587,
  secure: false, // use STARTTLS (upgrade connection to TLS after connecting)
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const mailSender = async ({email,subject,OTP}) => {
     await transporter.sendMail({
    from: '"School Management Team" <schoolteam@gmail.com>', // sender address
    to: email , // list of recipients
    subject: subject , // subject line
    html: emailTemplate({OTP}), // HTML body
  })
}

module.exports = {mailSender}