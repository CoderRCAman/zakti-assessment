import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Form from "./pages/Form";
import CartProvider from "./store/CartProvider";
export default function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/form" element={<Form />} />
        </Routes>
        <Toaster />
      </Router>
    </CartProvider>
  );
}
