//DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//COMPONENTS
import NavBar from "./Components/NavBar";
import Snacks from "./Components/Snacks";
import SnackDetails from "./Components/SnackDetails";
import NewSnackForm from "./Components/NewSnackForm";
import EditSnackForm from "./Components/EditSnackForm";

const App = () => {
  return (
    <div className="App">
      <Router>
        <NavBar />
       
        <Routes>
          <Route path="/" />
          <Route path="/snacks" element={<Snacks />} />
          <Route path="/snacks/new" element={<NewSnackForm />} />
          <Route path="/snacks/:id" element={<SnackDetails />} />
          <Route path="/snacks/:id/edit" element={<EditSnackForm />} />
          <Route path="*" element="" />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
