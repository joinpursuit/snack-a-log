import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import HeartHealth from "./HeartHealth";
import { Button, Card } from 'react-bootstrap';

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
      <Card className="card" style={{ width: '30rem' }}>
        <Card.Img variant="top" src={snack.image} />
        <Card.Body>
          <Card.Title>{snack.name}</Card.Title>
          <Card.Text>
            <span>
              <HeartHealth snackHealth={snack} />
            </span>
            <h3>Protein: {snack.protein}</h3>
            <h3>Fiber: {snack.fiber}</h3>
            <h3>Added Sugar: {snack.added_sugar}</h3>
          </Card.Text>
          <Link to="/snacks">
            <Button variant="primary">Back</Button>
          </Link>
          <Link to={`/snacks/${id}/edit`}>
            <Button variant="primary">Edit</Button>
          </Link>
          <Link to="/snacks">
            <Button onClick={handleDelete}>Delete</Button>
          </Link>
        </Card.Body>
      </Card>
    );
};

export default SnackDetails;