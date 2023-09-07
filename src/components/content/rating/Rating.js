import React, { useState, useEffect, Fragment, useRef } from 'react';
import PropTypes from 'prop-types';

import './Rating.scss';

// Can directly destructure like this
const Rating = ({ rating, totalStars, className }) => {
  const [numberOfStars, setNumberOfStars] = useState();
  /*
   * Lets you persist values between renders and lets you access DOM objects directly
   * We use it here to define the width of the colored stars combined with front-star's scss
   */
  const ratingRef = useRef();

  useEffect(() => {
    // Creates array with # items = totalStars, if 5 -> [1,2,3,4,5], we do this because we need keys
    setNumberOfStars([...Array(totalStars).keys()].map((i) => i + 1));
    let percentage;
    if (rating <= 5) {
      percentage = (rating / 5) * 100;
    } else {
      percentage = (rating / 10) * 100;
    }
    const starPercentage = `${Math.floor(percentage)}%`;
    ratingRef.current.style.width = starPercentage;
  }, [rating, totalStars]);

  return (
    <div className="star-rating">
      <div className={`back-stars ${className}`}>
        {numberOfStars &&
          numberOfStars.map((i) => (
            <Fragment key={i}>
              <i className="fa fa-star" aria-hidden="true"></i>
            </Fragment>
          ))}
        <div className={`front-stars ${className}`} ref={ratingRef}>
          {numberOfStars &&
            numberOfStars.map((i) => (
              // Lets you group elements without wrapper code, need to assign key when rendering multiple in loop
              <Fragment key={i}>
                <i className="fa fa-star" aria-hidden="true"></i>
              </Fragment>
            ))}
        </div>
      </div>
    </div>
  );
};

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
  totalStars: PropTypes.number.isRequired,
  className: PropTypes.string
};

export default Rating;
