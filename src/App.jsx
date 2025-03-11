import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Products from "./pages/Products.jsx";
import Cart from "./pages/Cart.jsx";
import ErrorMessage from "./pages/ErrorMessage.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import Login from "./pages/Login.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about-us",
      element: <About />,
    },
    {
      path: "/products",
      element: <Products />,
    },
    {
      path: "/contact-us",
      element: <Contact />,
    },
    {
      path: "/product-details/:id",
      element: <ProductDetails />,
    },
    {
      path: "/cart",
      element: <Cart />,
    },
    {
      path: "/log-in",
      element: <Login />,
    },
    {
      path: "*",
      element: <ErrorMessage />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />;
    </>
  );
}

export default App;
