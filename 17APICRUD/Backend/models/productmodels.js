//vienen de las tablas de la base de datos es para llamar cada elemento de los nmodelos
import sql from '../config/dbconfig.js';

class Product{
    constructor(product){
        this.categoryid= prroduct.categoryid;
        this.name= product.name;
        this.price= product.price;
        this.category= product.category;
    }
    //vamos a crear un producto
    static create(newProduct, result){
        if(newProduct.categoryid && newProduct.name && newProduct.id){
            sql.query('INSERT INTO products VALUES(?,?,?,?) ', 
            newProduct[ newProduct.id, newProduct.categoryid, newProduct.name,
            newProduct.price, newProduct.stock], (err,res)=>{
                if(err){
                    console.log('Error al crear el producto', err);
                    result(err,null);
                    return;
                }
                console.log('Producto creado correctamente', {id: res.insertId, ...newProduct});
                result(null, {id});
            });
        } else {
            sql.query('INSERT INTO products (categoryid, name, price, stock) VALUES(?,?,?,?) ',[newProduct.categoryid, newProduct.name,
            newProduct.price, newProduct.stock], (err,res)=>{
                if(err){
                    console.log(`Error al crear el producto con el nombre ${newProduct.ProductName}`, err);
                    result(err,null);
                    return;
                }else{
                    console.log('Producto creado correctamente', {id: res.insertId, ...newProduct});
                    result(null, {id: res.insertId, ...newProduct});
                }
            });
        } 
    }
}

export default Product;