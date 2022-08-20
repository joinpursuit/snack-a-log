import React from 'react'
import axios from "axios"
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

function SnackDetails() {
  const [snack, setSnack] = useState([]);
  let { id } = useParams();
  let navigate = useNavigate();
  const API = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios.get(`${API}/snacks/${id}`).then((response) => {
      setSnack(response.data);
    });
  }, [id, navigate, API]);
  const deleteSnack = () => {
    axios
      .delete(`${API}/snacks/${id}`)
      .then(() => {
        navigate(`/snacks`);
      })
      .catch((c) => console.error("catch", c));
  };
  const handleDelete = () => {
    deleteSnack();
  };
  return (
    <>
      <article>
        <aside>
          {snack.is_healthy ? <img src='../heart-solid.png' alt='healthy food'></img> : <img src='../heart-regular.png' alt='unhealthy food'></img>} {snack.name}
        </aside>
        <div>
                  <h6>Fiber: {snack.fiber}</h6>
        </div>
        <div>
               <h6>Protein: {snack.protein}</h6>
        </div>
   <div>
            <h6>Added Sugar: {snack.added_sugar}</h6>
   </div>
   <div>
            <img src={snack.image} alt={snack.name}></img>
   </div>
          <div>
            <Link to={`/snacks`}>
              <button>Back</button>
            </Link>
          </div>
          <div>
            <Link to={`/snacks/${snack.id}/edit`}>
              <button>Edit</button>
            </Link>
          </div>
          <div>
            <button onClick={handleDelete}>Delete</button>
          </div>
      </article>
    
    </>
  )
}

export default SnackDetails