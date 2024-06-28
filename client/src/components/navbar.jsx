import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (<>
    <div className='header'>
      <Link to="/"><h1>my <span id='karaoke'>karaoke</span> playlist!</h1></Link>
    </div>
    <div className='profile icon'>
    </div>
  </>);
}