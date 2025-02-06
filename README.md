Despliegue del Proyecto en Localhost
Este proyecto está dividido en dos partes principales:

Frontend: Construido con Vue.js.
Backend: Construido con Node.js y Express.
A continuación, se describen los pasos para desplegar ambas partes en tu máquina local.

Requisitos previos
Node.js (versión 14 o superior): Descargar Node.js
NPM (viene incluido con Node.js)
Git (opcional, para clonar el repositorio)
Instrucciones
Clonar el repositorio (opcional)
Si aún no tienes el proyecto en tu máquina:

bash
Copiar
Editar
git clone https://github.com/tu-usuario/tu-repositorio.git
cd tu-repositorio
1. Desplegar el Backend
Navegar al directorio del backend:

bash
Copiar
Editar
cd backend
Instalar dependencias:

bash
Copiar
Editar
npm install
Ejecutar el servidor:

bash
Copiar
Editar
node server.js
Verificar:

El servidor debería iniciarse en http://localhost:3000.
Puedes comprobarlo abriendo el navegador y visitando:
http://localhost:3000/api/products
2. Desplegar el Frontend
Navegar al directorio del frontend:

bash
Copiar
Editar
cd frontend
Instalar dependencias:

bash
Copiar
Editar
npm install
Ejecutar el proyecto:

bash
Copiar
Editar
npm run serve
Verificar:

El frontend debería iniciarse en http://localhost:8080.
Abre el navegador y visita http://localhost:8080.
Notas adicionales
Asegúrate de que el backend esté corriendo en el puerto 3000 antes de iniciar el frontend.
Si el backend está configurado para utilizar una URL diferente, actualiza la variable de entorno en frontend/.env o modifica api.js para reflejar la URL correcta.
