import PageNavigation from "./PageNavigation";
import ProductImages from "./ProductImages";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { BsCash } from "react-icons/bs";
import AddToCart from "./AddToCart";
import Star from "./Star";

function SingleProduct({ aboutProduct }) {
  let {
    id,
    title,
    brand,
    price,
    description,
    category,
    availabilityStatus,
    rating,
    reviews,
    images,
    discountPercentage,
    stock,
  } = aboutProduct;

  price = price * 84;

  return (
    <div>
      <PageNavigation title={title} />
      <div className="product-detail-container">
        <div className="product-images-container">
          <ProductImages images={images}></ProductImages>
        </div>
        <div className="product-data">
          <h2>{title}</h2>
          <Star rating={rating} reviews={reviews} />
          {/* <p>{rating}</p>
          <p>{reviews.length} reviews</p> */}
          <div className="product-data-price">
            <p className="price">
              <span>MRP:</span> <span className="mrp-price">₹{price}</span>{" "}
            </p>
            <p className="price deal-price">
              Deal of the Day: {"₹"}
              {Math.round(price - (price * discountPercentage) / 100)}
              <span> ({discountPercentage}% off)</span>
            </p>
            <p className="product-description">{description}</p>
            <div className="after-services">
              <div className="free-delivary">
                <TbTruckDelivery className="free-delivary-icon icon" />
                <p className="service-name">Free Delivary</p>
              </div>
              <div className="easy-replacement">
                <TbReplace className="replacement-icon icon" />
                <p className="service-name">7 Days Replacement</p>
              </div>
              <div className="warranty">
                <MdSecurity className="free-delivary-icon icon" />
                <p className="service-name">
                  {aboutProduct.category === "smartphones" ||
                  aboutProduct.category === "mobile-accessories"
                    ? "1 year warrenty"
                    : "2 years warrenty"}
                </p>
              </div>
              <div className="cash-on-deliver">
                <BsCash className="cod-icon icon" />
                <p className="service-name">Cash on Delivary</p>
              </div>
            </div>
            <div className="product-data-info">
              <p>
                Available:{" "}
                <span className="info">
                  {stock ? "In Stock" : "Not Available"}
                </span>
              </p>
              <p>
                ID: <span className="info">{id}</span>
              </p>
              <p>
                Brand: <span className="info">{brand}</span>
              </p>
            </div>
            <hr className="line" />
          </div>
          <AddToCart stock={stock} aboutProduct={aboutProduct}></AddToCart>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
