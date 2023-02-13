import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BiRocket } from "react-icons/bi";
import "./Navbar.css";
export default function Navbar() {
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
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
