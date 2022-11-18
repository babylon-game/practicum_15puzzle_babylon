import { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useErrorHandler } from 'react-error-boundary';

import Content from '../components/Content';
import Input from '../components/Input';
import Button from '../components/Button';

import useUser from '../hook/useUser';
import withUser from '../hoc/withUser';
import { useSignInMutation/* , useGetServiceIdQuery */ } from '../store';

type FormPayload = {
  login: string;
  password: string;
};

const inputs = [
  {
    name: 'login',
    label: 'Login',
    pattern: {
      value: /^[a-z0-9_-]{3,15}$/,
      message: 'Login is invalid',
    },
    required: true,
    autoComplete: 'username',
  },
  {
    name: 'password',
    label: 'Password',
    pattern: {
      value: /^[a-zA-Z0-9_-]{3,15}$/,
      message: 'Password is invalid',
    },
    required: true,
    type: 'password',
    autoComplete: 'current-password',
  },
];

function SignInPage() {
  const errorHandler = useErrorHandler();
  const navigate = useNavigate();
  const userData = useUser();
  const [signIn] = useSignInMutation();
  // const { data: oauthData } = useGetServiceIdQuery(window.location.origin);
  const { control, handleSubmit } = useForm<FormPayload>({
    defaultValues: {
      login: '',
      password: '',
    },
  });

  useEffect(() => {
    if (userData) {
      navigate('/');
    }
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      await signIn(data);
      navigate('/');
    } catch ({ status, data: { reason } }) {
      errorHandler(new Error(`${status}: ${reason}`));
    }
  });

  // const oauthHandler = () => {
  //   if (oauthData) {
  //     document.location.href = `https://oauth.yandex.ru/authorize?response_type=code&client_id=${oauthData.service_id}&redirect_uri=${window.location.origin}`;
  //   }
  // };

  return (
    <Content heading="Sign In" className="h-[calc(100vh_-_128px)] w-full flex">
      <div className="rounded-3xl bg-gray-100 w-[445px] p-8 m-auto">
        <h2 className="text-center">Sign in to your account</h2>
        <form onSubmit={onSubmit} className="grid">
          {inputs.map((input) => (
            <Controller
              key={input.name}
              name={input.name as keyof FormPayload}
              rules={{
                pattern: input.pattern,
                required: input.required,
              }}
              control={control}
              render={({ field, fieldState }) => (
                <Input
                  {...field}
                  {...input}
                  errorText={fieldState.error?.message}
                />
              )}
            />
          ))}
          <Button
            variant="filled"
            color="green"
            className="mt-4 mb-16"
          >
            <span>Sign In</span>
          </Button>
        </form>

        {/* <Button variant="outline" onClick={oauthHandler}>
          <span>Sign In with Yandex</span>
        </Button> */}
      </div>
    </Content>
  );
}

export default withUser(SignInPage, false);
