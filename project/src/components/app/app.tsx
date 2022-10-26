import StartScreen from '../../pages/start-screen/start-screen';
import Favorites from '../../pages/favorites/favorites';
import Login from '../../pages/login/login';
import Room from '../../pages/room/room';
import PageNotFound from '../../pages/page_404/page_404';
import { AppRoute, AuthorizationStatus } from '../../const';
import PrivateRoute from '../private-route/private-route';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

type AppScreenProps = {
  cardsCount: number;
};

function App({cardsCount}: AppScreenProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Root}>
            <Route index element={<StartScreen cardsCount={cardsCount} />} />
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
            <Route path={AppRoute.Offer}>
              <Route path={AppRoute.Room} element={<Room />}/>
            </Route>
          </Route>
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
