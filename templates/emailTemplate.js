 const emailTemplate = ({OTP}) => {
    return `
    <body style="margin:0;padding:0;background-color:#f4f4f4;font-family:Arial,Helvetica,sans-serif;">

<div style="max-width:600px;margin:30px auto;background:#ffffff;border-radius:10px;overflow:hidden;border:1px solid #e5e7eb;">

  <div style="background:#2563eb;padding:20px;text-align:center;color:#ffffff;">
    <h2 style="margin:0;">School Management System</h2>
  </div>

  <div style="padding:30px;color:#333333;line-height:1.6;">

    <h3 style="margin-top:0;">Hello,</h3>

    <p>
      Thank you for registering with the School Management System.
      Please use the following One-Time Password (OTP) to verify your email address.
    </p>

    <div style="
      font-size:32px;
      font-weight:bold;
      letter-spacing:8px;
      text-align:center;
      background:#f3f4f6;
      padding:18px;
      border-radius:8px;
      margin:25px 0;
      color:#2563eb;
    ">
      ${OTP}
    </div>

    <p>
      This OTP is valid for <strong>5 minutes</strong>.
    </p>

    <p>
      If you did not request this verification, you can safely ignore this email.
    </p>

    <p style="margin-top:30px;">
      Regards,<br>
      <strong>School Management Team</strong>
    </p>

  </div>

  <div style="
    text-align:center;
    padding:18px;
    font-size:14px;
    color:#777777;
    background:#f9fafb;
    border-top:1px solid #eeeeee;
  ">
    © 2026 School Management System. All Rights Reserved.
  </div>

</div>

</body>`
 }
 module.exports = emailTemplate