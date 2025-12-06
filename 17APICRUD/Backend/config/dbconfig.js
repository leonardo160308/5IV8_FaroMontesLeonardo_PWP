import mysql2 from 'mysql2';
import dotenv from 'dotenv';

//si vamos a tener una base de datos en servidor

//import {fileURLToPath} from 'url';

//const __filename = fileURLToPath(import.meta.url);
//const __dirname = path.dirname(__filename);

//dotenv.config({path: path.resolve(__dirname,'..','.env')});
dotenv.config();

const config= mysql2.createPool({
    host:'localhost',
    user:'',
    password:'',
    database:'',
    //connectionLimit:10 dependiendo de la cantidad de conexiones que nos permita si es gratis o de paga
    //acquireTimeout:10000,
    //idleTimeout:10000,
});

config.getConnection((err) =>{
    if(err){
        console.log('Error de conexion a la base de datos', err);
        return
    }
        console.log('Conexion exitosa a la base de datos');
        conecction.release();
    });

export default config;