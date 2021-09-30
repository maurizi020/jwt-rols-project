import { Router } from 'express';
import * as productsController from '../controllers/products.controller';

const router = Router();

router.get('/', productsController.getProducts);
router.get('/:Id', productsController.getProductById);
router.post('/created', productsController.createProduct);

export default router;
