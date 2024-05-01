import Navbar from "../components/Navbar/Navbar";
import { useCart } from "../store/CartProvider";

export default function Cart() {
  const { cart } = useCart();
  return (
    <div>
      <Navbar />
      {cart.map((item) => {
        return (
          <div key={item?.product?._id}>
            <div
              key={item?.product._id}
              className="flex flex-col gap-3 border p-3"
            >
              <h1>{item?.product.name}</h1>
              <h1>{item?.product.quantity}</h1>
              <h1>{item?.product.price}</h1>
              {cart.find((item) => item?.product._id == item?.product._id) && (
                <div>
                  <button>
                    {
                      cart.find(
                        (item) => item?.product._id == item?.product._id
                      )?.count
                    }
                  </button>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
