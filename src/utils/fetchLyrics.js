import { useEffect, useState } from "react";

export const useFetchLyrics = (song, artist) => {

  const [lyrics, setLyrics] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  let songArtist = artist.join('_').split(" ").join("_");
  let songName = song;
  let apiUrl = `https://cors-proxy-sfh7.onrender.com/api/lyrics?song=${songName}&artist=${songArtist}`;

  useEffect(() => {

    setLyrics(() => "");
    setIsLoading(() => true);

    fetch(apiUrl).then(res => {
      return res.json();
    }).then(data => {
      if (data.lyrics) {
        let returned = data.lyrics;
        setLyrics(() => returned);
        setIsLoading(() => false);
      }
    }).catch(error => error);
  }, [apiUrl]);

  return [lyrics, isLoading];
  
}