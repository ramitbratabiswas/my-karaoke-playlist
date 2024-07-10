import { useEffect, useState } from "react";

export const useFetchLyrics = (song, artist) => {

  const [lyrics, setLyrics] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const corsProxy = '';
  let songArtist = artist.join('_').split(" ").join("_");
  let songName = song;
  const apiKey = import.meta.env.VITE_MUSIXMATCH_KEY;
  const apiUrl = `${corsProxy}https://api.musixmatch.com/ws/1.1/matcher.lyrics.get?q_track=${songName}&q_artist=${songArtist}&apikey=${apiKey}`;

  useEffect(() => {

    setLyrics(() => "");
    setIsLoading(() => true);

    fetch(apiUrl).then(res => {
      return res.json()
    }).then(data => {
      if (data.message.body.lyrics) {
        let returned = data.message.body.lyrics.lyrics_body.split("***")[0];
        setLyrics(() => returned);
        setIsLoading(() => false);
      }
    }).catch(error => error);
  }, [apiUrl]);

  return [lyrics, isLoading];
  
}