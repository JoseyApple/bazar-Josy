const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Ruta corregida para cargar el JSON desde la carpeta backend
const rawData = fs.readFileSync(path.join(__dirname, "products.json"));
const productsData = JSON.parse(rawData);
const products = productsData.products; // Acceder a la clave "products"

// Endpoint para obtener todos los productos
app.get("/api/products", (req, res) => {
  res.json(products);
});

// Endpoint de búsqueda de productos
app.get("/api/items", (req, res) => {
  const query = req.query.q?.toLowerCase() || "";
  const results = products.filter(product =>
    product.title.toLowerCase().includes(query) ||
    product.description.toLowerCase().includes(query)
  );
  res.json({ items: results });
});

// Endpoint de detalles de producto por ID
app.get("/api/items/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find(p => p.id === id);
  if (!product) {
    return res.status(404).json({ error: "Producto no encontrado" });
  }
  res.json(product);
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
