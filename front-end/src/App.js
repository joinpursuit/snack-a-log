//DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//COMPONENTS
import NavBar from "./Components/NavBar";
import Snacks from "./Components/Snacks";
import SnackDetails from "./Components/SnackDetails";
import NewSnackForm from "./Components/NewSnackForm";

const App = () => {
  return (
    <div className="App">
      <Router>
        <NavBar />
          <h1>Hello, world!</h1>
        <Routes>
          <Route path="/" />
          <Route path="/snacks" element={<Snacks />} />
          <Route path="/snacks/new" element={<NewSnackForm />} />
          <Route path="/snacks/:id" element={<SnackDetails />} />
          <Route path="/snacks/:id/edit" element="" />
          <Route path="*" element="" />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
