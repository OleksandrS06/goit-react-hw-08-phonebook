import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/selectors';

const routes = [
  {
    label: 'Home',
    path: '/',
    privatePath: false,
  },
  {
    label: 'Registration',
    path: '/register',
    privatePath: false,
  },
  {
    label: 'Login',
    path: '/login',
    privatePath: false,
  },
  {
    label: 'Contacts',
    path: '/contacts',
    privatePath: true,
  },
];

const Layout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <header>
        <div>
          <nav>
            <ul>
              {routes.map(({ label, path, privatePath }) => {
                return privatePath === isLoggedIn || path === '/' ? (
                  <li key={path}>
                    <Link to={path}>{label}</Link>
                  </li>
                ) : null;
              })}
            </ul>
          </nav>
        </div>
        {isLoggedIn && <UserMenu />}
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
