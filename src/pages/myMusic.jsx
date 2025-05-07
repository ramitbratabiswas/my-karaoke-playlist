import { Link } from "react-router-dom";
import MyPlaylists from "../components/myPlaylists";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function MyMusic() {

  return (
    <div className="mymusic-container">
      <ul className="user-music-bar">
        <li className="user-music-redirector" id="search-music-redirector">
          <Link to="/search">
            <FontAwesomeIcon icon={faSearch}/>
          </Link>
        </li>
        <li className="user-music-redirector"><Link to="/queue">queue</Link></li>
        <li className="user-music-redirector"><Link to="/recents">recents</Link></li>
        <li className="user-music-redirector"><Link to="/topshort">top songs - last month</Link></li>
        <li className="user-music-redirector"><Link to="/topmedium">top songs - last 6 months</Link></li>
        <li className="user-music-redirector"><Link to="/toplong">top songs - last year</Link></li>
      </ul>
      <MyPlaylists />
    </div>
  );
}