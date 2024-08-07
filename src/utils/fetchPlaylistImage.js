import { useState, useEffect } from "react";

export const useFetchPlaylistImage = (playlistId) => {

  const [playlistImage, setPlaylistImage] = useState([]);
  const token = localStorage.getItem("access_token");

  useEffect(() => {
    const fetchPlaylistImage = async () => {
      
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