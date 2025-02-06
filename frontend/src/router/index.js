import { createRouter, createWebHistory } from "vue-router";
import SearchView from "../views/SearchView.vue";
import ProductDetailView from "../views/ProductDetailView.vue";

const routes = [
  {
    path: "/",
    name: "Search",
    component: SearchView,
  },
  {
    path: "/product/:id",
    name: "ProductDetail",
    component: ProductDetailView,
    props: true, // Para pasar el parámetro `id` como prop
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

