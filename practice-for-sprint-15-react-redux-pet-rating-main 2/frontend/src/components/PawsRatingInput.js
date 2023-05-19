const PawsRatingInput = ({ rating, disabled, onChange }) => {

  return (


    <div>
    <input
      type="number"
      disabled={disabled}
      value={rating}
      onChange={onChange}
    />
    <div className="rating-input">
        <div className={rating >= 1 ? 'filled' : 'empty'}>
          <i className="fa fa-paw"></i>
        </div>
        <div className={rating >= 2 ? 'filled' : 'empty'}>
          <i className="fa fa-paw"></i>
        </div>
        <div className={rating >= 3 ? 'filled' : 'empty'}>
          <i className="fa fa-paw"></i>
        </div>
        <div className={rating >= 4 ? 'filled' : 'empty'}>
          <i className="fa fa-paw"></i>
        </div>
        <div className={rating >= 5 ? 'filled' : 'empty'}>
          <i className="fa fa-paw"></i>
      </div>
    </div>
  </div>

  );

};

export default PawsRatingInput;
