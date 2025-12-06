import mysql from 'mysql2';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cursos'
});

connection.connect((error) => {
    if (error) {
        console.error('Error de conexion a la base de datos: ' + error.stack);
        return;
    }
    console.log('Conectado a la base de datos!');
});

export default connection;
