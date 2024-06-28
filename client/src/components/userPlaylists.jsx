import { useFetchUserPlaylists } from "../utils/fetchUserPlaylists.js";

export default function UserPlaylists() {

  const userPlaylists = useFetchUserPlaylists();

  return (
    <div>
      <div className="playlistList">
        {userPlaylists.map((playlist, index) => {
          return (<>
              <div key={index} id="userCard" className="playlistCards">
                <img className="playlist-image" src={playlist.imgUrl} />
                <p className="playlist-name">{playlist.name}</p>
                <p className="playlist-description">{playlist.description}</p>
              </div>
          </>);
        })}
      </div>
    </div>
  );
}