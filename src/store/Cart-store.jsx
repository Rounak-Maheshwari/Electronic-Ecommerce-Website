import { createContext, useEffect, useReducer } from "react";

export const CartList = createContext({
  cartProducts: [],
  addToCartBtn: () => {},
  removeProduct: () => {},
  clearCart: () => {},
});

function cartProductsReducer(prevCartProducts, action) {
  let updatedCartProducts = prevCartProducts;
  if (action.type === "ADD_PRODUCT") {
    let productExists = false;

    updatedCartProducts.forEach((product) => {
      if (product.id === action.payload.product.id) {
        productExists = true;
      } else {
        productExists = false;
      }
    });

    if (productExists) {
      updatedCartProducts = prevCartProducts.map((product) => {
        if (product.id === action.payload.product.id) {
          return {
            ...product,
            quantity: product.quantity + action.payload.product.quantity,
          };
        }
        return product;
      });
    } else {
      updatedCartProducts = [...prevCartProducts, action.payload.product];
    }
  } else if (action.type === "DELETE_PRODUCT") {
    updatedCartProducts = prevCartProducts.filter((product) => {
      return product.id !== action.payload.productId;
    });
  } else if (action.type === "CLEAR_CART") {
    updatedCartProducts = [];
  } else if (action.type === "UPDATE_QTY") {
    updatedCartProducts = prevCartProducts.map((product) => {
      if (product.id === action.payload.id) {
        return { ...product, quantity: action.payload.quantity };
      } else {
        return product;
      }
    });
  }

  return updatedCartProducts;
}

function finalAmountReducer(prevAmount, action) {
  if (action.type === "CALCULATE_TOTAL_AMOUNT") {
    let finalPrice = 0;
    action.payload.products.forEach((product) => {
      let qty = product.quantity;
      let price = product.price * 84;
      price = Math.round(price - (price * product.discountPercentage) / 100);
      finalPrice += price * qty;
      // console.log(finalPrice);
    });
    return finalPrice;
  }
  return prevAmount;
}

function CartListProvider({ children }) {
  let [cartProducts, dispatchCartProducts] = useReducer(
    cartProductsReducer,
    []
  );

  let [finalAmount, dispatchFinalAmount] = useReducer(finalAmountReducer, 0);

  useEffect(() => {
    dispatchFinalAmount({
      type: "CALCULATE_TOTAL_AMOUNT",
      payload: { products: cartProducts },
    });
  }, [cartProducts]);

  function addToCartBtn(aboutProduct) {
    dispatchCartProducts({
      type: "ADD_PRODUCT",
      payload: {
        product: aboutProduct,
      },
    });
  }

  function removeProduct(productId) {
    dispatchCartProducts({
      type: "DELETE_PRODUCT",
      payload: {
        productId: productId,
      },
    });
  }

  function clearCart() {
    dispatchCartProducts({
      type: "CLEAR_CART",
    });
  }

  function updateQuantity(id, quantity) {
    dispatchCartProducts({ type: "UPDATE_QTY", payload: { id, quantity } });
  }

  return (
    <CartList.Provider
      value={{
        cartProducts: cartProducts,
        addToCartBtn,
        removeProduct: removeProduct,
        clearCart: clearCart,
        finalAmount: finalAmount,
        updateQuantity,
      }}
    >
      {children}
    </CartList.Provider>
  );
}

export default CartListProvider;
