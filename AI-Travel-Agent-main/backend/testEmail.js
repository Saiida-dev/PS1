import dotenv from "dotenv";
dotenv.config();
import sendEmail from "./utils/sendEmail.js";

sendEmail("tonemail@gmail.com", "Test PS1", "<h1>Test d'envoi email</h1>")
  .then(() => console.log("✅ Email envoyé avec succès"))
  .catch((err) => {
    console.error("❌ Erreur lors de l'envoi :", err.message || err);
  });
