# Usa una imagen oficial de Node.js
FROM node:18-alpine

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia los archivos de tu proyecto al contenedor
COPY . .

# Instala las dependencias del proyecto
RUN npm install

# Expone el puerto que utiliza el backend
EXPOSE 5000

# Comando para iniciar la aplicación
CMD ["node", "server.js"]

