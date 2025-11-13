import nodemailer from "nodemailer";

const sendEmail = async (to, subject, htmlContent) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false, // Corrige l'erreur de certificat
      },
    });

    const info = await transporter.sendMail({
      from: `"PS1 Travel" <${process.env.MAIL_USER}>`,
      to,
      subject,
      html: htmlContent,
    });

    console.log("✅ Email envoyé :", info.response);
  } catch (error) {
    console.error("❌ Échec de l'envoi de l'email :", error);
    throw error; // Très important pour rollback côté register
  }
};

export default sendEmail;
