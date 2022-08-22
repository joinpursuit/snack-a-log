import { Link } from "react-router-dom";
import HeartHealth from "./HeartHealth";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

function Snack({ snack }) {
  return (
    <Col xs={'auto'} md={'auto'} lg={'auto'} className='g-4'>
      <Card className="text-center snack-cards">
        <Card.Img style={{ width: '19rem' }} variant="top" src={snack.image} alt="pic"></Card.Img>
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
