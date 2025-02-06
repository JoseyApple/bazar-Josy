# ---------------------------
# Primera fase: Construcción con Node.js
# ---------------------------
    FROM node:18-alpine AS build

    # Establece el directorio de trabajo dentro del contenedor
    WORKDIR /app
    
    # Instala herramientas esenciales
    RUN apk add --no-cache bash git openssh
    
    # Copia package.json y package-lock.json primero para aprovechar la caché de Docker
    COPY package.json package-lock.json ./
    
    # Instala todas las dependencias necesarias
    RUN npm install
    
    # Instala Vue CLI globalmente para que `vue-cli-service build` funcione
    RUN npm install -g @vue/cli @vue/cli-service
    
    # Copia el resto del código fuente
    COPY . .
    
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
    