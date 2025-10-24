console.log("Hola Mundo desde Node.js");
var http=require('http');
var servidor=http.createServer(function (req,res){
    //re ->request es una solicitdu viene por parte de la rquitectura clientes servidor, todos los clientes (navegadores, usuarios, aplicaciones, servicxios, etcs son lo sq  realizan una peticion por parte del prtocolo 
    //res -> response es la respuesta que el servidor le da al cliente
    
    res.writeHead(200,{'Content-Type':'text/html; charset=UTF-8'});
    res.write('<h1>Hola Mundo desde Node.js</h1>');
    res.write('<h1>A mimir</h1>');
    res.write('<h1>A mimirx2</h1>');
    console.log('hola si entro al servidor');
    res.end();
});
//es necesario tener un puerto de comunicacionb para el servidor
servidor.listen(3000);

console.log('Servidor ejecutandose en http://localhost:3000');