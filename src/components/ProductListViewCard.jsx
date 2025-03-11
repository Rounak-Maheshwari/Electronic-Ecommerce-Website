import { useNavigate } from "react-router-dom";

function ProductListViewCard({ thumbnail, price, title, description, id }) {
  let navigate = useNavigate();
  price = Math.round(price * 84);

  return (
    <div className="product-container-list">
      <div className="thumbnail-logo">
        <img
          className="product-image-thumbnail"
          src={thumbnail}
          alt={title + "-image"}
          onClick={() => navigate(`/product-details/${id}`)}
        />
      </div>
      <div className="product-short-info">
        <h5 className="product-title">{title}</h5>
        <p className="product-price">₹ {price}.00</p>
        <p className="product-description">{description}</p>
        <button
          className="read-more-btn"
          onClick={() => navigate(`/product-details/${id}`)}
        >
          Read More
        </button>
      </div>
    </div>
  );
}

export default ProductListViewCard;
