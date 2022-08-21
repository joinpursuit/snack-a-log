import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {Button, Form, Container} from 'react-bootstrap'


const API = process.env.REACT_APP_API_URL;

const EditSnackForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [snack, setSnack] = useState({
    name: "",
    protein: 0,
    fiber: 0,
    added_sugar: 0,
    image: '',
  });

  const handleTextChange = (event) => {
    setSnack({ ...snack, [event.target.id]: event.target.value });
  };
    
  useEffect(() => {
    axios.get(`${API}/snacks/${id}`).then(
      (response) => setSnack(response.data.payload),
      (error) => navigate(`/snacks`)
    );
  }, [id, navigate]);
    
    
  const updateSnack = () => {
    axios
      .put(`${API}/snacks/${id}`,snack)
      .then((response) => {
        setSnack(response.data);
        navigate(`/snacks/${id}`)
      })
      .catch((error) => console.log(error));
  };



  const handleSubmit = (event) => {
    event.preventDefault();
    updateSnack(snack, id);
  };

  return (
    <div className="Edit">
      <h1>🥨🍎 Add New Snack 🍎🥨</h1>
      <br />
      <section className="top-note">
        <p>Snack Health is determined by:</p>
        <ul>
          <li>protein is above 5</li>
          <li>or fiber is above 5</li>
          <li>and added sugar is less than 5</li>
        </ul>
      </section>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
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
          <Form.Group className="mb-3">
            <Form.Label htmlFor="name">Image:</Form.Label>
            <Form.Control
              id="image"
              value={snack.image}
              type="text"
              required
              onChange={handleTextChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
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
          <Form.Group className="mb-3">
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
          <Form.Group className="mb-3">
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
          <Button variant="dark" type="submit">
            Submit
          </Button>
        </Form>
        <Link to={`/snacks/${id}`}>
          <Button variant="dark">Cancel</Button>
        </Link>
      </Container>
    </div>
  );
};


export default EditSnackForm;