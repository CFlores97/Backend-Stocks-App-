//const bcrypt = require('bcryptjs');
const { getDB } = require('../config/db')
const dotenv = require('dotenv')
const { auth } = require('../config/firebase.js')

dotenv.config()

//depuracion
console.log('Auth Instance:', auth);

//registrar usuario
const registerUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userCredential = await auth.createUserWithEmailAndPassword(email, password);
    const user = userCredential.user;

    //Aqui se guarda la info del usuario registrado tambien en MongoDB  
    const db = getDB();

    //Objeto de usuario nuevo
    const newUser = {
      firebaseUid: user.uid,
      email: user.email,
      watchList: [],
      creadoEn: new Date(),
      actualizadoEn: new Date(),
    };

    await db.collection('users').insertOne(newUser)

    res.status(201).json({ message: "Usuario registrado exitosamente", user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//login de usuario
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userCredential = await auth.signInWithEmailAndPassword(email, password);
    const user = userCredential.user;

    res.status(200).json({ message: "Login exitoso", user });
  } catch (error) {
    console.error('Error en Login:', error.message);
    res.status(400).json({ error: error.message });
  }
};

module.exports = { registerUser, loginUser };