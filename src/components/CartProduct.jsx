import { useContext, useState } from "react";
import { MdDelete } from "react-icons/md";
import { CartList } from "../store/Cart-store";

function CartProduct({ product }) {
  let { thumbnail, price, title, discountPercentage, stock, quantity, id } =
    product;
  let { removeProduct, updateQuantity } = useContext(CartList);

  price = price * 84;
  let priceAfterDiscount = Math.round(
    price - price * (discountPercentage / 100)
  );
  let [cartQtyUpdation, setCartQtyUpdation] = useState(quantity);

  function handleIncreaseBtn() {
    if (cartQtyUpdation < stock) {
      const updatedQty = cartQtyUpdation + 1;
      setCartQtyUpdation(updatedQty);
      updateQuantity(id, updatedQty);
    }
  }

  function handleDecreaseBtn() {
    if (cartQtyUpdation > 1) {
      const updatedQty = cartQtyUpdation - 1;
      setCartQtyUpdation(updatedQty);
      updateQuantity(id, updatedQty);
    }
  }

  return (
    <div className="each-product-content grid-container">
      <div className="product-thumbnail-title content grid-item">
        <img
          src={thumbnail}
          alt={title + "-img"}
          className="product-img-display"
        />
        <p>{title}</p>
      </div>
      <div className="display-price content grid-item">
        <p>₹{priceAfterDiscount}.00</p>
      </div>
      <div className="qty-amt content grid-item">
        <button className="decresebtn btns" onClick={handleDecreaseBtn}>
          -
        </button>
        <span className="display-qty">{cartQtyUpdation}</span>
        <button className="increasebtn btns" onClick={handleIncreaseBtn}>
          +
        </button>
      </div>
      <div className="sub-total content grid-item">
        <p className="subtotal">₹{priceAfterDiscount * cartQtyUpdation}.00</p>
      </div>
      <div className="grid-item content">
        <MdDelete
          className="remove-icon"
          onClick={() => {
            removeProduct(id);
          }}
        />
      </div>
    </div>
  );
}

export default CartProduct;
