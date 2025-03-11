import { useContext, useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { CartList } from "../store/Cart-store";
import CartProduct from "../components/CartProduct";
import { useNavigate } from "react-router-dom";

function Cart() {
  let navigate = useNavigate();
  let { cartProducts, clearCart } = useContext(CartList);
  let { finalAmount } = useContext(CartList);

  return (
    <>
      <Header />
      {cartProducts.length === 0 && (
        <div className="empty-cart">
          <h1 className="empty-cart-message">Your cart is empty</h1>
          <button className="shop-now" onClick={() => navigate("/products")}>
            Shop Now
          </button>
        </div>
      )}

      {cartProducts.length != 0 && (
        <div className="cart-container ">
          <div className="item-display grid-container">
            <p className="item grid-item">ITEM</p>
            <p className="price-after-discount grid-item">PRICE</p>
            <p className="quantity grid-item">QUANTITY</p>
            <p className="subtotal grid-item">SUBTOTAL</p>
            <p className="remove grid-item">REMOVE</p>
          </div>
          <hr />
          <div className="cart-product-content">
            {cartProducts.map((product, index) => {
              // console.log(product);
              return <CartProduct key={product.id} product={product} />;
            })}
            {/* <CartProduct product={cartProducts} /> */}
          </div>
          <hr />
          <div className="continue-shopping-clear-btns">
            <button
              className="btns continue-shopping-btn"
              onClick={() => navigate("/")}
            >
              CONTINUE SHOPPING
            </button>
            <button className="btns clear-btn" onClick={() => clearCart()}>
              CLEAR CART
            </button>
          </div>

          <div className="final-calculations">
            <div className="final-subtotal">
              <p>Subtotal </p>
              <p>{finalAmount}.00</p>
            </div>
            <div className="shipping-charge">
              <p>Shipping Fee</p>
              <p>500.00</p>
            </div>
            <hr />
            <div className="order-total">
              <p>Order Total</p>
              <p>{finalAmount + 500}.00</p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}

export default Cart;
