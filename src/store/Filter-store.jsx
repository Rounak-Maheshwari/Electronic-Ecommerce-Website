import { createContext, useContext, useEffect, useReducer } from "react";
import { ProductList } from "./Product-store";

export const FilterContext = createContext({
  filterProducts: [],
  allProducts: [],
  sorting: () => {},
  updateFilter: () => {},
  categoryWiseUpdate: () => {},
  companyWiseUpdate: () => {},
  clearFilter: () => {},
});

function reducer(state, action) {
  let newState = state;
  if (action.type === "LOAD_FILTER_PRODUCTS") {
    newState = {
      ...state,
      filterProducts: [...action.payload],
      allProducts: [...action.payload],
    };
  } else if (action.type === "GET_SORT_VALUE") {
    let userSortValue = document.getElementById("sort");
    let sortedValue = userSortValue.options[userSortValue.selectedIndex].value;
    // console.log(sortedValue);
    newState = { ...state, sortingValue: sortedValue };
  } else if (action.type === "SORTING_PRODUCTS") {
    let newSortData;
    let tempSortProducts = [...action.payload];

    if (state.sortingValue === "lowest") {
      const sortingProducts = (a, b) => {
        return a.price - b.price;
      };
      newSortData = tempSortProducts.sort(sortingProducts);
    } else if (state.sortingValue === "highest") {
      const sortingProducts = (a, b) => {
        return b.price - a.price;
      };
      newSortData = tempSortProducts.sort(sortingProducts);
    } else if (state.sortingValue === "a-z") {
      newSortData = tempSortProducts.sort((a, b) => {
        return a.title.localeCompare(b.title);
      });
    } else if (state.sortingValue === "z-a") {
      newSortData = tempSortProducts.sort((a, b) => {
        return b.title.localeCompare(a.title);
      });
    }
    newState = { ...state, filterProducts: newSortData };
  } else if (action.type === "UPDATE_FILTER") {
    const { name, value } = action.payload;

    newState = {
      ...state,
      filters: {
        ...state.filters,
        [name]: value,
      },
    };
  } else if (action.type === "FILTER_PRODUCTS") {
    let { allProducts } = state;
    let tempFilterProducts = [...allProducts];

    let { text } = state.filters;

    if (text) {
      tempFilterProducts = tempFilterProducts.filter((product) => {
        return product.title.toLowerCase().includes(text);
      });
    }

    newState = {
      ...state,
      filterProducts: tempFilterProducts,
    };
  } else if (action.type === "CATEGORY") {
    let tempFilterProducts = [...action.payload.allProductsList];
    if (action.payload.category != "all") {
      tempFilterProducts = tempFilterProducts.filter((product) => {
        return product.category === action.payload.category;
      });
    }
    newState = {
      ...state,
      filterProducts: tempFilterProducts,
    };
  } else if (action.type === "COMPANY") {
    let companyValue = document.getElementById("company");
    let company = companyValue.options[companyValue.selectedIndex].value;

    let tempSortProducts = [...action.payload.allProductsList];
    if (company !== "All") {
      tempSortProducts = tempSortProducts.filter((product) => {
        return product.brand === company;
      });
    }
    newState = { ...state, filterProducts: tempSortProducts };
  } else if (action.type === "CLEAR_FILTER") {
    newState = {
      filterProducts: [...action.payload],
      allProducts: [...action.payload],
      sortingValue: "lowest",
      filters: {
        text: "",
      },
    };
  }

  return newState;
}

function FilterContextProvider({ children }) {
  let { allProductsList } = useContext(ProductList);

  const [state, dispatch] = useReducer(reducer, {
    filterProducts: [],
    allProducts: [],
    sortingValue: "lowest",
    filters: {
      text: "",
    },
  });

  useEffect(() => {
    dispatch({
      type: "LOAD_FILTER_PRODUCTS",
      payload: allProductsList,
    });
  }, [allProductsList]);

  function sorting() {
    dispatch({
      type: "GET_SORT_VALUE",
    });
  }

  useEffect(() => {
    dispatch({
      type: "SORTING_PRODUCTS",
      payload: allProductsList,
    });
  }, [state.sortingValue]);

  useEffect(() => {
    dispatch({
      type: "FILTER_PRODUCTS",
    });
  }, [state.filters]);

  function updateFilter(event) {
    let { name, value } = event.target;

    return dispatch({
      type: "UPDATE_FILTER",
      payload: {
        name,
        value,
      },
    });
  }

  function categoryWiseUpdate(category) {
    dispatch({
      type: "CATEGORY",
      payload: {
        category: category,
        allProductsList: allProductsList,
      },
    });
  }

  function companyWiseUpdate() {
    dispatch({
      type: "COMPANY",
      payload: {
        allProductsList,
      },
    });
  }

  function clearFilter() {
    dispatch({
      type: "CLEAR_FILTER",
      payload: allProductsList,
    });
  }

  return (
    <FilterContext.Provider
      value={{
        ...state,
        sorting: sorting,
        updateFilter: updateFilter,
        categoryWiseUpdate: categoryWiseUpdate,
        companyWiseUpdate: companyWiseUpdate,
        clearFilter: clearFilter,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}

export default FilterContextProvider;
