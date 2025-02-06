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
    <p>Cargando producto...</p>
  </div>
</template>

<script>
import axios from "axios";
import "./estilos/productosEstilos.css";
import { addToCart } from "../cartState.js"; // Importa la función correctamente

export default {
  data() {
    return {
      product: null,
      fullStars: 0,
      hasHalfStar: false,
    };
  },
  mounted() {
    const productId = this.$route.params.id;
    axios
      .get(`http://localhost:3000/api/items/${productId}`)
      .then((response) => {
        this.product = response.data;
        this.calculateStars();
      })
      .catch((error) => {
        console.error("Error al cargar el producto:", error);
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
      addToCart(this.product); // Usa la función importada
      alert("Producto añadido a la cesta!");
    },
  },
};
</script>






  