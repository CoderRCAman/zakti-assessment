import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import Navbar from "../components/Navbar/Navbar";

const BASE_URL = import.meta.env.VITE_BASE_API_URL;
export default function Form() {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    quantity: "",
  });
  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log("base", BASE_URL);
      if (!product.name || !product.price || !product.quantity)
        return toast.error("Missing fields!");
      const res = await axios.post(`${BASE_URL}/product`, product);
      if (res.status == 201) {
        toast.success(res.data.message);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        window.location.href = "/";
      }
    } catch (error) {
      toast.error(error.data?.response?.message || error.message);
    }
  };
  return (
    <section>
      <Navbar />
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 h-screen w-full justify-center items-center"
      >
        <div className="space-x-3">
          <label htmlFor="">Name</label>
          <input
            onChange={handleChange}
            className="border border-gray-400"
            name="name"
          />
        </div>
        <div className="space-x-3">
          <label htmlFor="">Price</label>
          <input
            onChange={handleChange}
            className="border border-gray-400"
            name="price"
          />
        </div>
        <div className="space-x-3">
          <label htmlFor="">Quantity</label>
          <input
            onChange={handleChange}
            name="quantity"
            className="border border-gray-400"
          />
        </div>
        <button className="border border-emerald-400 rounded-md px-3 py-1 text-emerald-500">
          Submit
        </button>
      </form>
    </section>
  );
}
