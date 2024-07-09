import { Route, Routes, useLocation } from 'react-router-dom';

import Navbar from './components/navbar.jsx'
import SpotifyPlaylists from './components/spotifyPlaylists.jsx';
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

  switch (location.pathname) {
    case '/spotifyplaylists':
      primaryColorClass = 'primary-green';
      secondaryColorClass = 'secondary-green';
      break;
    case '/mymusic':
      primaryColorClass = 'primary-blue';
      secondaryColorClass = 'secondary-blue';
      break;
    default:
      primaryColorClass = 'primary-pink';
      secondaryColorClass = 'secondary-pink';
  }

  return (
    <div>
      <Navbar primaryColorClass={primaryColorClass} secondaryColorClass={secondaryColorClass} />
      <Routes>
        <Route path="/" element={<Frontpage />} />
        <Route path="/spotifyplaylists" element={<SpotifyPlaylists />} />
        <Route path="/mymusic" element={<MyMusic />} />
        <Route path="/lyrics/:id" element={<PlaylistLyrics />} />
        <Route path="/callback" element={<SpotifyCallback />} />
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
