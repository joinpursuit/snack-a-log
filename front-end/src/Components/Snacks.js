import axios from "axios";
import { useState, useEffect } from "react";

const API = process.env.REACT_APP_API_URL;

function Snacks() {
  const [snacks, setSnacks] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/snacks`)
      .then((response) => setSnacks(response.data.payload))
      .catch((c) => console.log(c));
  }, []);

  console.log(snacks)

  return (
    <div className='Snacks'>
      {snacks.map(snack => {
        return (
          <div key={`${snack.id}`} className="Snack">
            <a href={`/snacks/${snack.id}`}>
              <article>
                <h4>{snack.name}</h4>
                <div>
                  <span><img src={`${snack.image}`} alt={snack.is_healthy ? "healthy food" : "unhealthy food"}></img></span>
                </div>
              </article>
            </a>
          </div>)
      })}
    </div>
  )
}

export default Snacks