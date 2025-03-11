import { useContext } from "react";
import { ProductList } from "../store/Product-store";
import { useParams } from "react-router-dom";
import SingleProduct from "../components/SingleProduct";

function ProductDetails() {
  const { allProductsList } = useContext(ProductList);
  const { id } = useParams();

  return (
    <>
      {allProductsList.map((product) => {
        if (product.id === parseInt(id)) {
          // console.log(product);
          return <SingleProduct key={product.id} aboutProduct={product} />;
        }
      })}
    </>
  );
}

export default ProductDetails;
