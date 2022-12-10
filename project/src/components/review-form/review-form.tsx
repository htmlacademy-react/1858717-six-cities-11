import React, { FormEvent, useEffect, useState } from 'react';
import Rating from '../rating/rating';
import { RatingTitles } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { postCommentAction } from '../../store/api-actions';
import { useParams } from 'react-router-dom';
import { selectPostCommentStatus } from '../../store/comments/selectors';
import { ReviewFormData } from '../../types/reviews';
import Spinner from '../spinner/spinner';

const MIN_COMMENT_LENGTH = 50;
const MAX_COMMENT_LENGTH = 300;

function ReviewForm(): JSX.Element {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { isLoading, isSuccess } = useAppSelector(selectPostCommentStatus);

  const [formData, setFormData] = useState({
    rating: '',
    comment: ''
  });

  const clearForm = () => {
    setFormData({
      comment: '',
      rating: ''
    });
  };

  useEffect(() => {
    if (isSuccess) {
      clearForm();
    }
  }, [isSuccess]);

  const handleFieldChange = (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = evt.target;
    setFormData({...formData, [name]: value});
  };

  const onSubmit = (data: ReviewFormData) => {
    dispatch(postCommentAction(data));
  };

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (id) {
      onSubmit({
        id: Number(id),
        rating: Number(formData.rating),
        comment: formData.comment
      });
    }
  };

  const isValidComment = formData.comment.length > MIN_COMMENT_LENGTH && formData.comment.length < MAX_COMMENT_LENGTH;
  const isValidForm = isValidComment && formData.rating;

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={handleFormSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">

        {RatingTitles.map(({ value, title }) => (
          <Rating
            key={value}
            handleFieldChange={handleFieldChange}
            rating={value}
            title={title}
            currentRating={formData.rating}
            isDisabled={isLoading}
          />
        ))}

      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="comment"
        placeholder="Tell how was your stay, what you like and what can be improved" onChange={handleFieldChange}
        value={formData.comment}
        disabled={isLoading}
      >
      </textarea>

      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set {' '}
          <span className="reviews__star"> rating </span>
          and describe your stay with at least {' '}
          <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!isValidForm || isLoading}
        >
          {isLoading ? <Spinner size="small" /> : 'Submit'}
        </button>
      </div>
    </form>
  );
}

export default ReviewForm;
