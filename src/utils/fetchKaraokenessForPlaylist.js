import { useState, useEffect } from "react";
import { useFetchSpotifyToken } from "./fetchSpotifyToken";

const audioFeaturesUrl = "https://api.spotify.com/v1/audio-features";

export const useFetchKaraokenessForPlaylist = (playlistData) => {

  console.log("FKFP called");

  const [updatedPlaylist, setUpdatedPlaylist] = useState([]);
  const token = useFetchSpotifyToken();

  useEffect(() => {

    const fetchKaraokenessForPlaylist = async () => {

      if (!token || playlistData.length === 0) return "token broken or playlist empty";

      try {
        console.log("in try clause");
        const tracksWithFeatures = await Promise.all(playlistData.map(async (track) => {
          const features = await fetch(`${audioFeaturesUrl}/${track.trackId}`, {
            method: "GET",
            headers: {
              "Authorization": `Bearer ${token}`
            }
          });

          return { ...track, features };
        }));
        setUpdatedPlaylist(tracksWithFeatures);
      } catch (error) {
        console.error(`Error fetching audio features: ${error}`);
      }
    }
    fetchKaraokenessForPlaylist();
  }, [token, playlistData.length]);

  return updatedPlaylist;

}