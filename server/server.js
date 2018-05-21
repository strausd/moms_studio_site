const path = require('path');
const express = require('express');
const app = express();
const cors = require('cors');
const DotEnv = require('dotenv');


// Environment variable setup
if (process.env.NODE_ENV == 'production') {
  DotEnv.config({ path: '.env.prod' });
} else {
  DotEnv.config({ path: '.env.dev' });
  // Setup cors to allow webpack dev-server to connect
  app.use(cors({
    origin: 'http://localhost:8000'
  }));
}

const bodyParser = require("body-parser");
const sendEmail = require('./nodemailer');

const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/contact', (req, res, next) => {
  const mailOptions = {
    name: req.body.name,
    replyTo: req.body.email,
    subject: '[Contact From Website] New Message',
    message: req.body.message
  };
  sendEmail(mailOptions).then(data => {
    res.status(200).send({
      success: true
    });
  }).catch(e => {
    res.status(200).send({
      success: false
    });
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
  console.log('Server running...');
});
