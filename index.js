require('dotenv').config(); //lee archivo .env

const express = require('express');
const cors = require('cors'); //Errores cros
const {dbConnection} = require('./database/config');

//Valores de mi base de datos

//user - admin 
//password - root 


//Crear el servidor expres
const app = express();

//Configurar cors
app.use(cors());


//Conexion a la Base de datos
dbConnection();

//Rutas
app.get( '/', (req,res)=>{

    res.json({
        ok:true,
        msg:'Hola Mundo'
    })

});


app.listen( process.env.PORT , () =>{
    console.log("Servidor corriendo en el puerto" , process.env.PORT);
} )


