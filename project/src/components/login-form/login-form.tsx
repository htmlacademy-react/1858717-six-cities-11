import { ChangeEvent, useState, FormEvent } from 'react';
import { AuthData } from '../../types/auth-data';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { loginAction } from '../../store/api-actions';
import Spinner from '../spinner/spinner';

const formFields = {
  email: 'E-mail',
  password: 'Password'
};

type FieldProps = {
  value: string;
  error: boolean;
  errorText: string;
  regex: RegExp;
}

type FormStateProps = {
  [key: string]: FieldProps;
}

function LoginForm(): JSX.Element {
  const [formState, setFormState] = useState<FormStateProps>({
    email: {
      value: '',
      error: false,
      errorText: 'Please enter correct E-mail',
      regex: /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)/g
    },
    password: {
      value: '',
      error: false,
      errorText: 'Please enter correct password, that has at least one number and one letter',
      regex: /[a-zA-Z][0-9]|[0-9][a-zA-Z]/g
    }
  });

  const isLoading = useAppSelector((state) => state.isOffersDataLoading);
  const dispatch = useAppDispatch();

  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    const rule = formState[name].regex;

    if (value.match(rule)) {
      setFormState({
        ...formState,
        [name]: {
          ...formState[name],
          value,
          error: false
        }
      });
      return;
    }
    setFormState({
      ...formState,
      [name]: {
        ...formState[name],
        value,
        error: true
      }
    });
  };

  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    onSubmit({
      email: formState.email.value,
      password: formState.password.value
    });
  };

  return (
    <form
      className="login__form form"
      action="#"
      method="post"
      onSubmit={handleSubmit}
    >
      {Object.entries(formFields).map(([name, label]) => {
        const {error, errorText, value} = formState[name];

        return (
          <div className="login__input-wrapper form__input-wrapper" key={name}>
            <label className="visually-hidden">{label}</label>
            {error && <span style={{color: 'red', fontSize: 'small'}}> {errorText} </span>}
            <input
              className="login__input form__input"
              type={name}
              name={name}
              placeholder={label}
              value={value}
              onChange={handleInputChange}
              required
            />
          </div>
        );})}
      <button
        className="login__submit form__submit button"
        type="submit"
        disabled={!formState.email.value || formState.email.error || !formState.password.value || formState.password.error}
      >
        {isLoading ? <Spinner size="small" /> : 'Sign in'}
      </button>
    </form>
  );
}

export default LoginForm;
