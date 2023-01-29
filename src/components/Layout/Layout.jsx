import { useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import UserMenu from 'components/UserMenu/UserMenu';
import css from '../Layout/Layout.module.css';

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
        <div className={css.wrapper}>
          <nav>
            <ul className={css.navList}>
              {routes.map(({ label, path, privatePath }) => {
                return privatePath === isLoggedIn || path === '/' ? (
                  <li key={path}>
                    <Link to={path} className={css.links}>
                      {label}
                    </Link>
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
