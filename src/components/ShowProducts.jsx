import { useContext } from "react";
import ProductCard from "./ProductCard";
import ProductListViewCard from "./ProductListViewCard";
import { ProductList } from "../store/Product-store";
import { FilterContext } from "../store/Filter-store";

function ShowProducts({ gridView }) {
  let { filterProducts } = useContext(FilterContext);
  return (
    <>
      {filterProducts.map((product) => {
        return gridView ? (
          <ProductCard
            key={product.id}
            thumbnail={product.thumbnail}
            price={product.price}
            title={product.title}
            id={product.id}
          />
        ) : (
          <ProductListViewCard
            thumbnail={product.thumbnail}
            price={product.price}
            title={product.title}
            description={product.description}
            key={product.id}
            id={product.id}
          />
        );
      })}
    </>
  );
}

export default ShowProducts;
