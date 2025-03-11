import { createContext, useEffect, useReducer } from "react";
import featureProducts from "../components/featureProducts";

export const ProductList = createContext({
  featureProducts: [],
});

function reducer(prevState, action) {
  let newState = prevState;
  if (action.type === "SET_LOADING") {
    newState = { ...prevState, isLoading: true };
  } else if (action.type === "ELECTRONIC_PRODUCTS") {
    newState = {
      isLoading: false,
      allProductsList: action.payload.allProducts,
    };
  }

  return newState;
}

function ProductListProvider({ children }) {
  let [state, dispatch] = useReducer(reducer, {
    isLoading: false,
    allProductsList: [],
  });

  let products = [];
  let smartPhones = [];
  let mobileAccessories = [];
  let laptops = [];
  let tablets = [];

  useEffect(() => {
    dispatch({ type: "SET_LOADING" });
    fetch("https://dummyjson.com/products?limit=0")
      .then((res) => res.json())
      .then((data) => {
        smartPhones = data.products.filter((product) => {
          return product.category === "smartphones";
        });

        mobileAccessories = data.products.filter((product) => {
          return product.category === "mobile-accessories";
        });

        laptops = data.products.filter((product) => {
          return product.category === "laptops";
        });

        tablets = data.products.filter((product) => {
          return product.category === "tablets";
        });

        products = [
          ...laptops,
          ...tablets,
          ...smartPhones,
          ...mobileAccessories,
        ];

        dispatch({
          type: "ELECTRONIC_PRODUCTS",
          payload: {
            allProducts: products,
          },
        });
      });
  }, []);

  return (
    <ProductList.Provider
      value={{
        ...state,
        featureProducts: featureProducts,
      }}
    >
      {children}
    </ProductList.Provider>
  );
}

export default ProductListProvider;
