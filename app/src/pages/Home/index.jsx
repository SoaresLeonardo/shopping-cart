import "./style.css";
import Navbar from "../../components/Navbar";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function Home({ addToCart, productItems, cart }) {
  return (
    <div className="container">
      <Navbar cart={cart} />
      <div className="products-container">
        {productItems.map((productItem) => (
          <div key={productItem.id} className="product-card">
            <div className="product-image">
              <img src={productItem.image} alt="Product image" />
            </div>
            <div className="product-description">
              <span>{productItem.description}</span>
            </div>
            <div className="product-price">
              <span>{`R$ ${productItem.price}`}</span>
            </div>
            <div>
              <button onClick={() => addToCart(productItem)}>
                Adicionar ao carrinho
                <AiOutlineShoppingCart size={17} className="cart-icon" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
