import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  let dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <label className="label">
        <span>Email</span>
        <input
          value={email}
          onChange={handleChange}
          name="email"
          type="email"
          required
        />
      </label>
      <label className="label">
        <span>Password</span>
        <input
          value={password}
          onChange={handleChange}
          name="password"
          type="password"
          minLength={8}
          required
        />
      </label>
      <button type="submit" className="submitBtn">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
