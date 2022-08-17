import NavBar from "./Components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router>
      
      <h1>Hello, world!</h1>
      </Router>
    </div>
  );
}

export default App;
