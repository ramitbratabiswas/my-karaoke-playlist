import { useState, useEffect } from "react";

export const useFetchMyRecents = () => {

  const [recentsData, setRecentsData] = useState({
    name: '',
    tracks: []
  });
  const accessToken = localStorage.getItem("access_token");

  useEffect(() => {
    const fetchMyRecents = async () => {
      if (!accessToken) return null;

      try {
        const res = await fetch(`https://api.spotify.com/v1/me/player/recently-played`, {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${accessToken}`
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
        })
        
        setRecentsData({
          name: "recents",
          tracks: tracks
        });

      } catch (error) {
        console.error(`catch clause error in fetchMyPlaylists: ${error}`);
      }
    }
    fetchMyRecents();
  },[accessToken]);

  return recentsData;
}