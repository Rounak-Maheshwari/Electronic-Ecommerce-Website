import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { useNavigate } from "react-router-dom";

function ErrorMessage() {
  let navigate = useNavigate();
  return (
    <>
      <Header />
      <div className="error-container">
        <div>
          <h2 className="error-code">404</h2>
          <h3 className="error-title">UH OH! You're lost.</h3>
          <p className="error-message">
            The page you are looking for does not exist. But you can click the
            button below to go to homepage
          </p>
          <button
            className="go-to-home-btn"
            onClick={() => {
              navigate("/");
            }}
          >
            {" "}
            Go Back to Home{" "}
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ErrorMessage;
