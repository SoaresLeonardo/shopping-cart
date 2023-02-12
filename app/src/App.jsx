import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import data from "../backend/Data";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
const { productItems } = data;

export default function App() {
  const [cart, setCart] = useState([]);
  const addToCart = (data) => {
    setCart([...cart, data]);
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home addToCart={addToCart} productItems={productItems} />}
          />
          <Route path="/cart" element={<Cart cart={cart} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
