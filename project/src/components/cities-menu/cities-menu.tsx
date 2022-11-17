import { CITIES} from '../../const';
import { useAppDispatch } from '../../hooks';
import { changeCity } from '../../store/action';
import cn from 'classnames';
import { SyntheticEvent } from 'react';

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
                <a
                  className={className}
                  href="/#"
                  onClick={(evt: SyntheticEvent) => {
                    evt.preventDefault();
                    handleCityClick(city);
                  }}
                >
                  <span>{city}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}

export default CitiesMenu;
