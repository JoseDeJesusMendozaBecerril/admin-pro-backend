require('dotenv').config(); //lee archivo .env

const express = require('express');
const cors = require('cors'); //Errores cros
const { dbConnection } = require('./database/config');

//Valores de mi base de datos

//user - admin 
//password - root 


//Crear el servidor expres
const app = express();

//Configurar cors
app.use(cors());

//Lectura y parseo del body
app.use(express.json());

//Conexion a la Base de datos
dbConnection();

//Rutas

app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/login', require('./routes/auth'));




app.listen(process.env.PORT, () => {
    console.log("Servidor corriendo en el puerto", process.env.PORT);
})