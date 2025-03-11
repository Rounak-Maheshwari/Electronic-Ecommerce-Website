import icon from "../images/fg-logo.jpg";
import { Link } from "react-router-dom";
import { CgMenu, CgClose } from "react-icons/cg";
import { useContext } from "react";
import { CartList } from "../store/Cart-store";

function Header() {
  let { cartProducts } = useContext(CartList);
  let totalItemsInCart = 0;
  cartProducts.map((product) => {
    totalItemsInCart += product.quantity;
  });
  return (
    <div className="">
      <header className="d-flex flex-wrap justify-content-center py-3 border-bottom">
        <Link
          to="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          <img
            src={icon}
            alt="fg-logo"
            className="bi me-2 logo-icon"
            width="50"
            height="42"
          />
          <span className="fs-4 logo-name">Forever Green</span>
        </Link>

        <ul className="nav nav-pills header-section">
          <li className="nav-item">
            <Link to="/" className="nav-link " aria-current="page">
              HOME
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact-us" className="nav-link">
              CONTACT US
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about-us" className="nav-link">
              ABOUT US
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/products" className="nav-link">
              PRODUCTS
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/cart" className="nav-link position-relative">
              <i
                className="astra-icon ast-icon-shopping-bag "
                data-cart-total="0"
              >
                <span className="ast-icon icon-bag ">
                  <svg
                    className="shopping-cart"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    version="1.1"
                    id="ast-bag-icon-svg"
                    x="0px"
                    y="0px"
                    width="100"
                    height="100"
                    viewBox="826 826 140 140"
                    enableBackground="new 826 826 140 140"
                    xmlSpace="preserve"
                  >
                    <path d="M960.758,934.509l2.632,23.541c0.15,1.403-0.25,2.657-1.203,3.761c-0.953,1.053-2.156,1.579-3.61,1.579H833.424  c-1.454,0-2.657-0.526-3.61-1.579c-0.952-1.104-1.354-2.357-1.203-3.761l2.632-23.541H960.758z M953.763,871.405l6.468,58.29H831.77  l6.468-58.29c0.15-1.203,0.677-2.218,1.58-3.045c0.903-0.827,1.981-1.241,3.234-1.241h19.254v9.627c0,2.658,0.94,4.927,2.82,6.807  s4.149,2.82,6.807,2.82c2.658,0,4.926-0.94,6.807-2.82s2.821-4.149,2.821-6.807v-9.627h28.882v9.627  c0,2.658,0.939,4.927,2.819,6.807c1.881,1.88,4.149,2.82,6.807,2.82s4.927-0.94,6.808-2.82c1.879-1.88,2.82-4.149,2.82-6.807v-9.627  h19.253c1.255,0,2.332,0.414,3.235,1.241C953.086,869.187,953.612,870.202,953.763,871.405z M924.881,857.492v19.254  c0,1.304-0.476,2.432-1.429,3.385s-2.08,1.429-3.385,1.429c-1.303,0-2.432-0.477-3.384-1.429c-0.953-0.953-1.43-2.081-1.43-3.385  v-19.254c0-5.315-1.881-9.853-5.641-13.613c-3.76-3.761-8.298-5.641-13.613-5.641s-9.853,1.88-13.613,5.641  c-3.761,3.76-5.641,8.298-5.641,13.613v19.254c0,1.304-0.476,2.432-1.429,3.385c-0.953,0.953-2.081,1.429-3.385,1.429  c-1.303,0-2.432-0.477-3.384-1.429c-0.953-0.953-1.429-2.081-1.429-3.385v-19.254c0-7.973,2.821-14.779,8.461-20.42  c5.641-5.641,12.448-8.461,20.42-8.461c7.973,0,14.779,2.82,20.42,8.461C922.062,842.712,924.881,849.519,924.881,857.492z"></path>
                  </svg>
                </span>
              </i>
              <span className="position-absolute top-6 start-80 translate-middle badge rounded-pill count-cart-items">
                {totalItemsInCart}
                <span className="visually-hidden">unread messages</span>
              </span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/log-in" className="nav-link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-person-fill user"
                viewBox="0 0 16 16"
              >
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
              </svg>
            </Link>
          </li>
        </ul>

        <div className="mobile-navbar-btn">
          <CgMenu className="mobile-menu-btn" />
          <CgClose className="mobile-close-btn" />
        </div>
      </header>
    </div>
  );
}

export default Header;
