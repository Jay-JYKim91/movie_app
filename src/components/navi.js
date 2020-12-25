import React from 'react';
import { Link } from 'react-router-dom'; //link has to be inside of the router not the app.

function Navi() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  )
}

export default Navi;
