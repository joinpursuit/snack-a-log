import HeartHealth from "./HeartHealth";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Snack = ({ snack }) => {
  return (
    <div className="Snack">
      <Card style={{ width: "25rem" }}>
        <Card.Img variant="top" src={snack.image} alt={snack.name} />
        <Card.Body>
          <Card.Title>
            <HeartHealth snackHealth={snack} /> 
            <h4>{snack.name}</h4>
          </Card.Title>
          <Link to={`/snacks/${snack.id}`}>
            <Button variant="dark">See Snack</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Snack;
