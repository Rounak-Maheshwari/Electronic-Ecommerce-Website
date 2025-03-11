import { Link } from "react-router-dom";

function PageNavigation({ title }) {
  return (
    <div className="page-navigation">
      <Link to="/">
        <span className="home-link">Home</span>
      </Link>
      /{title}
    </div>
  );
}

export default PageNavigation;
