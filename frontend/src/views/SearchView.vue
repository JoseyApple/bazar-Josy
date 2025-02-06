<template>
  <div class="search-container">
    <img src="@/assets/Logo.webp" alt="Logo" class="logo" />
    <h1>Buscar Productos</h1>
    <input v-model="searchQuery" placeholder="Buscar..." @input="searchItems" />
    <div v-if="items.length" class="results">
      <div v-for="item in items" :key="item.id" class="product-card">
        <img :src="item.thumbnail" :alt="item.title" class="product-image" />
        <div class="product-info">
          <router-link :to="`/product/${item.id}`" class="product-title">
            {{ item.title }}
          </router-link>
          <p class="product-description">{{ item.description }}</p>
          <p class="product-price">Precio: ${{ item.price }}</p>
          <div class="product-rating">
            <p>Calificación:</p>
            <div class="stars">
              <img
                v-for="(star, index) in fullStars(item.rating)"
                :key="'full-' + index"
                src="@/assets/estrellaCompleta.png"
                alt="Full Star"
                class="star"
              />
              <img
                v-if="hasHalfStar(item.rating)"
                src="@/assets/estrellaMitad.png"
                alt="Half Star"
                class="star"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <p v-else>No se encontraron resultados</p>
  </div>
</template>

<script>
import axios from "axios";
import "./estilos/search.css";

export default {
  data() {
    return {
      searchQuery: "",
      items: [],
    };
  },
  methods: {
    async searchItems() {
      if (!this.searchQuery.trim()) {
        this.items = [];
        return;
      }
      try {
        const response = await axios.get(
          `http://localhost:3000/api/items?q=${this.searchQuery}`
        );
        this.items = response.data.items;
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    },
    fullStars(rating) {
      // Retorna un array de la cantidad de estrellas completas
      return Array(Math.floor(rating)).fill(0);
    },
    hasHalfStar(rating) {
      // Retorna si hay media estrella
      return rating % 1 >= 0.5;
    },
  },
};
</script>

<style>
/* search.css contenido adicional si es necesario */

.stars {
  display: flex;
  align-items: center;
  margin-top: 5px;
}

.star {
  width: 20px;
  height: 20px;
  margin-right: 5px;
}
</style>






  