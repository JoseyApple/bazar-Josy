const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();

// ⬇️ Usa el puerto que proporciona Railway o por defecto el 3000 (para desarrollo local)
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// ⬇️ Intenta cargar el archivo JSON con manejo de errores
let products = [];

try {
  const rawData = fs.readFileSync(path.join(__dirname, "products.json"), "utf8");
  const productsData = JSON.parse(rawData);
  products = productsData.products || [];
} catch (error) {
  console.error("Error al cargar el archivo JSON:", error);
}

// ✅ **Endpoint para obtener todos los productos**
app.get("/api/products", (req, res) => {
  res.json(products);
});

// ✅ **Endpoint de búsqueda de productos**
app.get("/api/items", (req, res) => {
  const query = req.query.q?.toLowerCase() || "";
  const results = products.filter(product =>
    product.title.toLowerCase().includes(query) ||
    product.description.toLowerCase().includes(query)
  );
  res.json({ items: results });
});

// ✅ **Endpoint de detalles de producto por ID**
app.get("/api/items/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find(p => p.id === id);
  if (!product) {
    return res.status(404).json({ error: "Producto no encontrado" });
  }
  res.json(product);
});

// ⬇️ Mensaje en consola cuando el servidor está activo
app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en http://localhost:${PORT} o en Railway`);
});
