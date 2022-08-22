import { useState, useEffect } from "react";

import { useParams, Link, useNavigate } from "react-router-dom";

import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function SnackEditForm() {
  const navigate = useNavigate();
  let { index } = useParams();
  console.log(index, "PPPPPPPPP");

  const [snack, setSnack] = useState({
    name: "",
    fiber: "",
    protein: "",
    added_sugar: "",
    is_healthy: false,
  });

  useEffect(() => {
    axios
      .get(`${API}/snacks/${index}`)
      .then((res) => setSnack(res.data))
      .catch((error) => console.error(error));
  }, [index, API]);

  const updateSnack = () => {
    axios
      .put(`${API}/snacks/${index}`, snack)
      .then((res) => {
        setSnack(res.data);
        navigate(`/snacks/${index}`);
      })
      .catch((error) => console.error(error));
  };

  const handleTextChange = (event) => {
    setSnack({ ...snack, [event.target.id]: event.target.value });
  };

  const handleNumberChange = (event) => {
    setSnack({
      ...snack,
      [event.target.id]: Number(event.target.value),
    });
  };

  const handleUrlChange = (e) => {
    setSnack({ ...snack, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateSnack();
  };

  return (
    <div className="edit">
      <h1>Edit</h1>
<br/>
<br/>

      <span>
        <h4>Snack Health is determined by</h4>
        <li>protein is above 5</li>
        <li>or fiber is above 5</li>
        <li>and sugar is less than 5</li>
      </span>
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
          <br></br>
          <input type="submit" />
          <br></br>
          <Link to={`/snacks/${index}`}>
            <button>BACK</button>
          </Link>
        </form>
      </fieldset>
    </div>
  );
}

export default SnackEditForm;
