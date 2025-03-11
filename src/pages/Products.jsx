import Footer from "../components/Footer";
import Header from "../components/Header";
import ShowProducts from "../components/ShowProducts";
import SortProducts from "../components/SortProducts";
import FilterProductsSection from "../components/FilterProductsSection";
import { useContext, useState } from "react";
import { ProductList } from "../store/Product-store";
import { FilterContext } from "../store/Filter-store";

function Products() {
  let { filterProducts } = useContext(FilterContext);
  let [gridView, setGridView] = useState(true);

  return (
    <>
      <Header />
      <div className="products-page-container grid-element grid-filter-column">
        <div className="filter-section">
          <FilterProductsSection />
        </div>
        <div className="product-list-and-view">
          <div className="view-row">
            <SortProducts setGridView={setGridView} gridView={gridView} />
          </div>
          <div className="product-list-container">
            <ShowProducts gridView={gridView} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Products;
