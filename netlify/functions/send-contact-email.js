//import fetch from "node-fetch";
//import sgMail from "sendgrid"
//const sgMail = require('@sendgrid/mail');
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.NETLIFY_EMAILS_PROVIDER_API_KEY);

exports.handler =  async function() {
/*
  const data = JSON.parse(event.body)
  const { email, subject } = data

  const body = Object.keys(data).map((k) => {
    return `${k}: ${data[k]}`
  }).join("<br><br>");
*/
  const mail_to_send = {
    to: "jankilakshmi@gmail.com",
    from: 'jakkotni@gmail.com',
    subject: 'Test Email',
    html: 'SendGrid testing email',
  };

  try{
    await sgMail.send(mail_to_send)

    return {
      statusCode: 200,
      body: "Message sent successfully"
    }
  } catch(e){
    return {
      statusCode: e.code,
      body: e.message
    }
  }
};