type RatingProps = {
  handleFieldChange: (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  rating: string;
  title: string | undefined;
  currentRating: string;
}

function Rating({ handleFieldChange, rating, title, currentRating }: RatingProps): JSX.Element {
  return (
    <>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        value={rating}
        id={`${rating}-stars`}
        type="radio"
        onChange={handleFieldChange}
        checked={currentRating === rating}
      />
      <label htmlFor={`${rating}-stars`} className="reviews__rating-label form__rating-label" title={title}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}

export default Rating;
