const nodemailer = require("nodemailer");
require("dotenv").config();

const mailSender = async (email, title, body) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: 587,          // ✅ REQUIRED
      secure: false,      // ✅ REQUIRED
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: `"StudyNotion | An EdTech Platform" <${process.env.MAIL_USER}>`, // ✅ IMPORTANT
      to: email,
      subject: title,
      html: body,
    });

    console.log("Mail sent successfully 👉", info.response);
    return info;
  } catch (error) {
    console.error("MAIL SENDER ERROR 👉", error);
    throw error; // 🔥 VERY IMPORTANT
  }
};

module.exports = mailSender;

module.exports = mailSender;
