# Alke Wallet - Enterprise Solution (Módulo 6)

Este proyecto representa la base sólida de una aplicación financiera de alto rendimiento, desarrollada con **Node.js** y **Express**. Se ha diseñado bajo estándares de arquitectura empresarial para garantizar escalabilidad hacia los módulos 7 (Base de Datos) y 8 (Seguridad Avanzada).

## 🚀 Justificaciones Técnicas (Requerimientos M6)

Para cumplir con la rúbrica de evaluación, se detallan las siguientes decisiones de arquitectura:

1. **Nombre del archivo principal (`app.js`)**: Se eligió `app.js` siguiendo el estándar de separación de preocupaciones (*Separation of Concerns*). Mientras que `index.js` suele usarse como punto de entrada que levanta el servidor, `app.js` encapsula la lógica de la aplicación Express, facilitando las pruebas unitarias y la integración con herramientas de testing sin necesidad de levantar el puerto de escucha.
2. **Estructura `/src`**: Se implementó una estructura basada en `/src` para aislar el código fuente de los archivos de configuración de despliegue y dependencias. Esto es una práctica estándar en proyectos de nivel Enterprise para mantener el orden y la seguridad.
3. **Uso de `pnpm`**: Se optó por `pnpm` en lugar de `npm` por su eficiencia radical en el manejo de dependencias, ahorro de espacio en disco y prevención de dependencias fantasma, alineándose con las necesidades de una arquitectura profesional.
4. **Respuesta `/status`**: La ruta `/status` devuelve un formato JSON estandarizado para permitir el monitoreo automatizado del sistema (*Health Check*), un requisito crítico en infraestructuras modernas.

---

## 🏗️ Arquitectura
- **/src/routes**: Definición de endpoints modulares.
- **/src/controllers**: Lógica de negocio encapsulada.
- **/src/middlewares**: Filtros de seguridad (`helmet`, `cors`), auditoría y errores.
- **/src/public**: Interfaz de usuario con diseño **Neon-Blue Glassmorphism**.
- **/logs**: Persistencia plana de auditoría mediante el módulo `fs`.

---

## 🛠️ Requisitos del Sistema
- **Node.js**: v18.0.0 o superior.
- **pnpm**: v9.0.0 o superior.

---

## 🔧 Instalación y Ejecución

1. **Instalar dependencias**:
   ```bash
   pnpm install
   ```
2. **Modo Desarrollo (con auto-reload)**:
   ```bash
   pnpm run dev
   ```
3. **Modo Producción**:
   ```bash
   pnpm start
   ```

## 📡 Endpoints
- `GET /`: Landing page con interfaz profesional.
- `GET /status`: Estado operacional del servidor (JSON).

## 📝 Auditoría
El sistema genera automáticamente `logs/log.txt` con el formato: `[fecha] [hora] MÉTODO /ruta`, cumpliendo estrictamente con los requerimientos de persistencia del módulo.
