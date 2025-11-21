/*
vamos a crear un cliente servidor para un crud pra esto tenemos que 
probar si el module de myql esta verificado si no usaremos myql2
*/
const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const ejs = require('ejs');

require('dotenv').config({path: './.env'});

const app = express();
const port = 3000;

//configuracion de mysql
const db = mysql.createConnection({
    host: process.env.BD_HOST,
    user: process.env.BD_USER,
    password: process.env.BD_PASSWORD,
    database: process.env.BD_NAME
});


bd.connect((error) => {
    if (error) {
        console.error('Error de conexion a la base de datos: ', error);
        return;
    }
    console.log('Conectado a la base de datos MySQL');
});
//conectar con contraseña

//tenemos que configurar nuestor middleware el cual estaremos usando rutas y codificacion de la informacion por JSON

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//tenemos que configurar las vistawsw que se van a ejecutar
app.set('view engine', 'ejs');
//donde se ecnuentra el directorio de dichas vistas
app.set('views', __dirname + '/views');
//para la carga de imagenes css multiedia etc es necesario configursar una carpeta public en la cual todos los recursos de l proyecto se van a encontrar se podran consumir
app.use(express.static(__dirname + '/css'));

//vamos a crear el crud de estudiantes apartir de rutas
//ruta get mostrar el formulario para registar un estudiante
app.get('/', (req, res) => {
    //necesito obtener la lista de estudiantes de la base de datos
    const query = 'SELECT * FROM estudiantes';
    bd.query(query, (error, resultados) => {
        if (error) {
            console.error('Error al obtener los estudiantes: ', error);
        }
        res.render('index', { estudiantes: resultados });

    });
});

//ruta para crear un estudiante (que necesito para ser un estudiante)
app.post('/estudiantes', (req, res) => {
    //obtener los parametros del formulario
    const { nombre, edad, curso } = req.body;
    console.log(nombre,edad,curso);
    //insertar en la base de datos
    const query = `INSERT INTO estudiantes (nombre, edad, curso) VALUES ('${nombre}', ${edad}, '${curso}');`;
    bd.query(query, (error, resultados) => {
        if (error) {
            console.error('Error al crear el estudiante: ', error);
        }
        res.redirect('/');
    });
});

//ruta para eliminar un estudiante
app.get('/estudiantes/:id', (req, res) => {
    const estudianteid = req.params.id;
    const query = `DELETE FROM estudiantes WHERE id = ${estudianteId};`;
    bd.query(query, (error, resultados) => {
        if (error) {
            console.error('Error al eliminar el estudiante: ', error);
            res.status(500).send('Error al eliminar el estudiante');
        }
        res.redirect('/');
    });
});

//ruta para buscar y actualizar un estudiante
app.get('/estudiantes/editar/:id', (req, res) => {
    const estudianteid = req.params.id;
    const query = `SELECT * FROM estudiantes WHERE id = ${estudianteId};`;
    bd.query(query, (error, resultados) => {
        if (error) {
            console.error('Error al obtener el estudiante: ', error);
            res.status(500).send('Error al obtener el estudiante');
        }
        res.render('editar', { estudiante: resultados[0] });
    });
});
//actualizar el estudiante
app.post('/estudiantes/update/:id', (req, res) => {
    const estudianteid = req.params.id;
    const { nombre, edad, curso } = req.body;
    const query = `UPDATE estudiantes SET nombre = '${nombre}', edad = ${edad}, curso = '${curso}' WHERE id = ${estudianteId};`;
    bd.query(query, (error, resultados) => {
        if (error) {
            console.error('Error al actualizar el estudiante: ', error);
            res.status(500).send('Error al actualizar el estudiante');
        }
        res.redirect('/');
    }
);
});

app.listen(port, () => {
    console.log(`Servidor ejecutandose en http://localhost:${port}`);
});

