import { Review } from '../../types/reviews';
import ReviewItem from '../review-item/review-item';
import dayjs from 'dayjs';

type ReviewListProps = {
  reviews: Review[];
}

function ReviewList({reviews}: ReviewListProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {reviews.map((review) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        const commentDate = dayjs(review.date).format('MMMM YYYY');

        return (
          <ReviewItem review={review} commentDate={commentDate} key={review.id}/>
        );})}
    </ul>
  );
}

export default ReviewList;
