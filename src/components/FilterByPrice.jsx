import { useContext } from "react";
import { FilterContext } from "../store/Filter-store";

function FilterByPrice() {
  let { sorting } = useContext(FilterContext);
  let lowestToHighest = [];
  let highestToLowest = [];
  let byAscending = [];
  let byDecending = [];

  // productsToDisplay.map((product) => {});

  return (
    <div className="sort-selection">
      <form action="">
        <label htmlFor="sort"></label>
        <select name="sort" id="sort" className="select" onClick={sorting}>
          <option value="lowest">Price(lowest)</option>
          <option value="highest">Price(highest)</option>
          <option value="a-z">Price(a-z)</option>
          <option value="z-a">Price(z-a)</option>
        </select>
      </form>
    </div>
  );
}

export default FilterByPrice;
