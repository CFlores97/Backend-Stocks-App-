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

// en caso de un error
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo salió mal!');
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
