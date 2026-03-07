const path = require('path');

/**
 * Controlador para la ruta principal.
 * Sirve el contenido estático de la landing page.
 */
const mainController = {
    getHome: (req, res) => {
        try {
            // Servimos el archivo index.html desde la carpeta public
            res.sendFile(path.join(__dirname, '../public/index.html'));
        } catch (error) {
            res.status(500).send('Error al cargar la página principal');
        }
    }
};

module.exports = mainController;
