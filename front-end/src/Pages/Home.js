import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/esm/Container";
import axios from "axios";
import { useState, useEffect } from "react";

const API = process.env.REACT_APP_API_URL;

const Home = () => {
  const [snacks, setSnacks] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/snacks`)
      .then((res) => setSnacks(res.data.payload))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="Home">
      <h1>✏️🍿 Welcome to the Snack-A-Log! 🍿✏️</h1>
      <br />
      <Container>
        <Carousel variant="dark">
          {snacks.map((snack) => {
            return (
              <Carousel.Item style={{'height':"550px"}}>
                <img
                style={{'height':"550px"}} 
                  className="d-block w-100"
                  src={snack.image}
                  alt={snack.name}
                />
                <Carousel.Caption>
                  <h3>{snack.name}</h3>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </Container>
    </div>
  );
};

export default Home;
