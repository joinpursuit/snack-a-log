import { useState, useEffect } from "react";

import Snack from "../Components/Snack.js"

import axios from "axios";


const API_URL = process.env.REACT_APP_API_URL;



function Snacks() {

    const [snacks, setSnacks] = useState([]);

    useEffect(() => {
        axios
          .get(`${API_URL}/snacks`)
          .then((res) => setSnacks(res.data))
          .catch((err) => console.error(err));
      }, []);


  return (
    <div>
    <section>
    {snacks.map((snack, index) => {
            return (
              <Snack
                key={index}
                snack={snack}
                index={index}
              />
            );
          })}
    </section>
    </div>
  )
}

export default Snacks