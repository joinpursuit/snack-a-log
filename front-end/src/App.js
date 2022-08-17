import React from 'react'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Index from "./Pages/Index.js"
import Show from "./Pages/Show.js"
import Edit from  "./Pages/Edit.js"
import New from  "./Pages/New.js"

import NavBar from './Components/NavBar.js';

function App() {
  return (
    <div className="App">
      <Router>
    <NavBar />
    <main>
      <Routes>
        {/* <Route path='/' element={<Home />} /> */}
        <Route path='/snacks' element={<Index />} />
        <Route path='snacks/:index' element={<Show />}/>
        <Route path='snacks/:index/edit' element={<Edit />}/>
        <Route path='/snacks/new' element={<New />}/>
        {/* <Route path='*' element={<FourOFour />}/> */}
      </Routes>
    </main>
    </Router>
    </div>
  );
}

export default App;
