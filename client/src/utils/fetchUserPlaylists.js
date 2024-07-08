import { useState, useEffect } from "react";
import { useFetchSpotifyToken } from "./fetchAccessToken.js";

export const useFetchUserPlaylists = () => {

  const [userPlaylists, setUserPlaylists] = useState([]);
  const token = useFetchSpotifyToken();

  useEffect(() => {
    const fetchUserPlaylists = async () => {
      console.log("in fetchUserPlaylists");
      
      if (!token) return null;

      try {
        const res = await fetch(`https://api.spotify.com/v1/me/playlists`, {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${token}`
          }
        });

        const jsonified = await res.json();
        const playlists = jsonified.items.map((item) => {
          return {
            name: item.name,
            id: item.id,
            imgUrl: item.images[0].url,
            description: item.description
          }
        });
        setUserPlaylists(() => playlists);

      } catch (error) {
        console.error(`catch clause error in fetchUserPlaylists: ${error}`);
      }
    }
    fetchUserPlaylists();
  },[token]);

  return userPlaylists;
}