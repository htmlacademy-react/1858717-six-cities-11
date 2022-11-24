import { SpinnerDotted } from 'spinners-react';
import styles from './fullpage-spinner.module.css';

type SpinnerProps = {
  size: 'small' | 'big';
}

const sizes = {
  small: 15,
  big: 50
};

function FullPageSpinner({size}: SpinnerProps): JSX.Element {
  return (
    <div className={styles.container}>
      <SpinnerDotted color="#366CB6" size={sizes[size]}/>
    </div>
  );
}

export { FullPageSpinner };
