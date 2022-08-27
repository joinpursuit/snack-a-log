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
    fiber: 0,
    protein: 0,
    added_sugar: 0,
    is_healthy: false,
    url: "",
  });

  useEffect(() => {
    axios
      .get(`${API}/snacks/${index}`)
      .then((res) => setSnack(res.data))
      .catch((error) => console.error(error));
  }, [index, navigate]);

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
      <h2>Edit</h2>
      <br />
      <br />
      <br />
      <br />

      <section>
        {/* <p>Snack Health is determined by:</p> */}
        <h4>Snack Health is determined by</h4>
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
            placeholder="Fiber"
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
          <br></br>
          <br></br>
          <br></br>
          <input type="submit" />
          <br></br>
          <br></br>
          <br></br>

          <Link to={`/snacks/${index}`}>
            <button>BACK</button>
            <br></br>
          </Link>
          <br></br>
        </form>
      </fieldset>
    </div>
  );
}

export default SnackEditForm;
