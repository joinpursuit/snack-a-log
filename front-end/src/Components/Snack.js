import { Link } from "react-router-dom";
import HeartHealth from "./HeartHealth";
import Card from "react-bootstrap/Card";

function Snack({ snack}) {
  return (
    <Card style={{ width: "20rem" }}>
      <Card.Img variant="top" src={snack.image} alt="pic"></Card.Img>
      <Card.Title>
        <HeartHealth snack={snack} />
        <Link to={`/snacks/${snack.id}`}>{snack.name} </Link>
      </Card.Title>
    </Card>
  );
}

export default Snack;
