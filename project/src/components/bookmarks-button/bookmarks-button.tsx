import { useAppSelector } from '../../hooks';
import { selectPostFavoriteStatus } from '../../store/favorites/selectors';

type BookmarksButtonProps = {
  isActive: false | '__bookmark-button--active';
  size: 'small' | 'big';
  page: 'place-card' | 'property';
  onClick: () => void;
}

const sizes = {
  small: {
    width: 18,
    height: 19
  },
  big: {
    width: 31,
    height: 33
  }
};

function BookmarksButton({ isActive, size, page, onClick }: BookmarksButtonProps): JSX.Element {
  const {isLoading} = useAppSelector(selectPostFavoriteStatus);
  const {width, height} = sizes[size];
  const className = isActive ? `${page}${isActive}` : '';

  return (
    <button
      className={`${page}__bookmark-button ${className} button`}
      type="button"
      onClick={onClick}
      disabled={isLoading}
    >
      <svg className="place-card__bookmark-icon" width={width} height={height}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}

export default BookmarksButton;
