import { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import axios from "axios";
import { useCart } from "../store/CartProvider";
const BASE_URL = import.meta.env.VITE_BASE_API_URL;
export default function Home() {
  const [products, setProducts] = useState([]);
  const { cart, addToCart, incrementCart, decrementCart } = useCart();
  console.log(cart);
  useEffect(() => {
    async function fetchMePRoducts() {
      try {
        const res = await axios.get(`${BASE_URL}/fetch/products`);
        if (res.status == 200) {
          setProducts(res.data.products);
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchMePRoducts();
  }, []);
  return (
    <div>
      <Navbar />
      <div className="flex flex-wrap gap-4 justify-center mt-10">
        {products.map((product) => {
          return (
            <div key={product._id} className="flex flex-col gap-3 border p-3">
              <h1>{product.name}</h1>
              <h1>{product.quantity}</h1>
              <h1>{product.price}</h1>
              {cart.find((item) => item?.product._id == product._id) ? (
                <div className="flex  ga-2 items-center mt-5">
                  <button
                    onClick={() => decrementCart(product?._id)}
                    className="border rounded-md px-2"
                  >
                    -
                  </button>
                  <div>
                    {
                      cart.find((item) => item?.product._id == product._id)
                        ?.count
                    }
                  </div>
                  <button
                    onClick={() => incrementCart(product?._id)}
                    className="border rounded-md px-2"
                  >
                    +
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => addToCart(product)}
                  className="border p-3 rounded"
                >
                  Add to Cart
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
