const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const port = 3000;

const transporter = nodemailer.createTransport({
  service: "YourEmailService", // e.g., Gmail
  auth: {
    user: "your_email@gmail.com",
    pass: "your_password"
  }
});

app.get("/sendEmail", (req, res) => {
  const mailOptions = {
    from: "your_email@gmail.com",
    to: "goodluck@gmail.com",
    subject: "Subject of the Email",
    text: "This is the body of the email."
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log("Email could not be sent:", error);
      res.status(500).send("Email could not be sent");
    } else {
      console.log("Email sent:", info.response);
      res.status(200).send("Email sent successfully");
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
