import css from '../HomePage/HomePage.module.css';

const HomePage = () => {
  return (
    <section className={css.section}>
      <div>
        <h1 className={css.heading}>Welcome, stranger</h1>
        <p className={css.text}>Register first or login to enjoy an app</p>
      </div>
    </section>
  );
};

export default HomePage;
