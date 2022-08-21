import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL

function SnackNewForm() {
  const [snack, setSnack] = useState({
    name: "",
    fiber: "",
    protien: "",
    added_sugar: "",
    isHealthy: false,
    image: "",
  });
  const navigate = useNavigate();

  const addSnack = () => {
    axios.post(`${API}/snacks`, snack)
      .then(response => navigate(`/snack`))
      .catch(error => console.error(error))
  };
  const handleTextChange = (event) => {
    setSnack({ ...snack, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setSnack({...snack, isHealthy:!snack.isHealthy});
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addSnack();
  };
  return (
    <div className="New">
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
          value={snack.fiber}
          type="number"
          onChange={handleTextChange}
        />
        <label htmlFor="protein">Protein:</label>
        <input
          id="protein"
          value={snack.protien}
          type="number"
          onChange={handleTextChange}
        />
        <label htmlFor="added_sugar">Added Sugar:</label>
        <input
          id="added_sugar"
          value={snack.added_sugar}
          type="number"
          onChange={handleTextChange}
        />
        <label htmlFor="isHealthy">Is Healthy:</label>
        <input
          id="isHealthy"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={snack.isHealthy}
        />
        <label htmlFor="image">Image:</label>
        <input
          id="image"
          name="image"
          value={snack.image}
          type="text"
          onChange={handleTextChange}
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
  
}

  const handleSubmit = (event) => {
    event.preventDefault();
    addSnack();
  };
  return (
    <div className="New">
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
          value={snack.fiber}
          type="text"
          onChange={handleTextChange}
        />
        <label htmlFor="protien">Protien:</label>
        <input
          id="protien"
          value={snack.protien}
          type="text"
          onChange={handleTextChange}
        />
        <label htmlFor="added_sugar">Added Sugar:</label>
        <input
          id="added_sugar"
          value={snack.added_sugar}
          type="text"
          onChange={handleTextChange}
        />
        <label htmlFor="isHealthy">Is Healthy:</label>
        <input
          id="isHealthy"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={snack.isHealthy}
        />
        <label htmlFor="image">Image:</label>
        <input
          id="image"
          name="image"
          value={snack.image}
          type="text"
          onChange={handleTextChange}
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
  
}

export default SnackNewForm;