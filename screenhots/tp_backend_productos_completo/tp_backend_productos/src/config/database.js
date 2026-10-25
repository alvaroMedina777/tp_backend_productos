import mongoose from 'mongoose';
export const conectarDB = async () => {
  if (!process.env.MONGODB_URI) throw new Error('Falta MONGODB_URI');
  await mongoose.connect(process.env.MONGODB_URI);
  console.log('MongoDB conectado');
};
