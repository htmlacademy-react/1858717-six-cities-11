import { Review } from '../../types/reviews';
import dayjs from 'dayjs';
import { MAX_RATING } from '../../const';

type ReviewItemProps = {
  review: Review;
}

function ReviewItem({ review }: ReviewItemProps): JSX.Element {
  const { user, rating } = review;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
  const commentDate = dayjs(review.date).format('MMMM YYYY');
  const ratingInPercent = (rating * 100) / MAX_RATING;

  return (
    <li className="reviews__item" key={review.id}>
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${ratingInPercent}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {review.comment}
        </p>
        <time className="reviews__time" dateTime={review.date}>{commentDate}</time>
      </div>
    </li>
  );
}

export default ReviewItem;
