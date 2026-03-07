/**
 * Global error handling middleware.
 * Standardizes API error responses in enterprise format.
 */
const errorHandler = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';

    // Registro interno del error con stack para debug (solo en dev)
    if (process.env.NODE_ENV === 'development') {
        console.error(`[ERROR] ${new Date().toISOString()}: ${err.stack}`);
    } else {
        console.error(`[ERROR] ${new Date().toISOString()}: ${message}`);
    }

    res.status(statusCode).json({
        status: 'error',
        statusCode,
        message,
        path: req.originalUrl,
        timestamp: new Date().toISOString()
    });
};

module.exports = errorHandler;
