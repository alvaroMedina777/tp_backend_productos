import jwt from 'jsonwebtoken';
import User from '../models/User.js';
export const authenticate = async (req, res, next) => {
  try {
    const header = req.headers.authorization || '';
    const token = header.startsWith('Bearer ') ? header.slice(7) : null;
    if (!token) return res.status(401).json({ mensaje: 'Falta token' });
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(payload.uid);
    if (!user || !user.estado) return res.status(401).json({ mensaje: 'Usuario no válido' });
    req.usuario = user;
    next();
  } catch {
    res.status(401).json({ mensaje: 'Token inválido o vencido' });
  }
};
export const validarRolAdmin = (req, res, next) => {
  if (req.usuario?.rol !== 'ADMIN_ROLE') return res.status(403).json({ mensaje: 'Se requiere rol administrador' });
  next();
};
