const mirrow=(req, res )=>{
    const methods=[{
        metod:'POST',
        hashBody:true,
        purpose:"El metodo post se utiliza para enviarf una entidad a un recurso especifico, causando a maenudo un cambio en ekl estadl o efectos secundaruos en el servidor"
    },{
        metod:'PUT',
        hashBody:true,
        purpose:"El metodo put remplaza todas las representaciones actuales del recuerso de destino con la carga util de la peticion" 
    },{
        metod:'PATCH',
        hashBody:true,
        purpose:"El metodo patch se utiliza para aplicar modificaciones parciales a un recurso"
    },{
        metod:'HEAD',
        hashBody:false,
        purpose:"El metodo head solicita una respuesta identica a la de una peticion get, pero sin el cuerpo de la respuesta."
    },{
        metod:'GET',
        hashBody:false,
        purpose:"El metodo get se utiliza solicitar una representacion de datos de un recurso especifico, las peticiones que usan el metodo get solo deben de recuperar datos"
    },{
        metod:'DELETE',
        hashBody:false,
        purpose:"El metodo delete elimina un recurso especifico"
    }];
const requestMethod = methods.find(
    m => m.method===req.method)||
    {metod: req.method,
    hashBody:false,
    purpose:"No tiene body, no hay una respuesta, metodo no soportado"
    };
    requestMethod.purpose+= requestMethod.
hashBody ? " Tiene body": " No tiene body";
if (requestMethod.hashBody){
    req.body;//js sdebe de parsear mediante un json el objeto necesario 
    res.json({...req.body, ruta_consumida:req.routhe.path,...requestMethod});
}
else{
    res.json({ruta_consumida:req.originalUrl,...requestMethod});

}
};
module.exports=mirrow;