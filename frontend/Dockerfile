# ---------------------------
# Primera fase: Construcción con Node.js
# ---------------------------
    FROM node:18-alpine AS build

    # Establece el directorio de trabajo dentro del contenedor
    WORKDIR /app
    
    # Copia package.json y package-lock.json primero para aprovechar la caché de Docker
    COPY package.json package-lock.json ./
    
    # Instala todas las dependencias, incluidas las de desarrollo
    RUN npm install
    
    # Copia el resto del código fuente
    COPY . .
    
    # Instala Vue CLI globalmente para evitar errores
    RUN npm install -g @vue/cli
    
    # Construye la aplicación
    RUN npm run build
    
    # ---------------------------
    # Segunda fase: Servidor Nginx
    # ---------------------------
    FROM nginx:alpine
    
    # Copia la carpeta `dist` generada en la fase de construcción
    COPY --from=build /app/dist /usr/share/nginx/html
    
    # Exponer el puerto 80 para servir la aplicación
    EXPOSE 80
    
    # Iniciar el servidor Nginx
    CMD ["nginx", "-g", "daemon off;"]
    
