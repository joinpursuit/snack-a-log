import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function SnackNewForm() {
  const [snack, setSnack] = useState({
    name: "",
    fiber: 0,
    protein: 0,
    added_sugar: 0,
    isHealthy: false,
    image: "",
  });
  const navigate = useNavigate();

  const addSnack = () => {
    axios
      .post(`${API}/snacks`, snack)
      .then((response) => navigate(`/snacks`))
      .catch((error) => console.error(error));
  };
  const handleTextChange = (event) => {
    setSnack({ ...snack, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addSnack();
  };
  return (
    <div className='New'>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name:</label>
        <input
          id='name'
          value={snack.name}
          type='text'
          size='50'
          onChange={handleTextChange}
          placeholder='Name of snack'
          required
        />
        <label htmlFor='image'>Image:</label>
        <input
          id='image'
          name='image'
          value={snack.image}
          type='text'
          size='50'
          placeholder='http://'
          pattern='https://.*'
          onChange={handleTextChange}
        />
        <label htmlFor='fiber'>Fiber:</label>
        <input
          id='fiber'
          value={snack.fiber}
          type='number'
          size='50'
          min='0'
          onChange={handleTextChange}
        />
        <label htmlFor='protein'>Protein:</label>
        <input
          id='protein'
          value={snack.protein}
          type='number'
          size='50'
          min='0'
          onChange={handleTextChange}
        />
        <label htmlFor='added_sugar'>Added Sugar:</label>
        <input
          id='added_sugar'
          value={snack.added_sugar}
          type='number'
          size='50'
          min='0'
          onChange={handleTextChange}
        />

        <br />
        <input type='submit' />
      </form>
    </div>
  );
}

export default SnackNewForm;
