import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import "./review.css";

function CreateStarRating({ rating, setRating }) {
  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            id="ratingbtn"
            type="button"
            key={index}
            className={index <= rating ? "on" : "off"}
            onClick={() => setRating(index)}
          >
            <span className="star">
              <i class="fa-solid fa-star fa-2xl" id="create-star"></i>
            </span>
          </button>
        );
      })}
    </div>
  );
}

export default CreateStarRating;
