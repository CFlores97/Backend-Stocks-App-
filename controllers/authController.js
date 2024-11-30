const bcrypt = require('bcryptjs');
const {getDB} = require('../config/db')
const dotenv = require('dotenv')

dotenv.config()
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase.js";

export const registerUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    res.status(201).json({ message: "Usuario registrado exitosamente", user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    res.status(200).json({ message: "Login exitoso", user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
