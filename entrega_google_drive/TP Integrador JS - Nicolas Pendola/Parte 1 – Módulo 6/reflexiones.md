# Reflexiones Técnicas - Módulo 6
## Alke Wallet - Enterprise Solution

### Decisiones de Arquitectura
1.  **Nombre del punto de entrada (`app.js`)**: Se optó por `app.js` para desacoplar la lógica de configuración de Express de la ejecución del servidor. Esto facilita enormemente la implementación de pruebas unitarias y de integración en fases posteriores.
2.  **Estructura de Carpetas**: Se implementó una separación clara de preocupaciones mediante directorios especializados (`routes`, `controllers`, `middlewares`, `public`, `logs`). Esta estructura garantiza que el proyecto sea escalable y mantenible a medida que se agreguen más funcionalidades en los módulos 7 y 8.
3.  **Persistencia en Archivos Planos**: Se utilizó el módulo `fs` nativo de Node.js para implementar un sistema de auditoría. El uso de `appendFile` asegura que el historial se mantenga de forma incremental, cumpliendo con los requisitos de trazabilidad del módulo.
4.  **Seguridad Base**: La inclusión de `helmet` desde esta etapa inicial demuestra un enfoque proactivo hacia la seguridad, protegiendo las cabeceras HTTP desde los cimientos de la aplicación.
5.  **Experiencia de Usuario (UX/UI)**: Se diseñó una interfaz con el sistema "Neon-Blue Glassmorphism", proporcionando una estética premium y moderna que diferencia al producto en un mercado competitivo.

### Conclusión
El servidor es robusto, modular y está listo para la integración con una base de datos relacional mediante Sequelize en el próximo módulo.
