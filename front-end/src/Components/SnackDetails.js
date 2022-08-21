import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import HeartHealth from "./HeartHealth";
import { Button, Card,Container,Row,Col } from 'react-bootstrap';

const API = process.env.REACT_APP_API_URL;

const SnackDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [snack, setSnack] = useState({});

    useEffect(() => {
        axios.get(`${API}/snacks/${id}`)
        .then(response => setSnack(response.data.payload))
        .catch(err => console.error(err))
    }, [id]);


    const handleDelete = () => {
        axios
            .delete(`${API}/snacks/${id}`)
            .then((response) => navigate(`/snaks`))
            .catch((error) => console.log(error));
    };

  return (
    <div className='snack'>
      <Container>
        <Row>
          <Col className="health-msg">
            <h3>
              {snack.is_healthy ? (
                <span>this snack is healthy</span>
              ) : (
                <span>this snack is not healthy</span>
              )}
            </h3>
          </Col>
        </Row>
        <Card className="card" style={{ width: '35rem' }}>
          <Card.Text></Card.Text>
          <Card.Img variant="top" src={snack.image} />
          <Card.Body>
            <Card.Title>
              <h3>{snack.name}</h3>
            </Card.Title>
            <Card.Text>
              <span>
                <HeartHealth snackHealth={snack} />
              </span>
              <h3>Protein: {snack.protein}</h3>
              <h3>Fiber: {snack.fiber}</h3>
              <h3>Added Sugar: {snack.added_sugar}</h3>
            </Card.Text>
            <div className="px-2">
              <Link to="/snacks">
                <Button variant="dark">Back</Button>
              </Link>
              <Link to={`/snacks/${id}/edit`}>
                <Button variant="dark">Edit</Button>
              </Link>
              <Link to="/snacks">
                <Button variant="dark" onClick={handleDelete}>
                  Delete
                </Button>
              </Link>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default SnackDetails;