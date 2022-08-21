import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function SnackEditForm() {
  let { index } = useParams();
  const navigate = useNavigate();

  const [snack, setSnack] = useState({
    name: "",
    fiber: "",
    protien: "",
    added_sugar: "",
    is_healthy: false,
    image: ""
  });

  const handleTextChange = (event) => {
    setSnack({ ...snack, [event.target.id]: event.target.value });
  };
  const handleCheckboxChange = () => {
    setSnack({ ...snack, is_healthy: !snack.is_healthy });
  };

  useEffect(() => {
    axios.get(`${API}/snack/${index}`)
      .then(response => setSnack(response.data))
      .catch(error => console.error(error))
  }, []);
  const updateSnack = () => {
    axios.put(`${API}/snacks/${index}`, snack)
      .then(response => {
        setSnack(response.data)
        navigate(`/snacks/${index}`)
      })
      .catch(error => console.error(error))
  }
   
  const handleSubmit = (event) => {
    event.preventDefault();
    updateSnack();
  };
  return (
    <div className="Edit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={snack.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Snack-a-Log"
          required
        />
        <label htmlFor="fiber">Fiber:</label>
        <input
          id="fiber"
          type="number"
          value={snack.fiber}
          onChange={handleTextChange}
        />
        <label htmlFor="protien">Protien:</label>
        <input
          id="protien"
          type="number"
          value={snack.protien}
          onChange={handleTextChange}
        />
        <label htmlFor="added_sugar">Added Sugar:</label>
        <input
          id="addedSugar"
          type="number"
          value={snack.added_sugar}
          onChange={handleTextChange}
        />
        <label htmlFor="isHealthy">Healthy:</label>
        <input
          id="isHealthy"
          type="checkbox"
          onChange={handleTextChange}
          checked={snack.is_healthy}
        />
        <label htmlFor="image">Image:</label>
        <input
          id="image"
          type="text"
          name="image"
          value={snack.image}
          onChange={handleTextChange}
        />
        <br />

        <input type="submit" />
      </form>
      <Link to={`snacks/${index}`}>
        <button>Edit</button>
      </Link>
    </div>
  );
}

export default SnackEditForm;