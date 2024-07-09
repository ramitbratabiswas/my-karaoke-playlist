import { Link } from "react-router-dom";
import { useFetchUserProfile } from "../utils/fetchUserProfile";

export default function Profile({ onClick }) {
  return (<h1 className="profile-wrapper">
    {localStorage.getItem("refresh_token") ? <ProfileIcon onClick={onClick} /> : "not logged in"}
  </h1>);
}

function ProfileIcon({ onClick }) {
  const { imgUrl, name } = useFetchUserProfile();
  return (
    <div className="profile-icon">
      <div className="profile-text">
        <span className="profile-name">{name}</span>
        <span className="log-out" onClick={onClick}>log out</span>
      </div>
      <img src={imgUrl} alt="profile" />
    </div>
  );
}