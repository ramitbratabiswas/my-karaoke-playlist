import { Link } from "react-router-dom";

export default function Navbar({ primaryColorClass, secondaryColorClass }) {
  return (<div className="nav">
    <div>
      <Link to="/">
        <h1 className={`header ${secondaryColorClass}`}>my <span className={primaryColorClass}
          id='karaoke'>karaoke</span> playlist!</h1>
      </Link>
    </div>
    <div className='profile icon'>
    </div>
  </div>);
}