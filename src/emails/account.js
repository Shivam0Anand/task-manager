const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "shivamanand252@gmail.com",
    subject: "Thanks for joining!",
    text: `Welcome to the app, ${name}. Let me know how it work.`
  });
};

const sendByeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "shivamanand252@gmail.com",
    subject: "GoodBye",
    text: `Good Bye, ${name} I think you bored from our service`
  });
};

module.exports = {
  sendWelcomeEmail,
  sendByeEmail
};
