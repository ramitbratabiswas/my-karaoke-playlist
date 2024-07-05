import { useState } from "react";
import { useFetchPlaylistData } from "../utils/fetchPlaylistData.js";
import { useScrapeLyrics } from "../utils/scrapeLyrics.js";
import { useFetchLyrics } from "../utils/fetchLyrics.js"
import { useParams } from "react-router-dom";

export default function Accordion() {

  const { id } = useParams();
  const { name, tracks } = useFetchPlaylistData(id);

  const [selected, setSelected] = useState(-1);

  // let [lyrics, loading] = useScrapeLyrics(selected > 0 ? tracks[selected-1].song : "", selected > 0 ? tracks[selected-1].artist : []);
  let [lyrics, loading] = useFetchLyrics(selected > 0 ? tracks[selected-1].song : "", selected > 0 ? tracks[selected-1].artist : []);

  function handleSingleSelection(currentId) {
    if (selected !== currentId) {
      setSelected(() => currentId);
    } else {
      setSelected(() => -1);
    }
  }

  return (
    <div>
      <h1 className="list-heading" id="playlist-name-heading">{name}</h1>
      <div className="wrapper accordion">
        {
          tracks && tracks.length > 0 ?
            tracks.map((entry) => (
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
