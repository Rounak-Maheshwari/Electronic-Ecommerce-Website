import { FaStar, FaRegStarHalfStroke } from "react-icons/fa6";
import { AiOutlineStar } from "react-icons/ai";

function Star({ rating, reviews }) {
  const maxStars = 5;

  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5 ? 1 : 0;
  const emptyStars = maxStars - fullStars - halfStar;
  return (
    <div className="star-container">
      {Array(fullStars)
        .fill()
        .map((star, index) => (
          <span key={index} className="star filled">
            <FaStar />
          </span>
        ))}
      {halfStar === 1 && (
        <span className="star half">
          {" "}
          <FaRegStarHalfStroke />
        </span>
      )}
      {Array(emptyStars)
        .fill()
        .map((star, index) => (
          <span key={index} className="star empty">
            <AiOutlineStar />
          </span>
        ))}
      <span className="reviews">({reviews.length} reviews)</span>
    </div>
  );
}

export default Star;
