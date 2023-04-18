import s from './AppBar.module.css';
import Navigation from './Navigation/Navigation';

export default function AppBar() {
  return (
    <>
      <div className={s.container}>
        <header className={s.text}>twitter users</header>
        <Navigation />
      </div>
    </>
  );
}
