import LoginForm from 'components/LoginForm/LoginForm';
import LoginRedirect from 'hoc/LoginRedirect';

const LoginPage = () => {
  return (
    <section className="section">
      <div>
        <h1>Login Page</h1>
        <LoginForm />
      </div>
    </section>
  );
};

const ProtectedLoginPage = LoginRedirect(LoginPage, '/contacts');

export default ProtectedLoginPage;
