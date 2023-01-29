import RegisterForm from 'components/RegisterForm/RegisterForm';
import RegistrationRedirect from 'hoc/RegistRedirect';

const RegisterPage = () => {
  return (
    <section className="section">
      <div>
        <h1>Registration Page</h1>
        <RegisterForm />
      </div>
    </section>
  );
};

const ProtectedRegisterPage = RegistrationRedirect(RegisterPage, '/login');

export default ProtectedRegisterPage;
