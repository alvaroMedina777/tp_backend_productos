import { Router } from 'express';
import { body, param } from 'express-validator';
import { obtenerProductos, crearProducto, actualizarProducto, borrarProducto } from '../controllers/product.controller.js';
import { authenticate } from '../middlewares/auth.js';
import { handleValidationErrors, categoriaActiva, productoActivo } from '../middlewares/validators.js';
const router = Router();
router.get('/', obtenerProductos);
router.post('/', [
  authenticate,
  body('nombre').isString().trim().notEmpty().withMessage('El nombre es obligatorio'),
  body('categoria').isMongoId().withMessage('Categoría inválida').bail().custom(categoriaActiva),
  body('precio').optional().isFloat({ min: 0 }),
  body('descripcion').optional().isString(),
  body('img').optional().isURL(),
  handleValidationErrors
], crearProducto);
router.put('/:id', [
  authenticate,
  param('id').isMongoId().withMessage('ID inválido').bail().custom(productoActivo),
  body('nombre').optional().isString().trim().notEmpty(),
  body('categoria').optional().isMongoId().bail().custom(categoriaActiva),
  body('precio').optional().isFloat({ min: 0 }),
  body('descripcion').optional().isString(),
  body('img').optional().isURL(),
  body('disponible').optional().isBoolean(),
  handleValidationErrors
], actualizarProducto);
router.delete('/:id', [
  authenticate,
  param('id').isMongoId().withMessage('ID inválido').bail().custom(productoActivo),
  handleValidationErrors
], borrarProducto);
export default router;
