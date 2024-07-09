import { useState, useEffect } from "react";

export const useFetchMyTopLong = () => {

  const [myTopLongData, setMyTopLongData] = useState({
    name: '',
    tracks: []
  });
  const accessToken = localStorage.getItem("access_token");

  useEffect(() => {
    const fetchMyTopLong = async () => {
      if (!accessToken) return null;

      try {
        const res = await fetch(`https://api.spotify.com/v1/me/top/tracks?time_range=long_term&limit=50`, {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${accessToken}`
          }
        });

        const data = await res.json();
        console.log(data);
        const tracks = data.items.map((item, index) => {
          let songName = item.name;
          let songId = item.id;
          let songImage = item.album.images[0].url;
          if (songName.toLowerCase().includes('(feat')) {
            let featIndex = songName.toLowerCase().indexOf('(feat');
            songName = songName.substring(0, featIndex - 1);
          }
          return { id: index + 1, song: songName, artist: item.artists.map((artist) => artist.name), trackId: songId, image: songImage }
        })
        
        setMyTopLongData({
          name: "top songs - last year",
          tracks: tracks
        });

      } catch (error) {
        console.error(`catch clause error in fetchMyTopLong: ${error}`);
      }
    }
    fetchMyTopLong();
  },[accessToken]);

  return myTopLongData;
}