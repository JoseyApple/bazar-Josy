<template>
  <div id="app">
    <router-view />
    <ShoppingCart />
  </div>
</template>

<script>
import ShoppingCart from "@/components/ShoppingCart.vue";

export default {
  components: {
    ShoppingCart,
  },
};
</script>




