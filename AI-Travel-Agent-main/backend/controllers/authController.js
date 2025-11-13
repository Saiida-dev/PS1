import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import sendEmail from "../utils/sendEmail.js";

// REGISTER
export const register = async (req, res) => {
  try {
    const { username, email, password, photo } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "Email already exists." });

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const emailToken = crypto.randomBytes(32).toString("hex");
    console.log("🔐 Token généré :", emailToken);

    const newUser = new User({
      username,
      email,
      password: hash,
      photo,
      emailToken,
      isVerified: false,
    });

    await newUser.save();

    const verifyUrl = `${process.env.CLIENT_URL}/verify-email?token=${emailToken}`;
    console.log("🔗 Lien de vérification :", verifyUrl);

    const html = `
      <h2>Bienvenue sur PS1 Travel</h2>
      <p>Clique sur le lien ci-dessous pour vérifier ton email :</p>
      <a href="${verifyUrl}">${verifyUrl}</a>
    `;

    try {
      await sendEmail(email, "Vérifie ton adresse e-mail", html);
      console.log("✅ E-mail envoyé avec succès.");
    } catch (err) {
      console.error("❌ Échec de l'envoi de l'e-mail :", err);
      await User.deleteOne({ email }); // rollback utilisateur
      return res.status(500).json({
        success: false,
        message: "Failed to send verification email. Please try again.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Registration successful. Please verify your email.",
    });
  } catch (err) {
    console.error("Erreur register :", err);
    res.status(500).json({
      success: false,
      message: "Failed to register user. Try again later.",
    });
  }
};

// VERIFY EMAIL
export const verifyEmail = async (req, res) => {
  const token = req.query.token?.trim();

  console.log("🔍 Token reçu :", token);

  try {
    const user = await User.findOne({ emailToken: token });
    console.log("👤 Utilisateur trouvé :", user);

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid token or user not found.",
      });
    }

    user.emailToken = null;
    user.isVerified = true;
    await user.save();

    res.status(200).json({
      success: true,
      message: "Email verified successfully.",
    });
  } catch (err) {
    console.error("Verify Email Error:", err);
    res.status(500).json({
      success: false,
      message: "Email verification failed.",
    });
  }
};

// LOGIN
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found." });
    }

    const isPasswordCorrect = bcrypt.compareSync(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(401).json({ success: false, message: "Invalid password." });
    }

    if (!user.isVerified) {
      return res.status(403).json({
        success: false,
        message: "Please verify your email before logging in.",
      });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1d" }
    );

    const { password: _, emailToken, ...userData } = user._doc;

    res.status(200).json({
      success: true,
      message: "Login successful.",
      token,
      data: userData,
    });
  } catch (err) {
    console.error("Login Error:", err);
    res.status(500).json({
      success: false,
      message: "Failed to log in.",
    });
  }
};
