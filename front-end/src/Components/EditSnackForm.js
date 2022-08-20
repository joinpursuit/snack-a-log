import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {Button, Form} from 'react-bootstrap'


const API = process.env.REACT_APP_API_URL;

const EditSnackForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [snack, setSnack] = useState({
    name: '',
    protein: 0,
    fiber: 0,
    added_sugar: 0,
    image: '',
  });

  const updateSnack = () => {
    axios
      .put(`${API}/snacks/${id}`, snack)
      .then((response) => {
        setSnack(response.data.payload);
        navigate(`/snacks/${id}`);
      })
      .catch((error) => console.log(error));
  };

  const handleTextChange = (event) => {
    setSnack({ ...snack, [event.target.id]: event.target.value });
  };

  useEffect(() => {
    axios
      .get(`${API}/snacks/${id}`)
      .then((response) => setSnack(response.data.payload))
      .catch((error) => console.log(error));
  }, [id, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateSnack(snack, id);
  };

  return (
    <div className="snack-edit">
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label htmlFor="name">Name:</Form.Label>
          <Form.Control
            id="name"
            value={snack.name}
            type="text"
            required
            onChange={handleTextChange}
            placeholder="Snack Name"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="name">Image:</Form.Label>
          <Form.Control
            id="image"
            value={snack.image}
            type="text"
            required
            onChange={handleTextChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="protein">Protein:</Form.Label>
          <Form.Control
            id="protein"
            value={snack.protein}
            type="number"
            required
            onChange={handleTextChange}
            placeholder="Protein Amount"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="name">Fiber:</Form.Label>
          <Form.Control
            id="fiber"
            value={snack.fiber}
            type="number"
            required
            onChange={handleTextChange}
            placeholder="Fiber Amount"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="added_sugar">Added Sugar:</Form.Label>
          <Form.Control
            id="added_sugar"
            value={snack.added_sugar}
            type="number"
            required
            onChange={handleTextChange}
            placeholder="Added Sugar Amount"
          />
        </Form.Group>
        <br />
        <Button variant="info" type="submit">
          Submit
        </Button>
      </Form>
      <Link to={`/snacks/${id}`}>
        <Button variant="info">Cancel</Button>
      </Link>
    </div>
  );
};


export default EditSnackForm;