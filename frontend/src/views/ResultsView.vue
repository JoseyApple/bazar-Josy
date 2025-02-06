<template>
  <div>
    <h1>Resultados de Búsqueda</h1>
    <ul>
      <li v-for="product in products" :key="product.id">
        <router-link :to="'/items/' + product.id">
          <img :src="product.thumbnail" alt="Imagen del producto" />
          <h3>{{ product.title }}</h3>
          <p>Precio: ${{ product.price }}</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import api from "@/api/api"; // Importa la instancia de Axios configurada

export default {
  setup() {
    const products = ref([]);
    const route = useRoute();

    const fetchProducts = async () => {
      try {
        const searchQuery = route.query.search;
        const response = await api.get(`/api/items?q=${searchQuery}`);
        products.value = response.data.items;
      } catch (error) {
        console.error("Error al obtener productos:", error);
      }
    };

    onMounted(fetchProducts);

    return { products };
  },
};
</script>

  