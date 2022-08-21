import axios from "axios";
import { useState, useEffect } from "react";
import Snack from "./Snack";
import Container from "react-bootstrap/Container";
import CardGroup from "react-bootstrap/CardGroup"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const API = process.env.REACT_APP_API_URL;

const Snacks = () => {
  const [snacks, setSnacks] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/snacks`)
      .then((res) => setSnacks(res.data.payload))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="Snacks">
      <Container>
      <Row>
        <Col>
          <CardGroup>
          {snacks.map((snack) => (
            <Snack key={snack.id} snack={snack} />
          ))}
          </CardGroup>
        </Col>
      </Row>
      </Container>
    </div>
  );
};

export default Snacks;
