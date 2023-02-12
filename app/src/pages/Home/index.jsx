import data from "../../../backend/Data";
import "./style.css";
import Navbar from "../../components/Navbar";
import Products from "../../components/Products";

export default function Home({ addToCart, productItems }) {
  return (
    <>
      <div className="container">
        <Navbar />
        <Products productItems={productItems} addToCart={addToCart} />
      </div>
    </>
  );
}
