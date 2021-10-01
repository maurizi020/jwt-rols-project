import { Router } from 'express';
import * as authControllers from '../controllers/auth.controller';

const router = Router();

router.post('/SingUp', authControllers.SingUp);
router.post('/SingIn', authControllers.SingIn);

export default router;
