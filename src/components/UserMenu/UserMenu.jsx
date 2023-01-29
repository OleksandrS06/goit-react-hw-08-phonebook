import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';

const UserMenu = () => {
  const dispatch = useDispatch();

  const handleClick = e => {
    dispatch(logOut());
  };

  return (
    <div className="userMenu">
      <button type="button" onClick={handleClick} className="submitBtn">
        Log out
      </button>
    </div>
  );
};

export default UserMenu;
