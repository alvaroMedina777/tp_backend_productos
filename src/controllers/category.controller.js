import Categoria from '../models/category.js';
export const getCategories = async (_req, res) => {
  const categorias = await Categoria.find({ estado: true }).populate('usuario', 'nombre');
  res.json({ total: categorias.length, categorias });
};
export const addCategory = async (req, res) => {
  try {
    const nombre = req.body.nombre.trim();
    if (await Categoria.exists({ nombre })) return res.status(409).json({ mensaje: 'Categoría existente' });
    const categoria = await Categoria.create({ nombre, usuario: req.usuario.id });
    res.status(201).json({ categoria });
  } catch (e) { res.status(e.code === 11000 ? 409 : 500).json({ mensaje: 'No se pudo crear la categoría' }); }
};
export const updateCategory = async (req, res) => {
  try {
    const categoria = await Categoria.findOneAndUpdate({ _id: req.params.id, estado: true }, { nombre: req.body.nombre.trim() }, { new: true, runValidators: true });
    if (!categoria) return res.status(404).json({ mensaje: 'Categoría no encontrada' });
    res.json({ categoria });
  } catch (e) { res.status(e.code === 11000 ? 409 : 500).json({ mensaje: 'No se pudo actualizar' }); }
};
export const deleteCategory = async (req, res) => {
  const categoria = await Categoria.findOneAndUpdate({ _id: req.params.id, estado: true }, { estado: false }, { new: true });
  if (!categoria) return res.status(404).json({ mensaje: 'Categoría no encontrada' });
  res.json({ categoria });
};
