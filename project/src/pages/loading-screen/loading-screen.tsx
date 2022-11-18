import styles from './loading-screen.module.css';

function LoadingScreen(): JSX.Element {
  return (
    <div className={styles.container}>
      <p className={styles.loading}>Loading...</p>
    </div>
  );
}

export default LoadingScreen;
