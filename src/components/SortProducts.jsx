import { RiLayoutGridFill } from "react-icons/ri";
import { FaListUl } from "react-icons/fa";
import FilterByPrice from "./FilterByPrice";
import { useContext } from "react";
import { FilterContext } from "../store/Filter-store";

function SortProducts({ setGridView, gridView }) {
  let { filterProducts } = useContext(FilterContext);
  function handleGridBtn() {
    setGridView(true);
  }
  function handleListBtn() {
    setGridView(false);
  }

  return (
    <>
      <div className="sort-container">
        <div className="view-display">
          <button
            className={
              gridView ? "active grid-btn sort-btn" : "grid-btn sort-btn"
            }
            onClick={handleGridBtn}
          >
            <RiLayoutGridFill />
          </button>

          <button
            className={
              gridView === false
                ? "active grid-btn sort-btn"
                : "grid-btn sort-btn"
            }
            onClick={handleListBtn}
          >
            <FaListUl />
          </button>
        </div>
        <div className="display-noof-products">
          <p>{filterProducts.length} total products</p>
        </div>
        <div className="price-dropdown">
          <FilterByPrice />
        </div>
      </div>
    </>
  );
}

export default SortProducts;
