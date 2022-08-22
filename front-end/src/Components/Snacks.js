import { useState, useEffect } from "react";
import Snack from "../Components/Snack.js";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";


const API = process.env.REACT_APP_API_URL;

function Snacks() {
  const [snacks, setSnacks] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/snacks`)
      .then((res) => setSnacks(res.data.payload))
      .catch((err) => console.error(err));
  }, []);

  return (
      <Container fluid>
        <Row className="g-2">
          {snacks.map((snack, id) => {
            return <Snack key={id} snack={snack} id={id} />;
          })}
        </Row>
      </Container>
  );
}

export default Snacks;
