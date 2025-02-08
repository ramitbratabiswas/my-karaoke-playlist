import { useState, useEffect } from "react";

export const useScrapeLyrics = (song, artist) => {

  const artistString = artist.join('-').replaceAll('.','').toLowerCase().split(" ").join("-");
  const songString = song.toLowerCase().replaceAll(/[^a-zA-Z0-9 ]/g, '').replaceAll('.','').replaceAll(' ', '-');
  const apiUrl = `https://cors-proxy-production-726b.up.railway.app/api/scrape?artist=${encodeURIComponent(artistString)}&song=${encodeURIComponent(songString)}`;
  // const apiUrl = `http://localhost:8080/api/scrape?artist=${encodeURIComponent(artistString)}&song=${encodeURIComponent(songString)}`;

  const [scrapedLyrics, setScrapedLyrics] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    setScrapedLyrics(() => "");
    setIsLoading(() => true);

    fetch(apiUrl).then(res => {
      return res.json();
    }).then(data => {
      if (data.lyrics) {
        if (data.lyrics[1] == "\n") data.lyrics = data.lyrics.substring(2);
        let returned = data.lyrics;
        setScrapedLyrics(() => returned);
        setIsLoading(() => false);
      }
    }).catch(error => error);
  }, [apiUrl]);

    
  return [scrapedLyrics, isLoading];
}