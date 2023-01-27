import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';

const UserMenu = () => {
  const dispatch = useDispatch();

  const handleClick = e => {
    dispatch(logOut());
  };

  return (
    <div>
      <p>userEmail</p>
      <button type="button" onClick={handleClick}>
        Log out
      </button>
    </div>
  );
};

export default UserMenu;
