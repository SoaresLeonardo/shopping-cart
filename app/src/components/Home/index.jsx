import { AiOutlineShoppingCart } from "react-icons/ai";
import data from "../../../backend/Data";
import "./style.css";
import { Link } from "react-router-dom";

export default function Home() {
  const { productItems } = data;
  return (
    <>
      <div className="container">
        <div className="header-container">
          <h1>Shopping cart</h1>
          <Link to="/cart">
            cart <AiOutlineShoppingCart />
          </Link>
        </div>
        <div className="products-container">
          {productItems.map((productItem) => (
            <div key={productItem.id} className="product-card">
              <div>
                <img src={productItem.image} alt="Product item" />
              </div>
              <div>
                <span>{productItem.description}</span>
              </div>
              <div>
                <span className="price-product">{productItem.price}</span>
              </div>
              <div>
                <button>
                  Adicionar ao carrinho{" "}
                  <AiOutlineShoppingCart size={17} className="cart-icon" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
