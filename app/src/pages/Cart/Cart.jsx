import Navbar from "../../components/Navbar";
import "./styles.css";
import { IoMdRemove, IoMdAdd } from "react-icons/io";
import { FaCartPlus } from "react-icons/fa";

export default function Cart({ cart }) {
  const priceTotal = cart.reduce((price, item) => price + item.price, 0);

  return (
    <>
      <div className="container">
        <Navbar cart={cart} />
        <div className="cartItems-title">
          <h1>Meu carrinho</h1>
        </div>
        {cart.length > 1 ? (
          <div className="cartItems">
            {cart.map((item) => (
              <div className="cartItem-container">
                <div className="cartItem-image">
                  <img
                    src={item.image}
                    alt="Imagem do produto dentro do carrinho"
                  />
                  <div className="cartItem-functions">
                    <button>
                      <IoMdAdd />
                    </button>
                    <span className="cartItem-quanty">1</span>
                    <button>
                      <IoMdRemove />
                    </button>
                  </div>
                </div>
                <div className="cartItem-description">
                  <span>{item.description}</span>
                </div>
                <div className="cartItem-price">{`R$ ${item.price}`}</div>
              </div>
            ))}
            <div className="finalize">
              <button className="payment">Comprar</button>
              <span className="total">
                Total: {`R$: ${priceTotal.toFixed(2)}`}
              </span>
            </div>
          </div>
        ) : (
          <div className="cartItem-empty">
            <FaCartPlus className="cartItem-empty-icon"/>
            <span>Carrinho vazio.</span>
          </div>
        )}
      </div>
    </>
  );
}
