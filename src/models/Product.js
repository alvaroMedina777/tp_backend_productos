import { Schema, model } from 'mongoose';
const schema = new Schema({
  nombre: { type: String, required: [true, 'El nombre es obligatorio'], unique: true, trim: true },
  estado: { type: Boolean, default: true },
  usuario: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  precio: { type: Number, default: 0 },
  categoria: { type: Schema.Types.ObjectId, ref: 'Categoria', required: true },
  descripcion: { type: String },
  disponible: { type: Boolean, default: true },
  img: { type: String, default: 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Image-not-found.png' }
}, { timestamps: true });
export default model('Producto', schema);
