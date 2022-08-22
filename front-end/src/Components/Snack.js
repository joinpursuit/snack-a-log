import { Link } from "react-router-dom";
import HeartHealth from "./HeartHealth";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

function Snack({ snack }) {
  return (
    <Col xs={2} className='g-4'>
      <Card className="text-center">
        <Card.Img variant="top" src={snack.image} alt="pic"></Card.Img>
        <Card.Title>
          <span>
            <HeartHealth snack={snack} />
          </span>
          <Link to={`/snacks/${snack.id}`}>{snack.name} </Link>
        </Card.Title>
      </Card>
    </Col>
  );
}

export default Snack;
