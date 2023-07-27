import React, { useState } from 'react';
// import axios from 'axios';
import { action, originals, romance, comedy, horror } from './url';

import './App.css';
import Banner from './Components/Banner/Banner';

//importing components
import NavBar from "./Components/Navbar/NavBar";
import RowPost from './Components/RowPost/RowPost';

function App() {
  const [active, setActive] = useState('');

  const changeStatus=(title)=>{
      setActive(title);
  }

  return (
    <div>
      <NavBar />
      <Banner />
      <RowPost url={action} title='Netflix Originals' active={active} changeStatus={changeStatus} />
      <RowPost url={comedy} title='Comedy' isSmall active={active} changeStatus={changeStatus} />
      <RowPost url={horror} title='Horror' isSmall active={active} changeStatus={changeStatus} />
      <RowPost url={romance} title='Romance' isSmall active={active} changeStatus={changeStatus} />
      <RowPost url={originals} title='Action' isSmall active={active} changeStatus={changeStatus} />
    </div>
  );
}

export default App;
