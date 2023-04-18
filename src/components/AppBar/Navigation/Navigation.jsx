import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const Navigation = () => {
  return (
    <>
      <nav className={s.nav}>
        <NavLink to="/" className={s.link}>
          Home
        </NavLink>
        <NavLink to="/tweets" className={s.link}>
          Users
        </NavLink>
      </nav>
    </>
  );
};

export default Navigation;
