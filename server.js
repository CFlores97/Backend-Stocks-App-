/*import axios from 'axios';
const axios = require('axios');
const path = require('path');
const port = 3000;*/
const express = require('express'); 
const dotenv = require('dotenv'); 
const { connect } = require('./config/db'); 
const authRoutes = require('./routes/auth'); 

dotenv.config();

connect();

const app = express();

app.use(express.json());


app.use('/auth', authRoutes); 

app.get('/', (req, res) => {
  res.send('Servidor corriendo correctamente.');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
