import { useState } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import "./SnackNewForm.css";

const API_URL = process.env.REACT_APP_API_URL;

function SnackNewForm() {
  const [snack, setSnack] = useState({
    name: "",
    fiber: 0,
    protein: 0,
    added_sugar: 0,
    is_healthy: false,
    url: "",
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

  const handleUrlChange = (e) => {
    setSnack({ ...snack, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addSnack();
  };

  return (
    <div className="new">
      <br />
      <br />
      <br />
      <br />
      <section>
        <h4>Snack Health is determined by:</h4>
        <ul>
          <li>protein is above 5</li>
          <li>or fiber is above 5</li>
          <li>and added sugar is less than 5</li>
        </ul>
      </section>
      <br />
      <br />
      <fieldset>
        <form onSubmit={handleSubmit}>
          <br></br>
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

          <label for="image">Enter an https:// URL:</label>
          <input
            type="url"
            name="url"
            id="image"
            src="url"
            placeholder="https://example.com"
            pattern="https://.*"
            size="30"
            onChange={handleUrlChange}
          />
          <br />
          <br />
          <br />

          <input value={"Sumbit"} type="submit" />
          <br />
          <br />
          <br />
        </form>
      </fieldset>

      <br />
    </div>
  );
}

export default SnackNewForm;
