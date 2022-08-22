import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/esm/Container";

const API = process.env.REACT_APP_API_URL;

function SnacksNewForm() {
  let navigate = useNavigate();
  const [validated, setValidated] = useState(false);

  const addSnack = (newSnack) => {
    axios
      .post(`${API}/snacks`, newSnack)
      .then(() => navigate(`/snacks`))
      .catch((error) => console.log(error));
  };

  const [snack, setSnack] = useState({
    name: "",
    fiber: 0,
    protein: 0,
    added_sugar: 0,
    is_healthy: null,
    image: "",
  });

  const handleTextChange = (e) => {
    setSnack({ ...snack, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!e.target.checkValidity()) {
      e.stopPropagation();
    }
    if (e.target.checkValidity()) {
      addSnack(snack);
    }
    setValidated(true);
  };

  return (
    <div>
      <section>
        <h3> Snack Health is determined by: </h3>
        <ul>
          <li>Protein is above 5</li>
          <li>Or Fiber is above 5</li>
          <li>and Sugar is less than 5</li>
        </ul>
      </section>
      <br />
      <h1>Add New Snack: </h1>
      <Container>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label htmlFor="name">Name:</Form.Label>
            <Form.Control
              id="name"
              type="text"
              value={snack.name}
              placeholder="Name"
              onChange={handleTextChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please add a name
            </Form.Control.Feedback>
            <Form.Control.Feedback type="valid">
              Looks Good!
            </Form.Control.Feedback>
          </Form.Group>
          <br/>
          <Row>
            <Col md>
              <Form.Group>
                <Form.Label htmlFor="fiber">Fiber:</Form.Label>
                <Form.Control
                  id="fiber"
                  type="number"
                  value={snack.fiber}
                  placeholder="Fiber"
                  onChange={handleTextChange}
                />
              </Form.Group>
            </Col>
            <br/>
            <Col md>
              <Form.Group>
                <Form.Label htmlFor="protein">Protein:</Form.Label>
                <Form.Control
                  id="protein"
                  type="number"
                  value={snack.protein}
                  placeholder="Protein"
                  onChange={handleTextChange}
                />
              </Form.Group>
            </Col>
            <br/>
            <Col md>
              <Form.Group>
                <Form.Label htmlFor="added_sugar">Added Sugar:</Form.Label>
                <Form.Control
                  id="added_sugar"
                  type="number"
                  value={snack.added_sugar}
                  placeholder="Added Sugar"
                  onChange={handleTextChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <br/>
          <Form.Group>
            <Form.Label htmlFor="image">Image:</Form.Label>
            <Form.Control
              id="image"
              type="text"
              value={snack.image}
              pattern="http[s]*://.+"
              placeholder="http://"
              onChange={handleTextChange}
            />
            <Form.Control.Feedback type="invalid">
              Please add a valid url
            </Form.Control.Feedback>
            <Form.Control.Feedback type="valid">
              Looks Good!
            </Form.Control.Feedback>
          </Form.Group>
          <br/>
          <Button variant="secondary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default SnacksNewForm;
