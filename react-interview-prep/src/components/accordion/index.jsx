
// ver ~SINGLE SELECT~

import { useState } from "react";
import { data } from './data.js';

export default function Accordion() {

  const [selected, setSelected] = useState(null);
  const [enableMultiselection, setEnableMultiselection] = useState(false);
  const [multipleSelected, setMultipleSelected] = useState([]);

  function multiSelectionEnabler() {
    setEnableMultiselection(!enableMultiselection);
    setSelected(null);
    setMultipleSelected([]);
  }

  function handleSingleSelection(currentId) {
    console.log(currentId);
    setSelected((selected === currentId) ? null : currentId);
  }
  
  function handleMultipleSelections(currentId) {
    const newSelected = multipleSelected.includes(currentId) ? 
      multipleSelected.filter(id => id !== currentId) : [...multipleSelected, currentId];

    console.log(multipleSelected.includes(currentId));
    setMultipleSelected(newSelected);
    console.log(newSelected);
  }

  return (
    <div className="wrapper">
      <button className="multilineEnable" onClick={() => multiSelectionEnabler()}>
        {enableMultiselection ? "Disable " : "Enable "} Multiselection
      </button>
      <div className="accordion">
        {
          data && data.length > 0 ?
            data.map((entry) => (
              <div className='items' key={entry.id}>
                <div className='id'> {entry.id} </div>
                <div className='song' onClick={() => enableMultiselection ? handleMultipleSelections(entry.id) : handleSingleSelection(entry.id)}>
                  <p id='songName'>{entry.artist.map((name, i) => i === 0 ? name : ", " + name)} - {entry.song}</p>
                  <span id='plus'><b>+</b></span>
                  <div className='lyrics'>{
                    (!enableMultiselection && selected === entry.id) || (enableMultiselection && multipleSelected.includes(entry.id)) ?
                      <div className="insideAcrdn">{entry.lyrics}</div>
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