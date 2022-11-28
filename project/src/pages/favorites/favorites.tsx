import Logo from '../../components/logo/logo';
import { Helmet } from 'react-helmet-async';
import FavoritesList from '../../components/favorites-list/favorites-list';
import Layout from '../../components/layout/layout';


function Favorites(): JSX.Element {

  return (
    <div className="page">
      <Helmet>
        <title>6 cities|Favorites</title>
      </Helmet>

      <Layout>
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <FavoritesList />
            </section>
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
