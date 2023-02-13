import Navbar from "../../components/Navbar";
import './styles.css'

export default function Cart({ cart }) {
  return (
    <>
      <Navbar />
      {cart.map((item) => (
        <div>
          <img src={item.image} alt="" />
          <span>{item.description}</span>
        </div>
      ))}
    </>
  );
}
