import { Route, Routes, useLocation } from 'react-router-dom';

import Navbar from './components/navbar.jsx'
import SpotifyCallback from './components/spotifyCallback.jsx';

import './assets/styles/main.css'
import Frontpage from './pages/frontpage.jsx';
import MyMusic from './pages/myMusic.jsx';
import PlaylistLyrics from './pages/playlistLyrics.jsx';
import Queue from './pages/queue.jsx';
import Recents from './pages/recents.jsx';
import TopShort from './pages/topShort.jsx';
import TopMedium from './pages/topMedium.jsx';
import TopLong from './pages/topLong.jsx';

export const App = () => {

  const location = useLocation();
  let primaryColorClass;
  let secondaryColorClass;

  if (location.pathname !== "/") {

    switch (location.pathname) {
      case '/mymusic':
      case '/callback':
        primaryColorClass = 'primary-blue';
        secondaryColorClass = 'secondary-blue';
        break;
      case '/frontpage':
        primaryColorClass = 'white';
        secondaryColorClass = 'white';
        break;
      default:
        primaryColorClass = 'primary-pink';
        secondaryColorClass = 'secondary-pink';
    }

  }

  return (
    <div>
      <Navbar primaryColorClass={primaryColorClass} secondaryColorClass={secondaryColorClass} />
      <Routes>
        <Route path="/" element={<Frontpage />} />
        <Route path="/mymusic" element={<MyMusic />} />
        <Route path="/lyrics/:id" element={<PlaylistLyrics />} />
        <Route path="/callback/*" element={<SpotifyCallback />} />
        <Route path="/queue" element={<Queue />} />
        <Route path="/recents" element={<Recents />} />
        <Route path="/topshort" element={<TopShort />} />
        <Route path="/topmedium" element={<TopMedium />} />
        <Route path="/toplong" element={<TopLong />} />
      </Routes>
    </div>
  );
}

export default App;
