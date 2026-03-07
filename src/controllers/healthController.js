/**
 * Controlador para la ruta de salud del servidor.
 * Sigue el estándar de respuestas corporativo: {status, message, data}
 */
const healthController = {
    getStatus: (req, res) => {
        try {
            res.status(200).json({
                status: 'operational',
                message: 'Alke Wallet - Enterprise Solution Backend is UP',
                data: {
                    environment: process.env.NODE_ENV || 'development',
                    version: '1.0.0',
                    timestamp: new Date().toISOString(),
                    uptime: `${Math.floor(process.uptime())}s`
                }
            });
        } catch (error) {
            res.status(500).json({
                status: 'error',
                message: 'Failed to retrieve server status',
                error: error.message
            });
        }
    }
};

module.exports = healthController;
