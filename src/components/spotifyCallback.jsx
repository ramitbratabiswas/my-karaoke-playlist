import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useFetchRefreshToken } from "../utils/fetchRefreshToken";

export default function SpotifyCallback() {

  console.log("in SpotifyCallback");

  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const code = queryParams.get('code');
  const state = queryParams.get('state');

  console.log("code: " + code + ", state: " + state);

  const { accessToken, refreshToken } = useFetchRefreshToken(code, state);

  useEffect(() => {
    if (accessToken && refreshToken) {
      localStorage.setItem("access_token", accessToken);
      localStorage.setItem("refresh_token", refreshToken);
      
      navigate("/mymusic");
    }
  }, [accessToken, refreshToken]);

  return null;
}
