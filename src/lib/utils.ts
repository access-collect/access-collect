import nodemailer from "nodemailer";

export const replaceEmptyValueByNull = async (formData: FormData) => {
  const inputData = Object.fromEntries(formData);

  const newData: any = {};
  Object.keys(inputData).forEach((key) => {
    if (inputData[key] === "") {
      newData[key] = null;
    } else {
      newData[key] = inputData[key];
    }
  });
  return newData;
};

export const creationOfTransporter = async () => {
  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    service: process.env.MAIL_SERVICE,
    port: Number(process.env.MAIL_PORT),
    secure: true,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
    tls: { rejectUnauthorized: false },
  });
  return transporter;
};

export const sendMailToUser = async (url: string, info: any, email: string) => {
  const mailBodyHtml: string =
    '\
      <h3>Bonjour, </h3> \
      <p>Vous recevez ce mail car nous avons reçu une demande de réinitialisation du mot de passe pour votre compte.<br>\
      Veuillez cliquer sur ce lien : <a href="' +
    url +
    '">Réinitialiser mon mot de passe</a></p>';

  try {
    info.sendMail({
      from: '"access-collect" <contact@tripluch.fr>',
      to: email,
      subject: "Réinitialisation de votre mot de passe",
      html: mailBodyHtml,
    });
    console.log("Message sent to user");
  } catch {
    console.error("Message not sent to user");
  }
};
