import { useState, useEffect } from "react";
import { useFetchSpotifyToken } from "./fetchAccessToken.js";

export const useFetchPlaylistData = (id) => {
  const [playlistData, setPlaylistData] = useState({
    name: '',
    tracks: []
  });
  
  const token = localStorage.getItem("access_token");

  useEffect(() => {
    const fetchPlaylistData = async () => {
      if (!token) return;

      try {
        const playlistRes = await fetch(`https://api.spotify.com/v1/playlists/${id}`, {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${token}`
          }
        });

        const playlistData = await playlistRes.json();
        const totalTracks = playlistData.tracks.total;
        const playlistName = playlistData.name;

        const offset = Math.max(totalTracks - 100, 0);

        const res = await fetch(`https://api.spotify.com/v1/playlists/${id}/tracks?offset=${offset}&limit=100`, {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${token}`
          }
        });

        const data = await res.json();
        const tracks = data.items.map((item, index) => {
          let songName = item.track.name;
          let songId = item.track.id;
          let songImage = item.track.album.images[0].url;
          if (songName.toLowerCase().includes('(feat')) {
            let featIndex = songName.toLowerCase().indexOf('(feat');
            songName = songName.substring(0, featIndex - 1);
          }
          return { id: index + 1, song: songName, artist: item.track.artists.map((artist) => artist.name), trackId: songId, image: songImage }
        });

        let updatedTracks = totalTracks > 100
          ? tracks.reverse().map((track, index) => ({
              ...track,
              id: 101 - track.id
            }))
          : tracks;

        setPlaylistData({
          name: playlistName,
          tracks: updatedTracks
        });

      } catch (error) {
        console.error(`catch clause error in fetchPlaylistData: ${error}`);
      }
    }

    fetchPlaylistData();
  }, [token, id]);

  return playlistData;
}
