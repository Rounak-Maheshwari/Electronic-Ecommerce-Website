import { useContext } from "react";
import { ProductList } from "../store/Product-store";
import LoadingSpinner from "./LoadingSpinner";
import Product from "./Product";

function Features() {
  let { isLoading, featureProducts, smartPhones } = useContext(ProductList);
  if (isLoading) {
    return <LoadingSpinner />;
  }
  return (
    <>
      <div className="feature-section">
        <div className="feature-heading">Featured Products</div>
        <div className="feature-products">
          {featureProducts.map((product) => {
            return <Product key={product.id} productDetails={product} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Features;
