import { useState, useEffect } from "react";
import Snack from "../Components/Snack.js";
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

  return (
    <div>
      <section>
        {snacks.map((snack, id) => {
          return <Snack key={id} snack={snack} id={id} />;
        })}
      </section>
    </div>
  );
}

export default Snacks;
