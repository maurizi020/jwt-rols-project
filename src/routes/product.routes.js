import { Router } from 'express';
import * as productsController from '../controllers/products.controller';

const router = Router();

router.get('/', productsController.getProducts);
router.get('/:Id', productsController.getProductById);
router.post('/create', productsController.createProduct);
router.put('/:Id', productsController.updateProductById);
router.delete('/:Id', productsController.deleteProductById);

export default router;
