<template>
  <div>
    <div class="cart-container">
      <button class="open-cart" @click="toggleCart">
        🛒 Ver Cesta
        <span v-if="cartItems.length" class="cart-counter">{{ cartItems.length }}</span>
      </button>
    </div>

    <div v-if="isOpen" class="cart-overlay" @click.self="toggleCart">
      <div class="cart-panel">
        <h2>Tu Cesta</h2>

        <!-- Mensaje cuando la cesta está vacía -->
        <p v-if="!cartItems.length" class="empty-message">La cesta está vacía.</p>

        <ul v-if="cartItems.length">
          <li v-for="(item, index) in cartItems" :key="index">
            <img :src="item.thumbnail" alt="Product Thumbnail" class="cart-thumbnail" />
            <div>
              <p><strong>{{ item.title }}</strong></p>
              <p>Precio: ${{ item.price }}</p>
              <button @click="removeItem(index)" class="remove-button">Eliminar</button>
            </div>
          </li>
        </ul>

        <p v-if="cartItems.length" class="total-amount">
          <strong>Total:</strong> ${{ totalPrice }}
        </p>

        <button v-if="cartItems.length" @click="clearCart" class="clear-cart">Vaciar Cesta</button>
        <button @click="toggleCart" class="close-cart">Cerrar</button>
      </div>
    </div>
  </div>
</template>

<script>
import { cartState, clearCart, removeFromCart } from "../cartState.js";

export default {
  name: "ShoppingCart",
  data() {
    return {
      isOpen: false,
    };
  },
  computed: {
    cartItems() {
      return cartState.cartItems;
    },
    totalPrice() {
      return this.cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
    },
  },
  methods: {
    toggleCart() {
      this.isOpen = !this.isOpen;
    },
    clearCart,
    removeItem(index) {
      removeFromCart(index);
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


  