import { useNavigate } from "react-router-dom";
import bannerIcon from "../images/banner-image.png";

function Hero() {
  const navigate = useNavigate();
  return (
    <div className="hero-container">
      <div className=" flex-lg-row-reverse align-items-center hero-body">
        <div className="col-10 col-sm-8 col-lg-6">
          <img
            src={bannerIcon}
            className="d-block mx-lg-auto img-fluid"
            alt="watch-img"
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
            Discover the Latest in Electronics.
          </h1>
          <p className="lead">
            Get the best deals on smartphones, laptops, accessories, and more!
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <button
              type="button"
              className="btn-dark hero-btn"
              onClick={() => navigate("/products")}
            >
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
