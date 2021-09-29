import { Router } from 'express';
import * as productsController from '../controllers/products.controller';

const router = Router();

router.get('/', productsController.getProducts);
router.post('/created', productsController.createProduct);

export default router;
