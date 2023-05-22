import { useState } from 'react';

const PawsRatingInput = ({ rating, disabled, onChange }) => {
  const [activeRating, setActiveRating] = useState(rating);

  const handleMouseEnter = (number) => {
    setActiveRating(number);
  };

  const handleMouseLeave = () => {
    setActiveRating(rating);
  };

  const handleClick = (number) => {
    onChange(number);
  };



// import {useState} from 'react';

// const PawsRatingInput = ({ rating, disabled, onChange }) => {
//   const [activeRating, setActiveRating] = useState(rating);
//   const handleMouseEnter = (number) => {
//     setActiveRating(number);
//   };
//   const handleMouseLeave = () => {
//     setActiveRating(rating);
//   };
//   const handleClick = (number) => {
//     onChange(number);
//   };
  // return (


  //   <>
  //   <input
  //     type="number"
  //     disabled={disabled}
  //     value={rating}
  //     onChange={(event) => onChange(Number(event.target.value))}
  //   />
  //   <div className="rating-input">
  //       <div className={rating >= 1 ? 'filled' : 'empty'}>
  //         <i className="fa fa-paw"></i>
  //       </div>
  //       <div className={rating >= 2 ? 'filled' : 'empty'}>
  //         <i className="fa fa-paw"></i>
  //       </div>
  //       <div className={rating >= 3 ? 'filled' : 'empty'}>
  //         <i className="fa fa-paw"></i>
  //       </div>
  //       <div className={rating >= 4 ? 'filled' : 'empty'}>
  //         <i className="fa fa-paw"></i>
  //       </div>
  //       <div className={rating >= 5 ? 'filled' : 'empty'}>
  //         <i className="fa fa-paw"></i>
  //     </div>
  //   </div>
  // </>
  return (
    <div>
      <input
        type="number"
        disabled={disabled}
        value={rating}
        onChange={(event) => onChange(Number(event.target.value))}
      />
      <div className="rating-input">
        {[1, 2, 3, 4, 5].map((number) => (
          <div
            key={number}
            className={activeRating >= number ? 'filled' : 'empty'}
            onMouseEnter={() => handleMouseEnter(number)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(number)}
          >
            <i className="fa fa-paw"></i>
          </div>
        ))}
      </div>
    </div>
  );

};

export default PawsRatingInput;
