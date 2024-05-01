import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex justify-between container mx-auto">
      <Link to={"/"}>Home</Link>
      <Link to="/form">Form</Link>
      <Link to="/cart">Cart</Link>
    </div>
  );
}
