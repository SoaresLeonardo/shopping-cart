import { AiOutlineShoppingCart, AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./Navbar.css";
export default function Navbar() {
  return (
    <>
      <nav>
        <div className="nav-name">Shopping cart</div>
        <div className="nav-links">
          <ul>
            <li>
              <Link to="/">
                <AiOutlineHome className="icon" />
              </Link>
            </li>
            <li>
              <Link to="/cart">
                <AiOutlineShoppingCart className="icon" />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
