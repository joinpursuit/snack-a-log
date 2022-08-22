import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import HealthCheck from "./HeartHealth";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

const API = process.env.REACT_APP_API_URL;

export default function SnackDetails() {
  const [snack, setSnack] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/snacks/${id}`)
      .then((res) => setSnack(res.data.payload))
      .catch((err) => console.log(err));
  }, [id]);

  const handleDelete = () => {
    axios
      .delete(`${API}/snacks/${id}`)
      .then((res) => navigate("/snacks"))
      .catch((err) => console.log(err));
  };

  return (
    <Container className=" text-center" fluid>
      <article>
        <div>
          <h2>{snack.name}</h2>
          <img src={snack.image} alt={snack.name} />
          <div className="showNavigation">
            <aside>
              <HealthCheck snack={snack} />
            </aside>
            <h3>Protein: {snack.protein}g</h3>
            <h3>Fiber: {snack.fiber}g</h3>
            <h3>Added Sugar: {snack.added_sugar}g</h3>
            <div>
              {" "}
              <Link to={`/snacks`}>
                <Button variant="outline-dark" className="me-4 mt-4">Back</Button>
              </Link>
            </div>
            <div>
              <Link to={`/snacks/${id}/edit`}>
                <Button variant="outline-dark" className="me-4 mt-4">Edit</Button>
              </Link>
            </div>
            <div>
              <Button variant="outline-dark" className="mt-4" onClick={handleDelete}>
                Delete
              </Button>
            </div>
          </div>
        </div>
      </article>
    </Container>
  );
}
