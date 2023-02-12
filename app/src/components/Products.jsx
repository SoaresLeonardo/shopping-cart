import { AiOutlineShoppingCart } from "react-icons/ai";

export default function Products({ productItems, addToCart }) {
  return (
    <>
      <div className="products-container">
        {productItems.map((productItem) => (
          <div key={productItem.id} className="product-card">
            <div>
              <img src={productItem.image} alt="Product item" />
            </div>
            <div>
              <span>{productItem.description}</span>
            </div>
            <div>
              <span className="price-product">{`R$ ${productItem.price}`}</span>
            </div>
            <div>
              <button onClick={() => addToCart(productItem)}>
                Adicionar ao carrinho{" "}
                <AiOutlineShoppingCart size={17} className="cart-icon" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
