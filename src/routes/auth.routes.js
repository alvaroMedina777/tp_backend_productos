import { Router } from 'express';
import { body } from 'express-validator';
import { registrar, login } from '../controllers/auth.controller.js';
import { handleValidationErrors } from '../middlewares/validators.js';
const router = Router();
router.post('/register', [body('nombre').isString().trim().notEmpty(), body('email').isEmail(), body('password').isLength({ min: 6 }), handleValidationErrors], registrar);
router.post('/login', [body('email').isEmail(), body('password').isString().notEmpty(), handleValidationErrors], login);
export default router;
