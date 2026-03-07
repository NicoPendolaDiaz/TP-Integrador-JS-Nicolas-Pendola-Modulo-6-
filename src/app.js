const express = require('express');
const dotenv = require('dotenv');
const helmet = require('helmet');
const cors = require('cors');
const path = require('path');

// Configuración de variables de entorno
dotenv.config();

// Inicialización de la aplicación
const app = express();
const PORT = process.env.PORT || 3000;

// Importar Middlewares y Rutas
const loggerMiddleware = require('./middlewares/logger');
const errorHandler = require('./middlewares/errorHandler');
const mainRoutes = require('./routes/main.routes');
const healthRoutes = require('./routes/health.routes');

// ── Middlewares Globales ────────────────────────────────────────────────────

// Seguridad: Helmet ayuda a proteger la aplicación de vulnerabilidades conocidas configurando cabeceras HTTP adecuadas
app.use(helmet());

// CORS: Permite o restringe solicitudes de recursos cruzados
app.use(cors());

// Parseo de cuerpo de solicitudes JSON y urlencoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servir archivos estáticos desde /public
app.use(express.static(path.join(__dirname, 'public')));

// Middleware de Auditoría (Requerimiento M6 - Paso 5)
// Registra cada petición en logs/log.txt con el formato requerido
app.use(loggerMiddleware);

// ── Rutas ───────────────────────────────────────────────────────────────────

// Ruta principal (Landing Page con Glassmorphism)
app.use('/', mainRoutes);

// Rutas de Salud/Estado (Respuesta JSON) - Requerimiento Paso 4 (Ruta /status)
app.use('/status', healthRoutes);

// ── Manejo de Errores ───────────────────────────────────────────────────────

// Middleware de Errores Global (Debe ir después de las rutas)
app.use(errorHandler);

// Inicio del Servidor
app.listen(PORT, () => {
    console.log(`✅ Servidor iniciado en http://localhost:${PORT}`);
    console.log(`📡 Entorno: ${process.env.NODE_ENV || 'development'}`);
});

module.exports = app;
