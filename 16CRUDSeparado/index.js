const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');

// Routers
const cursosRouter = require('./routers/cursosRouters.js');

const app = express();

// Config base de datos
const db = require('./database/db.js');

// Configuración de vistas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middlewares
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'views')));

// Página de inicio
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'bienvenida.html'));
});

// Vista de cursos en EJS
app.get('/vista/cursos-ejs', (req, res) => {

    db.query('SELECT * FROM cursos', (error, results) => {
        if (error) {
            console.error('Error al obtener los cursos: ' + error.message);
            return res.render('cursos-ejs', { cursos: [] });
        }

        res.render('cursos-ejs', { cursos: results });
    });

});

// Rutas CRUD
app.use('/cursos', cursosRouter);

module.exports = app;
