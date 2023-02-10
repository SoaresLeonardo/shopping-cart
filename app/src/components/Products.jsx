import "./ProductsStyles.css";
import img from "../assets/img/tenis.png";

export default function Products() {
  return (
    <>
      <div className="products-container">
        <div className="product-card">
          <img src={img} alt="tenis" />
          <span className="description-product">descrição do produto</span>
          <span className="price-product">R$ 190,90</span>
          <button>Adicionar ao carrinho</button>
        </div>
        <div className="product-card">
          <img src={img} alt="tenis" />
          <span>descrição do produto</span>
          <span className="price-product">R$ 190,90</span>
          <button>Adicionar ao carrinho</button>
        </div>
        <div className="product-card">
          <img src={img} alt="tenis" />
          <span>descrição do produto</span>
          <span className="price-product">R$ 190,90</span>
          <button>Adicionar ao carrinho</button>
        </div>
        <div className="product-card">
          <img src={img} alt="tenis" />
          <span>descrição do produto</span>
          <span className="price-product">R$ 190,90</span>
          <button>Adicionar ao carrinho</button>
        </div>
      </div>
    </>
  );
}
