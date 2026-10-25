import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
export const registrar = async (req, res) => {
  try {
    const { nombre, email, password } = req.body;
    const normalizado = email.toLowerCase().trim();
    if (await User.exists({ email: normalizado })) return res.status(409).json({ mensaje: 'Email registrado' });
    const user = await User.create({ nombre, email: normalizado, password: await bcrypt.hash(password, 10) });
    res.status(201).json({ usuario: { id: user.id, nombre: user.nombre, email: user.email, rol: user.rol } });
  } catch (e) {
    if (e.code === 11000) return res.status(409).json({ mensaje: 'Email registrado' });
    res.status(500).json({ mensaje: 'No se pudo registrar' });
  }
};
export const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email.toLowerCase().trim(), estado: true }).select('+password');
    if (!user || !(await bcrypt.compare(req.body.password, user.password))) return res.status(401).json({ mensaje: 'Credenciales incorrectas' });
    if (!process.env.JWT_SECRET) throw new Error('Falta JWT_SECRET');
    const token = jwt.sign({ uid: user.id }, process.env.JWT_SECRET, { expiresIn: '8h' });
    res.json({ token, usuario: { id: user.id, nombre: user.nombre, email: user.email, rol: user.rol } });
  } catch { res.status(500).json({ mensaje: 'No se pudo iniciar sesión' }); }
};
