import Accordion from './components/accordion.jsx'
import Navbar from './components/navbar.jsx'
import SpotifyPlaylists from './components/spotifyplaylists.jsx';

export const App = () => {
  return (
    <>
      <SpotifyPlaylists />
      {/* <div className='navbar'>
        <Navbar />
      </div> */}
      {/* <div className='accordion'>
        <Accordion />
      </div> */}
    </>
  );
}

export default App;
