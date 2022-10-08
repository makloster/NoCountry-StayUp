const nodemailer = require("nodemailer");
const pug = require("pug");
const path = require("path");
const {htmlToText } = require("html-to-text");

class Email {
  constructor() { }
  
  //Connect to mail service
  newTransport() {
    return nodemailer.createTransport({
      host: "smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "046ab6b4f02e47", // Mover a dotenv
        pass: "476a8e1e59a9b9" // Mover a dotenv
      }
    })
  }

  async sendEmail() {
        // What data should
    const html = pug.renderFile(
          //C:\Users\juane_d2apuag\Downloads\Escritorio\Projects\No-Country\c7-31-ft-node-react-rn\Back\services\emails\email.service.js
          path.join(__dirname, './template-engine', "base.email.pug" ),
          {
            title: "Mi primer email",
            
          }
        );
    await this.newTransport().sendMail({
      from: "stayup@gmail.com",
      to: "newuser@gmail.com",
      subject: "Welcome to stayup",
      html,
      text: htmlToText(html),
    })
    // What data should the mail include
  }
}

module.exports = { Email };