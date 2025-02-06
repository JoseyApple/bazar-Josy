# Despliegue del Proyecto en Localhost

Este proyecto está dividido en dos partes principales:
- **Frontend**: Construido con Vue.js.
- **Backend**: Construido con Node.js y Express.

A continuación, se describen los pasos para desplegar ambas partes en tu máquina local.

---

## Requisitos Previos
1. **Node.js** (versión 14 o superior): [Descargar Node.js](https://nodejs.org/)
2. **NPM** (viene incluido con Node.js)
3. **Git** (opcional, para clonar el repositorio)

---

## Instrucciones

### Clonar el repositorio (opcional)
Si aún no tienes el proyecto en tu máquina:
```bash
git clone https://github.com/tu-usuario/tu-repositorio.git
cd tu-repositorio
```

---

### 1. Desplegar el Backend
- Navegar al directorio del backend:
```bash
cd backend
```

- Instalar dependencias:
```bash
npm install
```

- Ejecutar el servidor:
```bash
node server.js
```

- Verificar:
  El servidor debería iniciarse en `http://localhost:3000`.  
  Puedes comprobarlo abriendo el navegador y visitando:
  ```
  http://localhost:3000/api/products
  ```

---

### 2. Desplegar el Frontend
- Navegar al directorio del frontend:
```bash
cd frontend
```

- Instalar dependencias:
```bash
npm install
```

- Ejecutar el proyecto:
```bash
npm run serve
```

- Verificar:
  El frontend debería iniciarse en `http://localhost:8080`.  
  Abre el navegador y visita:
  ```
  http://localhost:8080
  ```

---
### 3. Probar la aplicación
https://bazar-josy-frontproduction.up.railway.app/
![image](https://github.com/user-attachments/assets/b2b764e1-09b5-476e-a6f0-954e6171e413)

En la aplicación podemos buscar los productos usando el buscador.

![image](https://github.com/user-attachments/assets/a6e2226b-3a5a-466d-9bc5-b86801bf1720)

A continuación hacemos clic sobre el nombre del producto para acceder a toda su información y la posibilidad de añadirlo a nuestra cesta de compra.

![image](https://github.com/user-attachments/assets/a5fc2e8a-4f5f-4846-aa03-3ad06bfe1441)

Si lo añadimos a la cesta, este producto se añade y lo podemos consultar en la parte superior derecha de la aplicación. Aquí podemos vaciar la cesta, eliminar un producto específico a través de un botón y además del coste total.

![image](https://github.com/user-attachments/assets/37a871cb-a60d-43e1-8390-cc32af868687)

Y para terminar, la aplicación guarda nuestra sesión y si volvemos al inicio, la cesta sigue estando activa.

![image](https://github.com/user-attachments/assets/38aa723b-f2dd-49f5-afd2-086f87b53b77)



## Notas Adicionales
- Asegúrate de que el backend esté corriendo en el puerto `3000` antes de iniciar el frontend.
- Si el backend está configurado para utilizar una URL diferente, actualiza la variable de entorno en `frontend/.env` o modifica `api.js` para reflejar la URL correcta.

