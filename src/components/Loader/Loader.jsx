import { RotatingSquare } from 'react-loader-spinner';

const Loader = () => {
  return (
    <RotatingSquare
      height="100"
      width="100"
      color="#bfdfc4"
      ariaLabel="rotating-square-loading"
      strokeWidth="4"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
};

export default Loader;
