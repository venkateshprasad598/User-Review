import React from "react";
import people from "./data.js";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { id, name, job, image, text } = people[index];

  const increase = () => {
    let increase = index + 1;
    if (increase > people.length - 1) {
      increase = 0;
    }
    setIndex(increase);
  };
  const decrease = () => {
    let decrease = index - 1;
    if (decrease < people.length - 4) {
      decrease = 3;
    }
    setIndex(decrease);
  };

  const surprise = () => {
    let random = Math.floor(Math.random() * people.length);
    setIndex(random);
  };
  return (
    <div className="review">
      <h1 className="review__headline">Our Reviews</h1>
      <div className="review__underline"></div>

      <article className="review__content">
        <div>
          <img src={image} alt={name} className="review__img" />
        </div>
        <h3 className="review__name">{name}</h3>
        <h3 className="review__job">{job}</h3>
        <p className="review__text">{text}</p>
        <div className="review__icons">
          <FaChevronLeft className="review__icon1" onClick={decrease} />
          <FaChevronRight className="review__icon2" onClick={increase} />
        </div>
        <button className="review__button" onClick={surprise}>
          Surprise Me
        </button>
      </article>
    </div>
  );
};

export default Review;
