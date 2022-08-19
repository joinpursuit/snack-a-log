//DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//COMPONENTS
import NavBar from "./Components/NavBar";
import Snacks from "./Components/Snacks";
import SnackDetails from "./Components/SnackDetails";
import NewSnackForm from "./Components/NewSnackForm";

//PAGES
import Home from "./Pages/Home";
import Error from "./Pages/Error";

const App = () => {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/snacks" element={<Snacks />} />
          <Route path="/snacks/new" element={<NewSnackForm />} />
          <Route path="/snacks/:id" element={<SnackDetails />} />
          <Route path="/snacks/:id/edit" element="" />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
