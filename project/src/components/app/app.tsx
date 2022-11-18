import Main from '../../pages/main/main';
import Favorites from '../../pages/favorites/favorites';
import Login from '../../pages/login/login';
import Room from '../../pages/room/room';
import PageNotFound from '../../pages/page-404/page-404';
import { AppRoute, AuthorizationStatus } from '../../const';
import { Review } from '../../types/reviews';
import PrivateRoute from '../private-route/private-route';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import {useAppSelector} from '../../hooks';
import LoadingScreen from '../../pages/loading-screen/loading-screen';

type AppScreenProps = {
  reviews: Review[];
};

function App({reviews}: AppScreenProps): JSX.Element {
  const isOffersDataLoading = useAppSelector((state) => state.isOffersDataLoading);

  if(isOffersDataLoading) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <HelmetProvider>
      <BrowserRouter>
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
                <PrivateRoute
                  authorizationStatus={AuthorizationStatus.Auth}
                >
                  <Favorites />
                </PrivateRoute>
              }
            />
            <Route path={AppRoute.Offer} element={<Room reviews={reviews}/>} />
          </Route>
          <Route path={AppRoute.NotFound} element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
