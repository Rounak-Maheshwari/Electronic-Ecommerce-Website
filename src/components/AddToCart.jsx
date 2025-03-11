import { useContext, useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import CartProduct from "./CartProduct";
import { CartList } from "../store/Cart-store";
import ProductDetails from "../pages/ProductDetails";

function AddToCart({ stock, aboutProduct }) {
  let { addToCartBtn } = useContext(CartList);
  let navigate = useNavigate();
  let [quantity, setQuantity] = useState(1);
  function handleIncrease() {
    quantity < stock ? setQuantity(quantity + 1) : setQuantity(stock);
  }

  function handleDecrease() {
    quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1);
  }

  return (
    <div className="quantity-container">
      <span>
        <button onClick={handleDecrease} className="quantity-btn">
          <FaMinus />
        </button>
      </span>
      <span className="display-quantity">{quantity}</span>
      <span>
        <button onClick={handleIncrease} className="quantity-btn">
          <FaPlus />
        </button>
      </span>
      <button
        className="add-to-cart-btn"
        onClick={() => {
          // console.log("quantity = " + quantity);
          addToCartBtn({ ...aboutProduct, quantity });
          navigate("/cart");
        }}
      >
        ADD TO CART
      </button>
    </div>
  );
}

export default AddToCart;
