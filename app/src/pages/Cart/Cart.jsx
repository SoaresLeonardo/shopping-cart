import Navbar from "../../components/Navbar";
import "./styles.css";
import { IoMdRemove, IoMdAdd } from "react-icons/io";
import { AiFillDelete } from "react-icons/ai";

export default function Cart({ cart }) {
  return (
    <>
      <div className="container">
        <Navbar cart={cart} />
        <div className="my-cart">
          <h2>Meu carrinho</h2>
          <span>{`Atualmente ${cart.length} item no carrinho`}</span>
        </div>
        <div className="cartItems-container">
          {cart.map((item) => (
            <div className="cartItem">
              <div className="cartItem-image">
                <img src={item.image} alt="Product image" />
              </div>
              <div className="cartItem-description">
                <span>{item.description}</span>
              </div>
              <div className="cartItem-function">
                <button className="cartItem-remove">
                  <IoMdRemove className="cartItem-remove-btn" />
                </button>
                <button className="cartItem-add">
                  <IoMdAdd className="cartItem-add-btn" />
                </button>
              </div>
              <div className="cartItem-price">
                <span>{`R$ ${item.price}`}</span>
              </div>
              <div className="cartItem-delete">
                <AiFillDelete />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
