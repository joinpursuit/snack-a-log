import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function SnackEditForm() {
  let { id } = useParams();
  const navigate = useNavigate();

  const [snack, setSnack] = useState({
    name: "",
    fiber: "",
    protein: "",
    added_sugar: "",
    is_healthy: false,
    image: "",
  });

  const handleTextChange = (event) => {
    setSnack({ ...snack, [event.target.id]: event.target.value });
  };

  useEffect(() => {
    axios
      .get(`${API}/snacks/${id}`)
      .then((response) => setSnack(response.data.payload))
      .catch((error) => console.error(error));
  }, [id]);
  const updateSnack = () => {
    axios
      .put(`${API}/snacks/${id}`, snack)
      .then((response) => {
        setSnack(response.data);
        navigate(`/snacks`);
      })
      .catch((error) => console.error(error));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateSnack();
  };
  return (
    <div className='Edit'>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name :</label>
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
          name='image'
          id='image'
          type='text'
          size='50'
          value={snack.image}
          placeholder='http://'
          pattern='https://.*'
          onChange={handleTextChange}
        />
        <label htmlFor='fiber'>Fiber : </label>
        <input
          id='fiber'
          type='number'
          min='0'
          value={snack.fiber}
          onChange={handleTextChange}
        />
        <label htmlFor='protein'>Protein:</label>
        <input
          id='protein'
          type='number'
          min='0'
          value={snack.protein}
          onChange={handleTextChange}
        />
        <label htmlFor='added_sugar'>Added Sugar:</label>
        <input
          id='added_sugar'
          type='number'
          min='0'
          value={snack.added_sugar}
          onChange={handleTextChange}
        />

        <br />

        <input type='submit' />
      </form>
      <Link to={`snacks/${id}`}></Link>
    </div>
  );
}

export default SnackEditForm;
