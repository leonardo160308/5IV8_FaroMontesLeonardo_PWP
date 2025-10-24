const express=require('express');
const mirrow=require('./endpoints/mirrow');

//camos a hacer un puerto de comunicacion
const app=express();
const PORT=3000;

app.use(express.json());//middleware para parsear json
//definimos cada una de las rutas

app.get('/',);
app.post('/', mirrow);
app.put('/', mirrow);
app.patch('/', mirrow);
app.delete('/', mirrow);
app.head('/', mirrow);

app.listen(PORT, ()=>{
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});