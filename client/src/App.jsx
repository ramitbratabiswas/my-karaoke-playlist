import { Route, Routes, useLocation } from 'react-router-dom';

import Accordion from './components/accordion.jsx'
import Navbar from './components/navbar.jsx'
import SpotifyPlaylists from './components/spotifyPlaylists.jsx';
import SpotifyCallback from './components/spotifyCallback.jsx';
import MyPlaylists from './components/myPlaylists.jsx';

import './assets/styles/main.css'
import Frontpage from './pages/frontpage.jsx';

export const App = () => {

  const location = useLocation();
  let primaryColorClass;
  let secondaryColorClass;

  if (location.pathname.startsWith('/lyrics')) {
    primaryColorClass = 'primary-pink';
    secondaryColorClass = 'secondary-pink';
  } else if (location.pathname.startsWith('/callback')) {
    primaryColorClass = 'primary-blue';
    secondaryColorClass = 'secondary-blue';
  } else {
    switch (location.pathname) {
      case '/spotifyplaylists':
        primaryColorClass = 'primary-green';
        secondaryColorClass = 'secondary-green';
        break;
      case '/myplaylists':
        primaryColorClass = 'primary-blue';
        secondaryColorClass = 'secondary-blue';
        break;
      default:
        primaryColorClass = 'primary-white';
        secondaryColorClass = 'primary-white';
    }
  }

  return (
    <div>
      <Navbar primaryColorClass={primaryColorClass} secondaryColorClass={secondaryColorClass} />
      <Routes>
        <Route path="/" element={<Frontpage />} />
        <Route path="/spotifyplaylists" element={<SpotifyPlaylists />} />
        <Route path="/myplaylists" element={<MyPlaylists />} />
        <Route path="/lyrics/:id" element={<Accordion />} />
        <Route path="/callback" element={<SpotifyCallback />}/>
      </Routes>
    </div>
  );
}

export default App;
