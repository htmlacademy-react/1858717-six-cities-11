import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

type LogoProps = {
  type: 'footer' | 'header';
}

const sizes = {
  header: {
    width: 81,
    height: 41
  },
  footer: {
    width: 64,
    height: 33
  }
};

function Logo({ type }: LogoProps): JSX.Element {
  const { width, height } = sizes[type];

  return (
    <Link className={`${type}__logo-link`} to={AppRoute.Root}>
      <img className={`${type}__logo`} src="img/logo.svg" alt="6 cities logo" width={width} height={height} />
    </Link>
  );
}

export default Logo;
