import Navbar from "../../components/Navbar";
import { FaCartPlus } from "react-icons/fa";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import "./styles.css";

export default function Cart({ cart, addToCart, removeToCart }) {
  const price = cart.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );
  const frete = 15.9;
  const priceTotal = price + frete;

  return (
    <div className="container">
      <Navbar cart={cart} />
      <div className="cartItems-container">
        {cart.map((item) => (
          <div key={item.id} className="cartItems">
            <div className="cartItem-image">
              <img src={item.image} alt="Imagem do Produto" />
            </div>
            <div className="cartItem-description">
              <h4>Produto</h4>
              <span>{item.description}</span>
            </div>
            <div className="cartItem-functions">
              <button onClick={() => removeToCart(item)}>
                <AiOutlineLeft />
              </button>
              <span>{item.quantity}</span>
              <button onClick={() => addToCart(item)}>
                <AiOutlineRight />
              </button>
            </div>
            <div className="cartItem-price">
              <span>{`R$ ${item.price}`}</span>
            </div>
          </div>
        ))}
      </div>

      {cart.length > 0 && (
        <div className="payment">
          <div>
            <h2>Resumo do pedido</h2>
            <div className="payment-item">
              <span>Total</span>
              {`R$ ${price.toFixed(2)}`}
            </div>
            <div className="payment-item">
              <span>Frete</span>
              {`R$ ${frete.toFixed(2)}`}
            </div>
            <div className="payment-item">
              <span>Preço total</span>
              {`R$ ${priceTotal.toFixed(2)}`}
            </div>
            <div className="payment-button">
              <button>Comprar</button>
            </div>
          </div>
        </div>
      )}

      {cart.length < 1 && (
        <div className="emptyCart">
          <div>
            <FaCartPlus />
            <span>Carrinho vazio</span>
          </div>
        </div>
      )}
    </div>
  );
}
