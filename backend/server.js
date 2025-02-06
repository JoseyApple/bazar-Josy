const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000; // 🚀 Usa process.env.PORT para Railway

// Ruta al archivo JSON
const dataPath = path.join(__dirname, "products.json");

// Verifica si el archivo products.json existe antes de cargarlo
let products = [];
if (fs.existsSync(dataPath)) {
  try {
    const rawData = fs.readFileSync(dataPath, "utf8");
    const productsData = JSON.parse(rawData);
    products = Array.isArray(productsData.products) ? productsData.products : [];
  } catch (error) {
    console.error("❌ Error al leer products.json:", error);
  }
} else {
  console.error("❌ ERROR: products.json no encontrado en el servidor.");
}

app.use(cors());
app.use(express.json());

// ✅ Endpoint para obtener productos
app.get("/api/products", (req, res) => {
  if (!products.length) {
    return res.status(404).json({ error: "No hay productos disponibles." });
  }
  res.json(products);
});

// ✅ Endpoint de búsqueda de productos
app.get("/api/items", (req, res) => {
  const query = req.query.q?.toLowerCase() || "";
  const results = products.filter(product =>
    product.title.toLowerCase().includes(query) ||
    product.description.toLowerCase().includes(query)
  );
  res.json({ items: results });
});

// ✅ Endpoint para obtener detalles de un producto por ID
app.get("/api/items/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find(p => p.id === id);
  if (!product) {
    return res.status(404).json({ error: "Producto no encontrado." });
  }
  res.json(product);
});

// ✅ Servidor corriendo en Railway
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});

