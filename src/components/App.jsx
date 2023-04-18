import { Tweets } from './View/Tweets';
import { Routes } from 'react-router';
import { Route } from 'react-router-dom';
import AppBar from './AppBar/AppBar';
import HomeView from './View/Home';

export const App = () => {
  return (
    <>
      <AppBar />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/tweets" element={<Tweets />} />
        <Route path="*" element={<HomeView />} />
      </Routes>
    </>
  );
};
