import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const API = process.env.REACT_APP_API_URL;

export default function SnacksEditForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);

  const [snack, setSnack] = useState({
    name: "",
    fiber: "",
    protein: "",
    added_sugar: "",
    is_healthy: null,
    image: "",
  });

  useEffect(() => {
    axios
      .get(`${API}/snacks/${id}`)
      .then((res) => setSnack(res.data.payload))
      .catch((err) => console.log(err));
  }, [id]);

  const updateSnack = (updatedSnack) => {
    axios
      .put(`${API}/snacks/${id}`, updatedSnack)
      .then(() => {
        navigate(`/snacks`);
      })
      .catch((error) => console.log(error));
  };

  const handleTextChange = (e) => {
    setSnack({ ...snack, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!e.target.checkValidity()) {
      e.stopPropagation();
    }
    if (e.target.checkValidity()) {
      updateSnack(snack, id);
    }
    setValidated(true);
  };

  return (
    <div className="form-div">
      <section className="form-health">
        <h3> Snack Health is determined by: </h3>
        <ul>
          <li>Protein is above 5</li>
          <li>Or Fiber is above 5</li>
          <li>and Sugar is less than 5</li>
        </ul>
      </section>
      <br />
      <h1 className="form-h1">Edit the Snack: </h1>
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
          <br />
          <Row>
            <Col md>
              <Form.Group>
                <Form.Label htmlFor="fiber">Fiber:</Form.Label>
                <Form.Control
                  id="fiber"
                  type="number"
                  value={snack.fiber}
                  placeholder="Fiber"
                  min={0}
                  required
                  onChange={handleTextChange}
                />
                <Form.Control.Feedback type="invalid">
                  Please enter a value of 0 or above
                </Form.Control.Feedback>
                <Form.Control.Feedback type="valid">
                  Looks Good!
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <br />
            <Col md>
              <Form.Group>
                <Form.Label htmlFor="protein">Protein:</Form.Label>
                <Form.Control
                  id="protein"
                  type="number"
                  value={snack.protein}
                  placeholder="Protein"
                  min={0}
                  required
                  onChange={handleTextChange}
                />
                <Form.Control.Feedback type="invalid">
                  Please enter a value of 0 or above
                </Form.Control.Feedback>
                <Form.Control.Feedback type="valid">
                  Looks Good!
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <br />
            <Col md>
              <Form.Group>
                <Form.Label htmlFor="added_sugar">Added Sugar:</Form.Label>
                <Form.Control
                  id="added_sugar"
                  type="number"
                  value={snack.added_sugar}
                  placeholder="Added Sugar"
                  min={0}
                  required
                  onChange={handleTextChange}
                />
                <Form.Control.Feedback type="invalid">
                  Please enter a value of 0 or above
                </Form.Control.Feedback>
                <Form.Control.Feedback type="valid">
                  Looks Good!
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>
          <br />
          <Form.Group>
            <Form.Label htmlFor="image">Image:</Form.Label>
            <Form.Control
              id="image"
              type="text"
              pattern="http[s]*://.+"
              value={snack.image}
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
          <br />
          <Button variant="secondary" type="submit">
            Submit
          </Button>
          <Link to={`/snacks/${id}`}>
            <Button variant="secondary" className="ms-2">
              Cancel
            </Button>
          </Link>
        </Form>
      </Container>
    </div>
  );
}
