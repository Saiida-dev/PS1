import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";

const VerifyEmail = () => {
  const [searchParams] = useSearchParams();
  const [message, setMessage] = useState("Vérification en cours...");
  const token = searchParams.get("token");
  const navigate = useNavigate();

  useEffect(() => {
    const verify = async () => {
      try {
        const res = await axios.get(
          `http://localhost:4000/api/v1/auth/verify-email?token=${token}`
        );

        setMessage(res.data.message || "Email vérifié avec succès !");

        // Optionnel : redirection automatique après succès
        setTimeout(() => {
          navigate("/login"); // redirige vers la page login
        }, 3000);
      } catch (err) {
        console.error("Erreur de vérification :", err);
        setMessage("Lien invalide ou expiré.");
      }
    };

    if (token) {
      verify();
    } else {
      setMessage("Aucun token fourni.");
    }
  }, [token, navigate]);

  return (
    <section style={{ textAlign: "center", paddingTop: "100px" }}>
      <h2>{message}</h2>
      {message === "Email vérifié avec succès !" && (
        <p>Redirection vers la page de connexion...</p>
      )}
    </section>
  );
};

export default VerifyEmail;
