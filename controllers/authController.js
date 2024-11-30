const bcrypt = require('bcryptjs');
const {getDB} = require('../config/db')
const dotenv = require('dotenv')

dotenv.config()

//Register
/*
1. Verificar si ya hay un usuario creado
2. Crear un usuario
*/


// Login