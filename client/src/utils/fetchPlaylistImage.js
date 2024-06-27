import { useState, useEffect } from "react";
import { useFetchSpotifyToken } from "./fetchSpotifyToken.js";

export const useFetchPlaylistImage = (playlistId) => {

  const [playlistImage, setPlaylistImage] = useState([]);
  const token = useFetchSpotifyToken();

  useEffect(() => {
    const fetchPlaylistImage = async () => {
      console.log("in fetchPlaylistImage");
      
      if (!token) return null;

      try {
        const res = await fetch(`https://api.spotify.com/v1/playlists/${playlistId}/images`, {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${token}`
          }
        });

        const jsonified = await res.json();
        setPlaylistImage(() => jsonified[0].url);

      } catch (error) {
        console.error(`catch clause error in fetchUserImage: ${error}`);
      }
    }
    fetchPlaylistImage();
  },[token]);

  return playlistImage;
}