import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import data from "./components/backend/Data";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound/NotFound";
const { productItems } = data;

export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (data) => {
    const ProductExist = cart.find((item) => item.id === data.id);
    if (ProductExist) {
      setCart(
        cart.map((item) =>
          item.id === data.id
            ? { ...ProductExist, quantity: ProductExist.quantity + 1 }
            : item
        )
      );
      // console.log(ProductExist);
    } else {
      setCart([...cart, { ...data, quantity: 1 }]);
    }
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                addToCart={addToCart}
                productItems={productItems}
                cart={cart}
              />
            }
          />
          <Route path="/cart" element={<Cart cart={cart} addToCart={addToCart} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
