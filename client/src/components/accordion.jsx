import { useState } from "react";
import { useFetchPlaylistData } from "../utils/fetchPlaylistData.js";
import { playlists } from "../data/playlists.js";
import { useScrapeLyrics } from "../utils/scrapeLyrics.js";
import { useFetchLyrics } from "../utils/fetchLyrics.js"

export default function Accordion(props) {

  const onRepeat = "37i9dQZF1Epvjzh6N0ZAcU";

  const data = useFetchPlaylistData(props.playlistId);

  const [selected, setSelected] = useState(-1);

  // let [lyrics, loading] = useScrapeLyrics(selected > 0 ? data[selected-1].song : "", selected > 0 ? data[selected-1].artist : []);
  let [lyrics, loading] = useFetchLyrics(selected > 0 ? data[selected-1].song : "", selected > 0 ? data[selected-1].artist : []);

  function handleSingleSelection(currentId) {
    if (selected !== currentId) {
      setSelected(() => currentId);
    } else {
      setSelected(() => -1);
    }
  }

  return (
    <div className="wrapper">
      <div className="accordion">
        {
          data && data.length > 0 ?
            data.map((entry) => (
              <div className='items' key={entry.id}>
                <div className='id'> {entry.id} </div>
                <div className='song' onClick={() => handleSingleSelection(entry.id)}>
                  <img className='albumArt' src={entry.image}/>
                  <div className="songInfo">
                    <p id='songName'>{entry.song}</p>
                    <p id='artists'>{entry.artist.map((name, i) => i === 0 ? name : ", " + name)}</p>
                  </div>
                  <div className='lyrics'>{
                    selected === entry.id ?
                      <div className="insideAcrdn">
                        {loading ? "loading..." : lyrics}
                      </div>
                      : null
                  }</div>
                </div>
              </div>
            )) : <div>No data found!</div>
        }
      </div>
    </div>
  );
}
