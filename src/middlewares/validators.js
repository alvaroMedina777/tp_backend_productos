import { validationResult } from 'express-validator';
import Categoria from '../models/category.js';
import Producto from '../models/Product.js';
export const handleValidationErrors = (req, res, next) => {
  const errores = validationResult(req);
  if (!errores.isEmpty()) return res.status(400).json({ errores: errores.array() });
  next();
};
export const categoriaActiva = async (id) => {
  const categoria = await Categoria.findOne({ _id: id, estado: true });
  if (!categoria) throw new Error('La categoría no existe o está inactiva');
};
export const productoActivo = async (id) => {
  const producto = await Producto.findOne({ _id: id, estado: true });
  if (!producto) throw new Error('El producto no existe o está inactivo');
};
