import { useState } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import './SnackNewForm.css'

const API_URL = process.env.REACT_APP_API_URL;

function SnackNewForm() {
  const [snack, setSnack] = useState({
    name: "",
    fiber: "",
    protein: "",
    added_sugar: "",
    category: "",
    is_healthy: false
  });

  const navigate = useNavigate();

  const addSnack = () => {
    axios
      .post(`${API_URL}/snacks`, snack)
      .then((res) => {
        navigate(`/snacks`);
      })
      .catch((error) => console.error(error));
  };

  const handleTextChange = (e) => {
    setSnack({ ...snack, [e.target.id]: e.target.value });
  };

  const handleNumberChange = (e) => {
    setSnack({ ...snack, [e.target.id]: Number(e.target.value) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addSnack();
  };

  return (
    <div className="new">
      <h1>New Snack</h1>
      <fieldset>
        <form onSubmit={handleSubmit}>
          <label>Snack</label>
          <input
            id="name"
            value={snack.name}
            type="text"
            placeholder="Name"
            onChange={handleTextChange}
          />
          
          <label>Fiber</label>
          <input
            id="fiber"
            value={snack.fiber}
            type="number"
            placeholder="Name"
            onChange={handleNumberChange}
          />
          <label>Protein</label>
          <input
            id="protein"
            value={snack.protein}
            type="number"
            placeholder="Protein"
            onChange={handleNumberChange}
          />
          <label>Added Sugar</label>
          <input
            id="added_sugar"
            value={snack.added_sugar}
            type="number"
            placeholder="Added_Sugar"
            onChange={handleNumberChange}
          />
          <label for="url">Enter an https:// URL:</label>
          <input
            type="url"
            name="url"
            id="url"
            placeholder="https://example.com"
            pattern="https://.*"
            size="30"
          />
          <br />
          <br></br>
          <input value={"Sumbit"} type="submit" />
        </form>
        <br></br>
        {/* <Link to={`/snacks/${index}`}>
        <button>BACK</button>
      </Link> */}
      </fieldset>
    </div>
  );
}

export default SnackNewForm;
