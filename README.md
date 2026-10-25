# TP Backend Productos - API REST

## Descripción

Trabajo práctico del Módulo 3 de RollingCode School.

Desarrollo de una API REST utilizando Node.js, Express y MongoDB, que permite administrar usuarios, categorías y productos.

El proyecto incluye autenticación mediante JWT, validación de datos y operaciones CRUD. La base de datos se encuentra alojada en MongoDB Atlas y el servidor está desplegado en Render.

## Tecnologías utilizadas

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JavaScript (ES Modules)
- JSON Web Token (JWT)
- bcryptjs
- express-validator
- dotenv
- CORS
- Thunder Client
- Git y GitHub
- Render

## Funcionalidades

**Autenticación**
- Registro de usuarios.
- Inicio de sesión.
- Generación y validación de tokens JWT.
- Control de acceso mediante roles de usuario y administrador.

**Categorías**
- Listar categorías.
- Crear categorías.
- Actualizar categorías.
- Eliminar categorías.

**Productos**
- Listar productos.
- Crear productos.
- Actualizar productos.
- Eliminar productos mediante baja lógica.
- Relacionar productos con categorías y usuarios.

## Endpoints

### Autenticación

| Método | Endpoint | Descripción |
|---|---|---|
| POST | `/api/auth/register` | Registrar usuario |
| POST | `/api/auth/login` | Iniciar sesión |

### Categorías

| Método | Endpoint | Descripción |
|---|---|---|
| GET | `/api/categorias` | Obtener categorías |
| POST | `/api/categorias` | Crear categoría |
| PUT | `/api/categorias/:id` | Actualizar categoría |
| DELETE | `/api/categorias/:id` | Eliminar categoría |

### Productos

| Método | Endpoint | Descripción |
|---|---|---|
| GET | `/api/productos` | Obtener productos |
| POST | `/api/productos` | Crear producto |
| PUT | `/api/productos/:id` | Actualizar producto |
| DELETE | `/api/productos/:id` | Eliminar producto |

Las operaciones de creación, actualización y eliminación requieren autenticación JWT y permisos de administrador.

## Instalación local

**1. Clonar el repositorio**

```bash
git clone https://github.com/alvaroMedina777/tp_backend_productos.git
```

**2. Ingresar al proyecto**

```bash
cd tp_backend_productos
```

**3. Instalar dependencias**

```bash
npm install
```

**4. Configurar variables de entorno**

Crear un archivo `.env` en la raíz del proyecto con las siguientes variables:

```env
PORT=3000
MONGODB_URI=TU_CADENA_DE_CONEXION_MONGODB_ATLAS
JWT_SECRET=TU_CLAVE_SECRETA_SEGURA
```

Los valores reales deben mantenerse privados y no deben subirse a GitHub.

**5. Iniciar el servidor**

Para desarrollo:

```bash
npm run dev
```

Para ejecución normal:

```bash
npm start
```

## Despliegue

La API se encuentra publicada en Render y utiliza MongoDB Atlas como base de datos.

**URL pública:**

https://tp-backend-productos.onrender.com

**Endpoint para consultar productos:**

https://tp-backend-productos.onrender.com/api/productos

El servicio utiliza el plan gratuito de Render, por lo que puede tardar unos segundos en responder después de un período de inactividad.

## Pruebas y evidencias

Las rutas fueron probadas utilizando Thunder Client, verificando las respuestas HTTP correspondientes a las operaciones de autenticación y CRUD.

Las capturas de las pruebas se encuentran en la carpeta `evidencias/` del repositorio.

## Repositorio

https://github.com/alvaroMedina777/tp_backend_productos

## Autor

Álvaro Medina

RollingCode School - Módulo 3