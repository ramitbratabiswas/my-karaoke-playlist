import { Link } from "react-router-dom";
import MyPlaylists from "../components/myPlaylists";

export default function MyMusic() {

  return (
    <div className="mymusic-container">
      <ul className="user-music-bar">
        <li className="user-music-redirector"><Link>queue</Link></li>
        <li className="user-music-redirector"><Link>recents</Link></li>
        <li className="user-music-redirector"><Link>top songs - last month</Link></li>
        <li className="user-music-redirector"><Link>top songs - last 6 months</Link></li>
        <li className="user-music-redirector"><Link>top songs - last year</Link></li>
      </ul>
      <MyPlaylists />
    </div>
  );
}