import React, { useState } from 'react';
import axios from 'axios';
import { action, originals, romance, comedy, horror } from './url';

import './App.css';
import Banner from './Components/Banner/Banner';

//importing components
import NavBar from "./Components/Navbar/NavBar";
import RowPost from './Components/RowPost/RowPost';

function App() {
  return (
    <div>
      <NavBar />
      <Banner />
      <RowPost url={action} title='Netflix Originals' />
      <RowPost url={comedy} title='Comedy' isSmall />
      <RowPost url={horror} title='Horror' isSmall />
      <RowPost url={romance} title='Romance' isSmall />
      <RowPost url={originals} title='Action' isSmall />
    </div>
  );
}

export default App;
