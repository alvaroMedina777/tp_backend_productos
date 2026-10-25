import { Schema, model } from 'mongoose';
const schema = new Schema({
  nombre: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  password: { type: String, required: true, select: false },
  rol: { type: String, enum: ['USER_ROLE', 'ADMIN_ROLE'], default: 'USER_ROLE' },
  estado: { type: Boolean, default: true }
}, { timestamps: true });
export default model('User', schema);
