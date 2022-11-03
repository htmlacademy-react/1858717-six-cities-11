import React, { useState } from 'react';
import Rating from '../rating/rating';
import { RatingTitles } from '../../const';

function ReviewForm(): JSX.Element {
  const [formData, setFormData] = useState({
    rating: '',
    review: ''
  });

  const handleFieldChange = (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = evt.target;
    setFormData({...formData, [name]: value});
  };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">

        {Object.keys(RatingTitles).map((value) => (
          <Rating
            key={value}
            handleFieldChange={handleFieldChange}
            rating={value}
            title={RatingTitles[value]}
          />
        ))}

      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved" onChange={handleFieldChange}
        value={formData.review}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span>
          and describe your stay with at least{' '}
          <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
      </div>
    </form>
  );
}

export default ReviewForm;
