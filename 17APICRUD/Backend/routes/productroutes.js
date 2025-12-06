import {Router} from 'express';
import * as productController from '../controllers/productController.js';
const router = Router();

//se repite por cada metodo CRUD
router.post('/products', productController.createProduct);

export default router;
