const nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({
  pool: true,
  host: 'smtp.mailgun.org',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.EMAIL_PASSWORD
  },
  tls: {
    rejectUnauthorized: false
  }
});

const sendEmail = ({ name, replyTo = null, subject, message }) => {
  const html = `<p>From: ${name}</p><p>Email: ${replyTo}</p><p>${message}</p>`
  const mailOptions = {
    from: `Karen Straus Music Studio <${process.env.EMAIL_ADDRESS}>`,
    to: process.env.TO_EMAIL_ADDRESS,
    replyTo: replyTo ? replyTo : process.env.EMAIL_ADDRESS,
    subject: subject,
    html: html
  };

  return transporter.sendMail(mailOptions);
};

module.exports = sendEmail;