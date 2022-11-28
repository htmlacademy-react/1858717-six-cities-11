import { useAppDispatch } from '../../hooks';
import { fetchOffersAction } from '../../store/api-actions';
import styles from './error-screen.module.css';

export default function ErrorScreen(): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <div className={styles.container}>
      <p className={styles.errorText}> Не удалось загрузить предложения аренды :( </p>
      <button className={styles.replay}
        onClick={() => {
          dispatch(fetchOffersAction());
        }}
      >
        Попробовать еще раз
      </button>
    </div>
  );
}
