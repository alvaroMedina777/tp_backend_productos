import Producto from '../models/Product.js';

export const obtenerProductos = async (req, res) => {
  try {
    const desde = Math.max(0, Number(req.query.desde) || 0);
    const filtro = { estado: true };
    const [total, productos] = await Promise.all([
      Producto.countDocuments(filtro),
      Producto.find(filtro).skip(desde).limit(5)
        .populate('usuario', 'nombre').populate('categoria', 'nombre')
    ]);
    res.json({ total, productos });
  } catch { res.status(500).json({ mensaje: 'No se pudieron obtener los productos' }); }
};

export const crearProducto = async (req, res) => {
  try {
    const { nombre, precio, categoria, descripcion, img } = req.body;
    const nombreLimpio = nombre.trim();
    if (await Producto.exists({ nombre: nombreLimpio })) return res.status(409).json({ mensaje: 'Ya existe un producto con ese nombre' });
    const producto = await Producto.create({ nombre: nombreLimpio, precio, categoria, descripcion, img, usuario: req.usuario.id });
    res.status(201).json({ producto });
  } catch (e) { res.status(e.code === 11000 ? 409 : 500).json({ mensaje: 'No se pudo crear el producto' }); }
};

export const actualizarProducto = async (req, res) => {
  try {
    const { nombre, precio, categoria, descripcion, img, disponible } = req.body;
    const data = {};
    if (nombre !== undefined) data.nombre = nombre.trim();
    if (precio !== undefined) data.precio = precio;
    if (categoria !== undefined) data.categoria = categoria;
    if (descripcion !== undefined) data.descripcion = descripcion;
    if (img !== undefined) data.img = img;
    if (disponible !== undefined) data.disponible = disponible;
    const producto = await Producto.findByIdAndUpdate(req.params.id, data, { new: true, runValidators: true });
    if (!producto || !producto.estado) return res.status(404).json({ mensaje: 'Producto no encontrado' });
    res.json({ producto });
  } catch (e) { res.status(e.code === 11000 ? 409 : 500).json({ mensaje: 'No se pudo actualizar el producto' }); }
};

export const borrarProducto = async (req, res) => {
  try {
    const producto = await Producto.findByIdAndUpdate(req.params.id, { estado: false }, { new: true });
    if (!producto) return res.status(404).json({ mensaje: 'Producto no encontrado' });
    res.json({ producto });
  } catch { res.status(500).json({ mensaje: 'No se pudo borrar el producto' }); }
};
