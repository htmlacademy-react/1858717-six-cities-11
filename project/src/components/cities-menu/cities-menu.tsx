import { Link } from 'react-router-dom';
import { CITIES, AppRoute } from '../../const';
import { useAppDispatch } from '../../hooks';
import { changeCity } from '../../store/action';
import cn from 'classnames';

type CitiesProps = {
  currentCity: string;
};

function CitiesMenu({currentCity}: CitiesProps):JSX.Element {
  const dispatch = useAppDispatch();

  const handleCityClick = (city: string) => {
    dispatch(changeCity({city}));
  };

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CITIES.map((city) => {
            const className = cn('locations__item-link tabs__item',
              {
                'tabs__item--active': city === currentCity
              });

            return (
              <li className="locations__item" key={city}>
                <Link
                  className={className}
                  to={AppRoute.Root}
                  onClick={() => handleCityClick(city)}
                >
                  <span>{city}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}

export default CitiesMenu;
