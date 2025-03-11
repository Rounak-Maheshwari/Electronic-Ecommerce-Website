import { SiXiaomi, SiSamsung, SiOppo, SiOneplus } from "react-icons/si";
import { FaApple } from "react-icons/fa";

function TopBrand() {
  return (
    <>
      <div className="trusted-container">
        <p className="trusted-section-heading">Top Brands</p>
        <div className="company-logos">
          <div className="apple-logo comp-logos">
            <FaApple />
          </div>
          <div className="xiaomi-logo comp-logos">
            <SiXiaomi />
          </div>
          <div className="oneplus-logo comp-logos">
            <SiOneplus />
          </div>
          <div className="samsung-logo">
            <SiSamsung />
          </div>
          <div className="pineapple-logo comp-logos">
            <SiOppo />
          </div>
        </div>
      </div>
    </>
  );
}

export default TopBrand;
