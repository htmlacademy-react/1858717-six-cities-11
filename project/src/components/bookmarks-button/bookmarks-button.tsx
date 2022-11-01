type BookmarksButtonProps = {
  className: '' | 'place-card__bookmark-button--active';
  size: 'small' | 'big';
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

function BookmarksButton({className, size}: BookmarksButtonProps): JSX.Element {
  const {width, height} = sizes[size];

  return (
    <button className={`place-card__bookmark-button ${className} button`} type="button">
      <svg className="place-card__bookmark-icon" width={width} height={height}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}

export default BookmarksButton;
