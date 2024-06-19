import { useState, useEffect } from "react";
import { data } from './data.js';
import { useFetchLyrics } from "./fetchLyrics.js";

export default function Accordion() {

  const [selected, setSelected] = useState(-1);

  let lyricData = useFetchLyrics(selected > 0 ? data[selected-1].song : "", selected > 0 ? data[selected-1].artist : []);
  
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
                  <p id='songName'>{entry.artist.map((name, i) => i === 0 ? name : ", " + name)} - {entry.song}</p>
                  <span id='plus'><b>+</b></span>
                  <div className='lyrics'>{
                    selected === entry.id ?
                      <div className="insideAcrdn">
                        {lyricData}
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
