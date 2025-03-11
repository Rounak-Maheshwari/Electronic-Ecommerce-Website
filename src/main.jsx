import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import AppContextProvider from "./store/Product-store.jsx";
import CartListProvider from "./store/Cart-store.jsx";
import FilterContextProvider from "./store/Filter-store.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppContextProvider>
      <FilterContextProvider>
        <CartListProvider>
          <App />
        </CartListProvider>
      </FilterContextProvider>
    </AppContextProvider>
  </StrictMode>
);
