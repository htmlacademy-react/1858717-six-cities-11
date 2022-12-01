import Main from '../../pages/main/main';
import Favorites from '../../pages/favorites/favorites';
import Login from '../../pages/login/login';
import Room from '../../pages/room/room';
import PageNotFound from '../../pages/page-404/page-404';
import { AppRoute, AuthorizationStatus, FetchStatus } from '../../const';
import { Review } from '../../types/reviews';
import PrivateRoute from '../private-route/private-route';
import { Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import {useAppSelector} from '../../hooks';
import HistoryRouter from '../history-router/history-router';
import browserHistory from '../../browser-history';
import { FullPageSpinner } from '../fullpage-spinner/fullpage-spinner';
import { getAuthorizationStatus } from '../../store/user/selectors';
import { getOffersFetchStatus } from '../../store/offers/selectors';
import ErrorScreen from '../../pages/error-screen/error-screen';

type AppScreenProps = {
  reviews: Review[];
};

function App({reviews}: AppScreenProps): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const offersFetchStatus = useAppSelector(getOffersFetchStatus);

  if(authorizationStatus === AuthorizationStatus.Unknow || offersFetchStatus === FetchStatus.Pending) {
    return (
      <FullPageSpinner size="big"/>
    );
  }

  if(offersFetchStatus === FetchStatus.Error) {
    return (
      <ErrorScreen />
    );
  }

  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route path={AppRoute.Root}>
            <Route index element={<Main />} />
            <Route
              path={AppRoute.Login}
              element={<Login />}
            />
            <Route
              path={AppRoute.Favorites}
              element={
                <PrivateRoute>
                  <Favorites />
                </PrivateRoute>
              }
            />
            <Route path={AppRoute.Offer} element={<Room reviews={reviews}/>} />
          </Route>
          <Route path={AppRoute.NotFound} element={<PageNotFound />} />
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
}

export default App;
