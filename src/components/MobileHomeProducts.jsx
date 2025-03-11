import { Link } from "react-router-dom";
import iphone13 from "../images/i phone 13(white 1).jpg";
import s23Ultra from "../images/samsung s23 ultra.jpg";
import onePlus from "../images/oneplus 12R(1).jpg";

function MobileHomeProducts() {
  return (
    <div className="container mobile-produts-container">
      {/* Mobile header */}
      <div className="mobile-header">
        <h2>MOBILE PRODUCTS</h2>
        <Link to="/products" className="go-to-shop">
          <p>GO TO SHOP</p>
        </Link>
      </div>
      {/* Products to show of home page */}
      <div className="mobile-products-container">
        <div className="mobile-product">
          <div className="mobile-logo">
            <Link to={`/product/:1`}>
              <img className="phone-img" src={iphone13} alt="" />
            </Link>
          </div>
        </div>
        <div className="mobile-product">
          <div className="mobile-logo">
            <Link to={`/product/:1`}>
              <img className="phone-img" src={s23Ultra} alt="" />
            </Link>
          </div>
        </div>
        <div className="mobile-product">
          <div className="mobile-logo">
            <Link to={`/product/:1`}>
              <img className="phone-img" src={onePlus} alt="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileHomeProducts;
