import { useState, useEffect } from "react";

import Snack from "../Components/Snack.js";
import "./Snacks.css";

import axios from "axios";

const API = process.env.REACT_APP_API_URL;

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
          return <Snack index={index} snack={snack} />;
        })}
      </section>
    </div>
  );
}

export default Snacks;
