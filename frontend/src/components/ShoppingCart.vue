<template>
  <div class="product-detail" v-if="product">
    <h1>{{ product.title }}</h1>
    <img :src="product.thumbnail" alt="Product Image" class="product-image" />
    <p class="product-description">{{ product.description }}</p>
    <p class="product-price">Precio: ${{ product.price }}</p>
    <p class="product-category">Categoría: {{ product.category }}</p>
    <p class="product-stock">Stock: {{ product.stock }}</p>
    <div class="product-rating">
      <p>Calificación:</p>
      <div class="stars">
        <img
          v-for="star in fullStars"
          :key="'full-' + star"
          src="@/assets/estrellaCompleta.png"
          alt="Full Star"
          class="star"
        />
        <img
          v-if="hasHalfStar"
          src="@/assets/estrellaMitad.png"
          alt="Half Star"
          class="star"
        />
      </div>
    </div>
    <div class="buttons">
      <button @click="handleAddToCart" class="add-to-cart">Añadir a la cesta</button>
      <router-link to="/" class="back-link">Volver al inicio</router-link>
    </div>
  </div>
  <div v-else>
    <p v-if="error">{{ error }}</p>
    <p v-else>Cargando producto...</p>
  </div>
</template>

<script>
import api from "@/api/api"; // Importa el cliente configurado con Axios
import "./estilos/productosEstilos.css";
import { addToCart } from "../cartState.js"; // Importa la función de la cesta

export default {
  data() {
    return {
      product: null,
      fullStars: 0,
      hasHalfStar: false,
      error: null, // Para manejar errores en la carga
    };
  },
  mounted() {
    const productId = this.$route.params.id;
    console.log("🔍 Buscando producto con ID:", productId); // Depuración

    api
      .get(`/api/products/${productId}`) // 🚀 Cambiado a la ruta correcta en Render
      .then((response) => {
        console.log("✅ Producto recibido:", response.data); // Depuración
        this.product = response.data;
        this.calculateStars();
      })
      .catch((error) => {
        console.error("❌ Error al cargar el producto:", error);
        this.error = "No se pudo cargar el producto. Verifica tu conexión o intenta nuevamente.";
        this.product = null;
      });
  },
  methods: {
    calculateStars() {
      if (this.product && this.product.rating) {
        const rating = this.product.rating;
        this.fullStars = Math.floor(rating);
        this.hasHalfStar = rating % 1 >= 0.5;
      }
    },
    handleAddToCart() {
      addToCart(this.product); // Añadir producto a la cesta
      alert("Producto añadido a la cesta!");
    },
  },
};
</script>

<style>
.cart-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9;
}

.cart-panel {
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  height: 100%;
  background-color: white;
  padding: 20px;
  box-shadow: -4px 0 10px rgba(0, 0, 0, 0.1);
  z-index: 10;
  overflow-y: auto;
}

.cart-thumbnail {
  width: 50px;
  height: 50px;
  margin-right: 10px;
}

.remove-button,
.clear-cart,
.close-cart {
  background-color: red;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  margin: 5px; /* Espaciado entre los botones */
}

.remove-button:hover,
.clear-cart:hover,
.close-cart:hover {
  background-color: darkred;
}

.open-cart {
  position: fixed;
  top: 10px;
  right: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 15px 20px; /* Aumenté el tamaño del botón */
  font-size: 16px; /* Texto más grande */
  font-weight: bold;
  cursor: pointer;
  z-index: 10;
}

.open-cart:hover {
  background-color: #0056b3;
}
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

body {
  font-family: 'Roboto', sans-serif;
}

.total-amount {
  margin-top: 15px;
  font-size: 18px;
  font-weight: bold;
  text-align: right;
}

.cart-counter {
  position: absolute;
  top: -5px; /* Ajusta según sea necesario */
  right: -10px; /* Ajusta según sea necesario */
  background-color: red;
  color: white;
  font-size: 14px;
  font-weight: bold;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid white; /* Para separar visualmente */
}


</style>


  