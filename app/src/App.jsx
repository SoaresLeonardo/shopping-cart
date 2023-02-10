import Header from "./components/Header";
import "./App.css";
import Products from "./components/Products";
export default function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Products />
      </div>
    </>
  );
}
