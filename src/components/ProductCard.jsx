import { useNavigate } from "react-router-dom";

function ProductCard({ thumbnail, price, title, id }) {
  let navigate = useNavigate();
  price = Math.round(price * 84);
  return (
    <div
      className="product-card-container"
      onClick={() => navigate(`/product-details/${id}`)}
    >
      <div className="product-img-container">
        <img className="product-img" src={thumbnail} alt={title + " img"} />
      </div>
      <div className="product-card-body">
        <p className="product-name">{title}</p>
        <p className="product-price">₹{price}.00</p>
      </div>
    </div>
  );
}

export default ProductCard;
