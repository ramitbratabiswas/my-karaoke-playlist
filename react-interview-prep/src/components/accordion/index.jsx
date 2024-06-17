
// ver ~SINGLE SELECT~

import { useState } from "react";
import { data } from './data.js';

export default function Accordion() {

  const [selected, setSelected] = useState(null);

  function handleSingleSelection(currentId) {
    console.log(currentId);
    setSelected(currentId);
  }

  return (
    <div className="wrapper">
      <div className="accordion">
        {
          data && data.length > 0 ?
            data.map((entry) => (
              <div className='items' key={entry.id}>
                <div className='id'> {entry.id} </div>
                <div className='song' onClick={() => handleSingleSelection(entry.song)}>
                  <p>+ {entry.song}</p>
                </div>
                {
                  selected === entry.id ? 
                  <div className="insideAcrdn"></div>
                  : null
                }
                <div className='artist'>{entry.artist.map((name) => (
                  <div key={name}>{name}</div>
                ))}</div>
              </div>
            )) : <div>No data found!</div>
        }
      </div>
    </div>
  );
}