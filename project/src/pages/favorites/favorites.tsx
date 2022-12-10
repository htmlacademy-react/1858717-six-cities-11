import Logo from '../../components/logo/logo';
import { Helmet } from 'react-helmet-async';
import FavoritesList from '../../components/favorites-list/favorites-list';
import Layout from '../../components/layout/layout';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchFavoritesAction } from '../../store/api-actions';
import { useEffect } from 'react';
import { getFavorites, getFavoritesFetchStatus } from '../../store/favorites/selectors';
import { FetchStatus } from '../../const';
import { FullPageSpinner } from '../../components/fullpage-spinner/fullpage-spinner';
import ErrorScreen from '../error-screen/error-screen';
import FavoritesEmptyList from '../../components/favorites-empty-list/favorites-empty-list';


function Favorites(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(()=>{
    dispatch(fetchFavoritesAction());
  }, [dispatch]);

  const fetchStatus = useAppSelector(getFavoritesFetchStatus);
  const favoriteOffers = useAppSelector(getFavorites);

  if (fetchStatus === FetchStatus.Pending) {
    return <FullPageSpinner size={'big'} />;
  }

  if (fetchStatus === FetchStatus.Error) {
    return <ErrorScreen />;
  }

  return (
    <div className="page">
      <Helmet>
        <title>6 cities|Favorites</title>
      </Helmet>

      <Layout>
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            {favoriteOffers.length === 0 ? <FavoritesEmptyList /> :
              <section className="favorites">
                <h1 className="favorites__title">Saved listing</h1>
                <FavoritesList offers={favoriteOffers}/>
              </section>}
          </div>
        </main>
        <footer className="footer container">
          <Logo type={'footer'}/>
        </footer>
      </Layout>
    </div>
  );
}

export default Favorites;
