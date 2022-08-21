//we are detructoring useState and useEffect, importing from react
import { useState, useEffect } from "react";
//importing snacks.js and calling it Snack
import Snack from "../Components/Snack.js";
//importing Snacks CSS
import "./Snacks.css";
//importing axios
import axios from "axios";

//creating the variable API and setting it equal to process.env.REACT_APP_API_URL
const API = process.env.REACT_APP_API_URL;

//creating 
function Snacks() {
  const [snacks, setSnacks] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/snacks`)
      .then((res) => setSnacks(res.data))
      .catch((err) => console.error(err));
  }, []);
  console.log(snacks);

  return (
    <div>
      <section className='snacks-index'>
        {snacks.map((snack, index) => {
          return <Snack snack={snack} />;
        })}
      </section>
    </div>
  );
}

export default Snacks;
