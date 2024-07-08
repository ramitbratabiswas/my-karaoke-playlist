import { useLocation } from "react-router-dom";
import { useFetchRefreshToken } from "../utils/fetchRefreshToken";

export default function SpotifyCallback() {
  const location = useLocation();
  
  const queryParams = new URLSearchParams(location.search);
  const code = queryParams.get('code');
  const state = queryParams.get('state');

  useFetchRefreshToken(code, state);

}