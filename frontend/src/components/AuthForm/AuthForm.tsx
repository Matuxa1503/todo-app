import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { authUser } from '../../firebase/authUser';

interface IFormInput {
  email: string;
  password: string;
}

export const AuthForm = () => {
  const [isRegister, setIsRegister] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => await authUser(isRegister, data.email, data.password);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Email</label>
          <input type="text" {...register('email', { required: 'Email is required' })} />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div>
          <label>Password</label>
          <input type="password" {...register('password', { required: 'Password is required' })} />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <button type="submit">{isRegister ? 'Зарегистрироваться' : 'Войти'}</button>
      </form>
      <p style={{ cursor: 'pointer', color: 'blue' }} onClick={() => setIsRegister((prev) => !prev)}>
        {isRegister ? 'Уже есть аккаунт? Войти' : 'Нет аккаунта? Зарегистрируйся'}
      </p>
    </div>
  );
};
