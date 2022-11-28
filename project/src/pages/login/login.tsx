import { useAppDispatch } from '../../hooks';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { getRandomCity } from '../../offer';
import { changeCity } from '../../store/offers-process/offers-process';
import Layout from '../../components/layout/layout';
import LoginForm from '../../components/login-form/login-form';

function Login(): JSX.Element {

  const dispatch = useAppDispatch();

  const city = getRandomCity();

  return (
    <div className="page page--gray page--login">
      <Helmet>
        <title>
          6 cities|Login
        </title>
      </Helmet>
      <Layout hasNavigation={false}>

        <main className="page__main page__main--login">
          <div className="page__login-container container">
            <section className="login">
              <h1 className="login__title">Sign in</h1>
              <LoginForm />
            </section>
            <section className="locations locations--login locations--current">
              <div className="locations__item">
                <Link
                  className="locations__item-link"
                  to={AppRoute.Root}
                  onClick={() => {
                    dispatch(changeCity({city}));
                  }}
                >
                  <span>{city}</span>
                </Link>
              </div>
            </section>
          </div>
        </main>
      </Layout>
    </div>
  );
}

export default Login;
