const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'gokulramesh033@gmail.com',
    pass: 'pelm grpn xguh wphb', // replace with your actual Gmail password
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.error('Error connecting to email server:', error);
  } else {
    console.log("Ready to Send Emails");
  }
});



// Contact form route
app.post("/contact", async (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;

  const mail = {
    from: email,
    to: "gokulramesh033@gmail.com", // Replace with your email address
    subject: "New Contact Form Submission",
    text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
  };

  try {
    await contactEmail.sendMail(mail);
    res.status(200).json({ code: 200, message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ code: 500, message: 'Internal Server Error' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
