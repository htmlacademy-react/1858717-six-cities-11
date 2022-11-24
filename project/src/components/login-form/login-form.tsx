import { ChangeEvent, useState, FormEvent } from 'react';
import cn from 'classnames';
import { AuthData } from '../../types/auth-data';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { loginAction } from '../../store/api-actions';
import Spinner from '../spinner/spinner';
import styles from './login-form.module.css';

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
      regex: /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)/
    },
    password: {
      value: '',
      error: false,
      errorText: 'Please enter correct password, that has at least one number and one letter',
      regex: /[a-zA-Z][0-9]|[0-9][a-zA-Z]/
    }
  });

  const isLoading = useAppSelector((state) => state.isLoginDataLoading);
  const dispatch = useAppDispatch();

  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    const rule = formState[name].regex;

    const isValidField = rule.test(value);

    setFormState({
      ...formState,
      [name]: {
        ...formState[name],
        value,
        error: !isValidField
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

  const isValidForm = Object.values(formState).reduce((acc, properties) => {
    acc = Boolean(properties.value) && !properties.error;
    return acc;
  }, false);

  return (
    <form
      className="login__form form"
      action="#"
      method="post"
      onSubmit={handleSubmit}
    >
      {Object.entries(formFields).map(([name, label]) => {
        const {error, errorText, value} = formState[name];
        const inputClass = cn('login__input form__input',
          {
            [`${styles.error}`]: error
          }
        );

        return (
          <div className="login__input-wrapper form__input-wrapper" key={name}>
            <label className="visually-hidden">{label}</label>
            {error && <span className={styles.errorText}> {errorText} </span>}
            <input
              className={inputClass}
              type={name}
              name={name}
              placeholder={label}
              value={value}
              onChange={handleInputChange}
            />
          </div>
        );
      })}
      <button
        className="login__submit form__submit button"
        type="submit"
        disabled={!isValidForm || isLoading}
      >
        {isLoading ? <Spinner size="small" /> : 'Sign in'}
      </button>
    </form>
  );
}

export default LoginForm;
