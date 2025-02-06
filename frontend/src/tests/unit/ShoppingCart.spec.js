import { mount } from "@vue/test-utils";
import ShoppingCart from "@/components/ShoppingCart.vue";
import { cartState, addToCart, clearCart } from "@/cartState.js";

describe("ShoppingCart.vue", () => {
  beforeEach(() => {
    clearCart(); // Limpia la cesta antes de cada test
  });

  test("muestra la cesta cuando hay productos", async () => {
    addToCart({ id: 1, title: "Producto 1", price: 100, thumbnail: "test.jpg" });

    const wrapper = mount(ShoppingCart);
    wrapper.vm.isOpen = true; // Asegurar que la cesta está visible
    await wrapper.vm.$nextTick(); // Forzar actualización de Vue

    expect(wrapper.find("h2").exists()).toBe(true);
    expect(wrapper.find("h2").text()).toBe("Tu Cesta");
    expect(wrapper.html()).toContain("Producto 1");
    expect(wrapper.html()).toContain("Precio: $100");
  });

  test("muestra mensaje cuando la cesta está vacía", async () => {
    const wrapper = mount(ShoppingCart);
    wrapper.vm.isOpen = true; // Asegurar que la cesta está visible
    await wrapper.vm.$nextTick(); // Forzar actualización de Vue
  
    const emptyMessage = wrapper.find("p");
    expect(emptyMessage.exists()).toBe(true);
    expect(emptyMessage.text()).toBe("La cesta está vacía.");
  });

  test("elimina un producto de la cesta", async () => {
    addToCart({ id: 1, title: "Producto 1", price: 100, thumbnail: "test.jpg" });

    const wrapper = mount(ShoppingCart);
    wrapper.vm.isOpen = true;
    await wrapper.vm.$nextTick();

    const removeButton = wrapper.find(".remove-button");
    expect(removeButton.exists()).toBe(true);

    await removeButton.trigger("click");
    await wrapper.vm.$nextTick();

    expect(wrapper.text()).not.toContain("Producto 1");
  });
});
