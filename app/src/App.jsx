import Header from "./components/Header";
import './App.css'
export default function App() {
  return (
    <>
      <div className="container">
        <Header />
        <div className="products-container">
          <div className="product-card"></div>
        </div>
      </div>
    </>
  );
}
