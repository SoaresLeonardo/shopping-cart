import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./Navbar.css";
export default function Navbar({ cart }) {
  return (
    <>
      <nav>
        <div className="nav-name">
          <Link to="/" className="home-link">
            Shopping cart
          </Link>
        </div>
        <div className="nav-links">
          <ul>
            <li>
              <Link to="/cart">
                <AiOutlineShoppingCart className="icon" />
              </Link>

              <span className="cartItems-counter">{cart.length}</span>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
