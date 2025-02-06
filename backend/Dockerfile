# Usa una imagen de Node.js
FROM node:18-alpine

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos del proyecto
COPY . .

# Instala las dependencias
RUN npm install

# Expone el puerto (ajusta si usas otro)
EXPOSE 5000

# Comando para iniciar el backend
CMD ["npm", "start"]
