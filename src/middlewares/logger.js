const fs = require('fs');
const path = require('path');

/**
 * Middleware para el registro de auditoría en archivos planos.
 * Cumple con el requerimiento del Paso 5 del Módulo 6.
 * Formato: [fecha] [hora] MÉTODO /ruta
 */
const loggerMiddleware = (req, res, next) => {
    const now = new Date();
    
    // Formato requerido: [DD/MM/YYYY] [HH:MM:SS]
    const fecha = now.toLocaleDateString('es-CL');
    const hora = now.toLocaleTimeString('es-CL');
    const linea = `[${fecha}] [${hora}] ${req.method} ${req.originalUrl}\n`;

    const logsDir = path.join(__dirname, '../../logs');
    const logPath = path.join(logsDir, 'log.txt');

    // Crear el directorio de logs si no existe
    if (!fs.existsSync(logsDir)) {
        fs.mkdirSync(logsDir, { recursive: true });
    }

    // Usamos appendFile para agregar la línea al final sin sobrescribir
    fs.appendFile(logPath, linea, (err) => {
        if (err) {
            console.error('❌ Error al escribir en log.txt:', err.message);
        }
    });

    next();
};

module.exports = loggerMiddleware;
