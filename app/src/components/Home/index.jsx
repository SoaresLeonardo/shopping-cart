import { AiOutlineShoppingCart } from "react-icons/ai";
import data from "../../../backend/Data";
import "./style.css";

export default function Home() {
  const { productItems } = data;
  return (
    <>
      <div className="container">
        <div className="header-container">
          <h2>Shopping cart</h2>
          <span>
            Cart <AiOutlineShoppingCart />
          </span>
        </div>
        <div className="products-container">
          {productItems.map((productItem) => (
            <div className="product-card">
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
                  Adicionar ao carrinho <AiOutlineShoppingCart size={17} style={{marginLeft: 8}} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
