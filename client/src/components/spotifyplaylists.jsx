import { playlists } from "../data/playlists";
import { useRefreshImages } from "../utils/refreshPlaylistImages";

export default function SpotifyPlaylists() {

  useRefreshImages();

  return (
    <div className="">
      <div className="playlistList">
        {playlists.map((playlist, index) => {
          return (<>
            {/* <a href={`https://open.spotify.com/playlist/${playlist.id}`}> */}
              <div key={index} className="playlistCards">
                <img className="playlist-image" src={playlist.image} />
                <p className="playlist-name">{playlist.name}</p>
                <p className="playlist-description">{playlist.description}</p>
              </div>
            {/* </a> */}
          </>);
        })}
      </div>
    </div>
  );
}