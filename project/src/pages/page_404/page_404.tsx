import Logo from '../../components/logo/logo';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import styles from './page_404.module.css';
import { AppRoute } from '../../const';

function PageNotFound(): JSX.Element {
  return (
    <>
      <Helmet>
        <title>
          6 cities|Not Found
        </title>
      </Helmet>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
          </div>
        </div>
      </header>
      <section className={styles.container}>
        <h1 className={styles.error}>
          404 Страница не найдена
        </h1>
        <Link to={AppRoute.Root} className={styles.back}>
          Вернуться на главную страницу
        </Link>
      </section>
    </>
  );
}

export default PageNotFound;

