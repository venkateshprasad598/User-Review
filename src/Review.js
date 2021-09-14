import React from "react";
import people from "./data.js";
import { useState, useEffect } from "react";
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

  useEffect(() => {
    let slider = setTimeout(() => {
      let inc = index + 1;
      if (inc > people.length - 1) {
        inc = 0;
      }
      setIndex(inc);
    }, 2000);
    return () => clearInterval(slider);
  }, [index]);

  const surprise = () => {
    let random = Math.floor(Math.random() * people.length);
    setIndex(random);
  };
  return (
    <div className="review">
      <h1 className="review__headline">Our Reviews</h1>
      <div className="review__underline"></div>
      <div className="slider">
        <FaChevronLeft className="review__icon1" onClick={decrease} />
        <article className="review__content">
          <div>
            <img src={image} alt={name} className="review__img" />
          </div>
          <h3 className="review__name">{name}</h3>
          <h3 className="review__job">{job}</h3>
          <p className="review__text">{text}</p>
          {/* <div className="review__icons"> */}

          {/* </div> */}
          <button className="review__button" onClick={surprise}>
            Surprise Me
          </button>
        </article>
        <FaChevronRight className="review__icon2" onClick={increase} />
      </div>
    </div>
  );
};

export default Review;

//SLIDER************************************************
// import React from "react";
// import reviews from "./data.js";
// import { useState, useEffect } from "react";
// const Review = () => {
//   const [state, setState] = useState(reviews);
//   const [value, setValue] = useState(1);
//   const increase = () => {
//     let inc = value + 1;
//     if (inc > reviews.length - 1) {
//       inc = 0;
//     }
//     setValue(inc);
//   };

//   useEffect(() => {
//     let slider = setTimeout(() => {
//       let increase = value + 1;
//       if (increase > reviews.length - 1) {
//         increase = 0;
//       }
//       setValue(increase);
//     }, 2000);
//     return () => clearInterval(slider);
//   }, [value]);

//   const decrease = () => {
//     let dec = value - 1;
//     if (dec < reviews.length - 4) {
//       dec = reviews.length - 1;
//     }
//     setValue(dec);
//   };

//   // const { name, job } = state[value];
//   return (
//     <div>
//       <div className="slides">
//         {reviews.map((data, index) => {
//           const { image, name, job, text, id } = data;
//           let mySlide = "nextSlide";
//           if (index === value) {
//             mySlide = "curSlide";
//           }
//           if (index === value - 1) {
//             mySlide = "preSlide";
//           }

//           return (
//             <article key={id} className={mySlide}>
//               <img
//                 src={image}
//                 alt={name}
//                 style={{ height: "100px", objectFit: "contain" }}
//               />
//               <h1>{name}</h1>
//               <p>{job}</p>
//               <h5>{text}</h5>
//             </article>
//           );
//         })}
//       </div>
//       <button className="prev" onClick={decrease}>
//         Pre
//       </button>
//       <button className="next" onClick={increase}>
//         Next
//       </button>
//     </div>
//   );
// };

// export default Review;
