import { useContext, createContext, useState } from "react";
const CartContext = createContext({
  cart: [],
  addToCart: () => {},
  incrementCart: () => {},
  decrementCart: () => {},
});
export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  function addToCart(product) {
    setCart([...cart, { product, count: 1 }]);
  }

  function incrementCart(id) {
    setCart((cart) =>
      cart.map(cart._id == id ? { ...cart, count: cart.count + 1 } : cart)
    );
  }
  function decrementCart(id) {
    setCart((cart) =>
      cart.map(
        cart.product?._id == id ? { ...cart, count: cart.count - 1 } : cart
      )
    );
  }
  const ctxValue = {
    addToCart: addToCart,
    cart: cart,
    incrementCart: incrementCart,
    decrementCart: decrementCart,
  };
  return (
    <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
