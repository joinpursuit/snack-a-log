import React from 'react'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Index from "./Pages/Index.js"
// import Show from "./Pages/Show.js"
// import Edit from  "./Pages/Edit.js"
// import New from  "./Pages/New.js"



import NavBar from './Components/NavBar.js';
import Home from './Components/Home.js'
import Snacks from './Components/Snacks'
import SnackNewForm from './Components/SnackNewForm.js'
import SnackEditForm from './Components/SnackEditForm.js'
import SnackDetails from './Components/SnackDetails.js'

function App() {
  return (
    <div className="App">
      <Router>
    <NavBar />
    <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/snacks' element={<Snacks />} />
        <Route path='snacks/:index' element={<SnackDetails />}/>
        <Route path='snacks/:index/edit' element={<SnackEditForm />}/>
        <Route path='/snacks/new' element={<SnackNewForm/>}/>
        {/* <Route path='*' element={<FourOFour />}/> */}
      </Routes>
    </main>
    </Router>
    </div>
  );
}

export default App;
