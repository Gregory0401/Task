import s from './Home.module.css';

export default function HomeView() {
  return (
    <>
      <div className={s.container}>
        <h1 className={s.title}>
          <b className={s.text}>Welcome!</b> Press Users to start <br />
        </h1>
      </div>
    </>
  );
}
