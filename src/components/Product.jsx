import { Link, useNavigate } from "react-router-dom";

function Product({ productDetails }) {
  let navigate = useNavigate();
  let { id, title, price, category, thumbnail } = productDetails;

  return (
    <div
      className="card feature-card "
      style={{ width: "19rem" }}
      onClick={() => {
        navigate(`/product-details/${id}`);
      }}
    >
      <img src={thumbnail} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5>{title}</h5>
        <p className="price">Rs {price * 84}</p>
      </div>
    </div>
  );
}

export default Product;
