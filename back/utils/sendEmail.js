const nodemailer= require("nodemailer")

const sendEmail = async options =>{
    const transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "6dbfcfcdb42b9e",
          pass: "932c4e7da3c15d"
        }
      });
    const mensaje={
        from: "WA Galeria <noreply@wagaleria.com>",
        to: options.email,
        subject: options.subject,
        text: options.mensaje
    }

    await transport.sendMail(mensaje)
}

module.exports= sendEmail;