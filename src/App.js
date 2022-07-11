import {Routes, Route} from 'react-router-dom';

import Home from './components/Home';
import Main from './components/Main';
import Navigation from './components/Navigation';
import Nutrition from './components/Nutrition';

export default function App() {
  return (
    <>
      <Home />
      <Routes>
        <Route path="/" element={<Navigation />} />
        <Route path="/Main" element={<Main />} />
        <Route path="/Nutrition" element={<Nutrition />} />
      </Routes>
    </>
  );
}
