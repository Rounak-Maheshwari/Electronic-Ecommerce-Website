import { useContext } from "react";
import { ProductList } from "../store/Product-store";
import { FilterContext } from "../store/Filter-store";

function FilterProductsSection() {
  let {
    filters,
    updateFilter,
    categoryWiseUpdate,
    companyWiseUpdate,
    clearFilter,
  } = useContext(FilterContext);
  let { text } = filters;

  return (
    <div className="filter-section-container">
      <div className="search-product">
        <input
          className="search-input"
          type="text"
          placeholder="SEARCH"
          name="text"
          onChange={updateFilter}
          value={text}
        />
        {/* <img src={searchIcon} alt="search-icon" className="search-icon" /> */}
      </div>
      <div className="category-container">
        <h4 className="category">Category</h4>
        <p
          className="list-category"
          onClick={() => {
            categoryWiseUpdate("all");
          }}
        >
          All
        </p>
        <p
          className="list-category"
          onClick={() => {
            categoryWiseUpdate("smartphones");
          }}
        >
          Mobiles
        </p>
        <p
          className="list-category"
          onClick={() => {
            categoryWiseUpdate("laptops");
          }}
        >
          Laptops
        </p>
        <p
          className="list-category"
          onClick={() => {
            categoryWiseUpdate("mobile-accessories");
          }}
        >
          Accesories
        </p>
        <p
          className="list-category"
          onClick={() => {
            categoryWiseUpdate("tablets");
          }}
        >
          Tablets
        </p>
      </div>
      <div className="company-container">
        <p className="company-label">Company</p>
        <form action="">
          <label htmlFor="company"></label>
          <select
            name="company"
            id="company"
            className="select"
            onClick={companyWiseUpdate}
          >
            <option value="All">All</option>
            <option value="Apple">Apple</option>
            <option value="Asus">Asus</option>
            <option value="Amazon">Amazon</option>
            <option value="Huawei">Huawei</option>
            <option value="Lenovo">Lenovo</option>
            <option value="Dell">Dell</option>
            <option value="Samsung">Samsung</option>
            <option value="Oppo">Oppo</option>
            <option value="Realme">Realme</option>
            <option value="Vivo">Vivo</option>
          </select>
        </form>
      </div>
      {/* <div className="price-range-container">
        <p className="price-label">Price</p>
        <p></p>
        <input type="range" name="price-range" id="price-range" />
      </div> */}
      <div className="clear-filter">
        <button className="clear-filter-btn" onClick={clearFilter}>
          CLEAR FILTERS
        </button>
      </div>
    </div>
  );
}

export default FilterProductsSection;
