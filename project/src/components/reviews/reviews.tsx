import ReviewList from '../review-list/review-list';
import ReviewForm from '../review-form/review-form';
import { useAppSelector } from '../../hooks';
import { selectCommentsCount} from '../../store/comments/selectors';
import { getAuthorizationStatus } from '../../store/user/selectors';
import { AuthorizationStatus } from '../../const';

function Reviews(): JSX.Element {
  const reviewsCount = useAppSelector(selectCommentsCount);
  const authStatus = useAppSelector(getAuthorizationStatus);

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviewsCount}</span></h2>
      <ReviewList />
      {authStatus === AuthorizationStatus.Auth && <ReviewForm />}
    </section>
  );
}

export default Reviews;
