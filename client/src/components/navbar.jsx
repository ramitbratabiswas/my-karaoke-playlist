import { Link, useNavigate } from "react-router-dom";
import Profile from "./profile";

export default function Navbar({ primaryColorClass, secondaryColorClass }) {

  const navigate = useNavigate();

  const handleProfileClick = () => {
    localStorage.clear();
    navigate("/");
  }

  return (<div className="nav">
    <div>
      <Link to="/">
        <h1 className={`header ${secondaryColorClass}`}>my <span className={primaryColorClass}
          id='karaoke'>karaoke</span> playlist!</h1>
      </Link>
    </div>
    <div className="profile" onClick={handleProfileClick}>
      <Profile/>
    </div>
  </div>);
}