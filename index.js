import dns from "node:dns";
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { conectarDB } from './src/config/database.js';
import authRoutes from './src/routes/auth.routes.js';
import categoryRoutes from './src/routes/category.routes.js';
import productRoutes from './src/routes/product.routes.js';

if (process.env.NODE_ENV !== "production") {
  dns.setServers(["8.8.8.8"]);
}
const app = express();
app.use(cors());
app.use(express.json());
app.get('/', (_req, res) => res.json({ mensaje: 'API REST de productos funcionando' }));
app.use('/api/auth', authRoutes);
app.use('/api/categorias', categoryRoutes);
app.use('/api/productos', productRoutes);
app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ mensaje: 'Error interno del servidor' });
});

try {
  await conectarDB();
  const port = process.env.PORT || 3000;
  app.listen(port, '0.0.0.0', () => console.log(`Servidor en puerto ${port}`));
} catch (error) {
  console.error('No se pudo iniciar:', error.message);
  process.exit(1);
}
