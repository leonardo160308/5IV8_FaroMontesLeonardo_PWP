import Product from "../models/productmodels.js";

export const createProduct = (req, res) => {
    let categoryid= req.body.categoryid;
    if(!req.body.name || (!isNaN(parseInt(categoryid)) && categoryid === 0)){
        res.status(400).send({message: 'El nombre del producto y la categoria son obligatorios'});
        return;
    }
    const newProduct= new Product({
        categoryid: req.body.categoryid,
        name: req.body.name,
        price: req.body.price,
        stock: req.body.stock
    });

    let id= req.body.id;
    console.log('ID recibido en el controlador:', id);
    if(id && id!=0 && typeof parseInt(id) === 'number' ? true : false){
        Product.id= id;}

        console.log('Nuevo producto a crear:', newProduct);

        //debugear y obteniendo cada parametro eso va a calificar el profe
        //asi como exporte para crear tengo que hacer todo eso para el resto de las operaciones CRUD
    Product.create(newProduct, (err, data) => {
        if(err){
            res.status(500).send({
                message: err.message || 'Ocurrio un error al crear el producto'
            });
        }else{
        res.send([message`Product ${data.name} con id ${data.id} creado exitosamente & categoria ${data.categoryid} creada exitosamente`]);
        }
    });
};