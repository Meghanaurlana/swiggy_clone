import logo from "../assets/Images/FoodLogo.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import { useSelector } from "react-redux";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus()

  const cartItems = useSelector((store) => store.cart.items)

  return (
    <div className="flex justify-between shadow-lg ">
      <div className="logo-container">
        <img className="w-20" src={logo} />
      </div>

      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            Online Status : {onlineStatus ? "🟢" : "🔴"}
          </li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about"> About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li  >
          <li className="px-4">
            <Link to="/cart">Cart 🛒  ({cartItems.length} items)</Link>
          </li>
          <button
            className="px-4"
            onClick={() => {
              btnName === "Login" ? setBtnName("logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
