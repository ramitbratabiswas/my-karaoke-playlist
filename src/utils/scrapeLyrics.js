import * as cheerio from "cheerio";
import { useState, useEffect } from "react";

const corsProxy = 'https://cors-anywhere.herokuapp.com/';
const placeHolder = 'https://www.musixmatch.com/lyrics/';

export const useScrapeLyrics = (song, artist) => {

  const artistString = artist.join('-').replaceAll('.','').toLowerCase().split(" ").join("-");
  const songString = song.toLowerCase().replaceAll(/[^a-zA-Z0-9 ]/g, '').replaceAll('.','').replaceAll(' ', '-');

  const url = `${corsProxy}${placeHolder}${artistString}/${songString}`;

  const [scrapedLyrics, setScrapedLyrics] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    setScrapedLyrics(() => "");
    setIsLoading(() => true);

    const fetchScrapedLyrics = async () => {
      try {
        const page = await fetch(url, {
          method: "GET",
        });

        if (!page.ok) {
          setScrapedLyrics(() => "sorry, we couldn't find the lyrics for this one :(");
          setIsLoading(() => false);
          return;
        }

        const body = await page.text();
        const $ = await cheerio.load(body);

        const $lyrics = $('.r-ueyrd6');
        const lyrics = $lyrics.map((i, e) => $(e).text().toString());
        let finalLyrics = "";
        for (let lyric of lyrics) {
          finalLyrics += `${lyric}\n`;
        }
        setScrapedLyrics(() => finalLyrics);
        setIsLoading(() => false);
      } catch (error) {
        console.error(`catch clause error in fetchScrapedLyrics: ${error}`);
      }
    }
    fetchScrapedLyrics();
  }, [url]);

  return [scrapedLyrics, isLoading];
}