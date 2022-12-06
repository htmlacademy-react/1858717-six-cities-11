import React, { FormEvent, useState } from 'react';
import Rating from '../rating/rating';
import { FetchStatus, RatingTitles } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { postCommentAction } from '../../store/api-actions';
import { useParams } from 'react-router-dom';
import { getPostCommentStatus } from '../../store/comments/selectors';
import { ReviewFormData } from '../../types/reviews';
import Spinner from '../spinner/spinner';
import styles from './review-form.module.css';

function ReviewForm(): JSX.Element {
  const { id } = useParams();

  const [formData, setFormData] = useState({
    rating: '',
    comment: ''
  });

  const dispatch = useAppDispatch();
  const postStatus = useAppSelector(getPostCommentStatus);

  const handleFieldChange = (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = evt.target;
    setFormData({...formData, [name]: value});
  };

  const onSubmit = ([propertyId, commentData]: [string, ReviewFormData]) => {
    dispatch(postCommentAction([propertyId, commentData]));
  };

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (id) {
      onSubmit([
        id,
        {
          rating: Number(formData.rating),
          comment: formData.comment
        }
      ]);
    }
    formData.comment = '';
    formData.rating = '';
  };

  const isValidComment = formData.comment.length > 50 && formData.comment.length < 300;
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
          />
        ))}

      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="comment"
        placeholder="Tell how was your stay, what you like and what can be improved" onChange={handleFieldChange}
        value={formData.comment}
      >
      </textarea>

      {postStatus === FetchStatus.Error &&
        <span className={styles.errorText}> Something went wrong. Please try again later </span>}

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
          disabled={!isValidForm || postStatus === FetchStatus.Pending}
        >
          {postStatus === FetchStatus.Pending ? <Spinner size="small" /> : 'Submit'}
        </button>
      </div>
    </form>
  );
}

export default ReviewForm;
