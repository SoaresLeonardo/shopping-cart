import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BiRocket } from "react-icons/bi";
import "./Navbar.css";
export default function Navbar({ cart }) {
  return (
    <>
      <nav>
        <div className="nav-name">
          <Link to="/" className="home-link">
            Shopping cart <BiRocket />
          </Link>
        </div>
        <div className="nav-links">
          <ul>
            <li>
              <Link to="/cart">
                <AiOutlineShoppingCart className="icon" />
              </Link>
              {cart.length > 0 ? (
                <span className="cartItems-counter">{cart.length}</span>
              ) : (
                ""
              )}
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
