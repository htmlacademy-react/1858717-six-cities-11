import { SpinnerDotted } from 'spinners-react';

type SpinnerProps = {
  size: 'small' | 'big';
}

const sizes = {
  small: 15,
  big: 50
};

function Spinner({size}: SpinnerProps): JSX.Element {
  return (
    <SpinnerDotted color="#366CB6" size={sizes[size]}/>
  );
}

export default Spinner;
