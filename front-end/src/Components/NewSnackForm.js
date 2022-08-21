import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

const API = process.env.REACT_APP_API_URL;

const NewSnackForm = () => {
  const [newSnack, setNewSnack] = useState({
    name: "",
    fiber: 0,
    protein: 0,
    added_sugar: 0,
    image: "",
  });
  const navigate = useNavigate();

  const addSnack = () => {
    axios
      .post(`${API}/snacks`, newSnack)
      .then((res) => navigate("/snacks"))
      .catch((err) => console.error(err));
  };

  const handleTextChange = (e) => {
    setNewSnack({ ...newSnack, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addSnack();
  };

  return (
    <div className="New">
      <h1>🥨🍎 Add New Snack 🍎🥨</h1>
      <br/>
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
            <Form.Label>Name:</Form.Label>
            <Form.Control
              type="text"
              placeholder="..."
              id="name"
              value={newSnack.name}
              onChange={handleTextChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Image:</Form.Label>
            <Form.Control
              type="text"
              placeholder="https://..."
              id="image"
              value={newSnack.image}
              onChange={handleTextChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Fiber:</Form.Label>
            <Form.Control
              type="number"
              placeholder="0"
              id="protein"
              value={newSnack.protein}
              onChange={handleTextChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Protein:</Form.Label>
            <Form.Control
              type="number"
              placeholder="0"
              id="added_sugar"
              value={newSnack.added_sugar}
              onChange={handleTextChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Added Sugar:</Form.Label>
            <Form.Control
              type="number"
              placeholder="0"
              id="fiber"
              value={newSnack.fiber}
              onChange={handleTextChange}
            />
          </Form.Group>

          <Button variant="dark" type="submit">
            Submit
          </Button>
          <Link to="/">
            <Button variant="dark" type="submit">
              Go Back
            </Button>
          </Link>
        </Form>
      </Container>
    </div>
  );
};

export default NewSnackForm;
