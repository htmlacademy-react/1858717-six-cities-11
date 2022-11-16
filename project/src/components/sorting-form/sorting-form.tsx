import { useAppDispatch, useAppSelector } from '../../hooks';
import { SortType } from '../../const';
import { changeSortType } from '../../store/action';
import { useState, useRef } from 'react';
import { useOnClickOutside } from 'usehooks-ts';
import cn from 'classnames';

function SortingForm(): JSX.Element {
  const [isOptionsOpen, setOptionsView] = useState<boolean>(false);
  const ref = useRef(null);

  const dispatch = useAppDispatch();
  const currentSortType = useAppSelector((state) => state.sortType);

  const closeOptions = () => {
    if (isOptionsOpen) {
      setOptionsView(false);
    }
  };

  const handleSortingClick = (sortType: SortType) => {
    dispatch(changeSortType({sortType}));
    closeOptions();
  };

  const handleOptionsClick = () => {
    if (!isOptionsOpen) {
      setOptionsView(true);
      return;
    }
    closeOptions();
  };

  useOnClickOutside(ref, closeOptions);

  const optionsClassName = cn('places__options places__options--custom',
    {
      'places__options--opened': isOptionsOpen
    });

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={()=> {handleOptionsClick();}}
      >
        {currentSortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={optionsClassName} ref={ref}>
        {Object.values(SortType).map((value: SortType) => {
          const className = cn('places__option',
            {
              'places__option--active': value === currentSortType
            });

          return (
            <li
              className={className}
              tabIndex={0}
              onClick={() => {handleSortingClick(value);}}
              key={value}
            >
              {value}
            </li>
          );
        })}
      </ul>
    </form>
  );
}

export default SortingForm;
