import { reactive } from "vue";

// Estado reactivo de la cesta
export const cartState = reactive({
  cartItems: JSON.parse(localStorage.getItem("cart")) || [],
});

// Añadir producto a la cesta
export const addToCart = (product) => {
  if (!cartState.cartItems.some((item) => item.id === product.id)) {
    cartState.cartItems.push(product);
    localStorage.setItem("cart", JSON.stringify(cartState.cartItems)); // Sincronizar con localStorage
  }
};

// Vaciar la cesta (corregido)
export const clearCart = () => {
  cartState.cartItems.splice(0, cartState.cartItems.length); // Mantiene la reactividad
  localStorage.setItem("cart", JSON.stringify(cartState.cartItems));
};

// Eliminar producto de la cesta
export const removeFromCart = (index) => {
  cartState.cartItems.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cartState.cartItems));
};



