import { Schema, model } from 'mongoose';
const schema = new Schema({
  nombre: { type: String, required: true, unique: true, trim: true },
  estado: { type: Boolean, default: true },
  usuario: { type: Schema.Types.ObjectId, ref: 'User', required: true }
}, { timestamps: true });
export default model('Categoria', schema);
