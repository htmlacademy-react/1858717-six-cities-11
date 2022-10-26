import Logo from '../../components/logo/logo';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

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
      <section style={{ margin: '10%'}}>
        <h1 style={{
          borderLeftStyle: 'solid',
          borderWidth: '5px',
          borderColor: '#366CB6',
          marginBottom: '5%',
          padding: '15px'
        }}
        >
          404 Страница не найдена
        </h1>
        <Link to="/" style={{color: '#366CB6'}}>
          Вернуться на главную страницу
        </Link>
      </section>
    </>
  );
}

export default PageNotFound;

