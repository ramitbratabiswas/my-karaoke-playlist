import { playlists } from "../data/playlists";
import { useRefreshImages } from "../utils/refreshPlaylistImages";

export default function SpotifyPlaylists() {

  useRefreshImages();

  return (

    <div className="wrapper">
      <div className="playlistList">
        {playlists.map((playlist, index) => {
          return (<>
            <div key={index} className="playlistNames">
              <p>{playlist.name}</p>
              <p>{playlist.description}</p>
              <p>{playlist.id}</p>
              <img src={playlist.image}/>
            </div>
          </>);
        })}
      </div>
    </div>
  );
}