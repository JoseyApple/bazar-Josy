import { reactive } from "vue";

export const cartState = reactive({
  cartItems: JSON.parse(localStorage.getItem("cart")) || [],
});

// Añadir producto a la cesta
export const addToCart = (product) => {
  if (!cartState.cartItems.some((item) => item.id === product.id)) {
    cartState.cartItems.push(product);
    localStorage.setItem("cart", JSON.stringify(cartState.cartItems));
  }
};

// Vaciar la cesta
export const clearCart = () => {
  cartState.cartItems = [];
  localStorage.setItem("cart", JSON.stringify(cartState.cartItems));
};

// Eliminar producto de la cesta
export const removeFromCart = (index) => {
  cartState.cartItems.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cartState.cartItems));
};




