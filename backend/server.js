const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000; // ⚠️ Usa process.env.PORT en Railway

app.use(cors());
app.use(express.json());

// Ruta para cargar el JSON
const rawData = fs.readFileSync(path.join(__dirname, "products.json"));
const productsData = JSON.parse(rawData);
const products = productsData.products;

// Endpoint para obtener productos
app.get("/api/products", (req, res) => {
  res.json(products);
});

// Endpoint de búsqueda
app.get("/api/items", (req, res) => {
  const query = req.query.q?.toLowerCase() || "";
  const results = products.filter(product =>
    product.title.toLowerCase().includes(query) ||
    product.description.toLowerCase().includes(query)
  );
  res.json({ items: results });
});

// Arrancar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

