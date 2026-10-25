# TP Backend Productos

API REST de productos con Express, Mongoose, JWT y express-validator.

## Instalación

1. `npm install`
2. Copiar `.env.example` a `.env` y configurar MONGODB_URI y JWT_SECRET.
3. `npm run dev` (desarrollo) o `npm start` (Render).

## Endpoints

| Método | Ruta | Autenticación |
|---|---|---|
| POST | /api/auth/register | No |
| POST | /api/auth/login | No |
| GET | /api/categorias | No |
| POST | /api/categorias | Administrador |
| PUT | /api/categorias/:id | Administrador |
| DELETE | /api/categorias/:id | Administrador |
| GET | /api/productos?desde=0 | No |
| POST | /api/productos | Bearer JWT |
| PUT | /api/productos/:id | Bearer JWT |
| DELETE | /api/productos/:id | Bearer JWT |

### Ejemplos JSON

Registro: `{"nombre":"Alumno","email":"alumno@example.com","password":"claveSegura123"}`

Login: `{"email":"alumno@example.com","password":"claveSegura123"}`

Categoría: `{"nombre":"Bicicletas"}`

Producto: `{"nombre":"Bicicleta MTB","precio":120000,"categoria":"ID_DE_CATEGORIA","descripcion":"Rodado 29","disponible":true}`

El registro público asigna USER_ROLE. Para probar las rutas administrativas de categorías en desarrollo, crear un usuario de prueba y asignarle ADMIN_ROLE en MongoDB Compass/Atlas (solo en la base de desarrollo). Volver a iniciar sesión para probar.

## Render

Crear un Web Service desde el repositorio GitHub. Build command: `npm install`; Start command: `npm start`. Variables de entorno: `MONGODB_URI` (Atlas), `JWT_SECRET` (valor secreto largo) y opcional `PORT` (Render lo establece automáticamente). Configurar el acceso de red de Atlas para permitir conexiones desde Render, siguiendo sus controles de seguridad.

No publicar `.env`, contraseñas ni cadenas de conexión con credenciales.
