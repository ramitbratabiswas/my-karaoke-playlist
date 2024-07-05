import { playlists } from "../data/playlists";
import { Link } from "react-router-dom";
import { useRefreshImages } from "../utils/refreshPlaylistImages";

export default function SpotifyPlaylists() {

  useRefreshImages();

  return (
    <div>
      <h1 className="list-heading" id="spotify-playlists-heading">popular on spotify right now</h1>
      <div className="playlistList">
        {playlists.map((playlist, index) => {
          return (<>
          <Link key={index} className="playlistCards" to={`/lyrics/${playlist.id}`}>
              <div>
                <img className="playlist-image" src={playlist.image} />
                <p className="playlist-name">{playlist.name}</p>
                <p className="playlist-description">{playlist.description}</p>
              </div>
              </Link>
          </>);
        })}
      </div>
    </div>
  );
}