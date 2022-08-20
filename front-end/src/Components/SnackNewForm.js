import React from 'react'
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function SnackNewForm() {
  let navigate = useNavigate();

  const [snack, setSnack] = useState({
    name: "",
    fiber: "",
    protein: "",
    added_sugar: "",
    is_healthy: false,
    image: ""
  });

  const addSnack = (newSnack) => {
    axios
    .post(`${API}/snacks`, newSnack)
    .then(
      () => {
        navigate(`/snacks`);
      },
      (error) => console.error(error)
    )
      .catch((c) => console.warn("catch", c));
  };

  const handleTextChange = (event) => {
    setSnack({ ...snack, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addSnack(snack);
  };
  return (
    <div className="New">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={snack.name}
          type="text"
          onChange={handleTextChange}
          required
        />
        <label htmlFor="fiber">Fiber:</label>
        <input
          id="fiber"
          type="number"
          onChange={handleTextChange}
        />
        <label htmlFor="protein">Protein:</label>
        <input
          id="protein"
          type="number"
          onChange={handleTextChange}
        />
        <label htmlFor="added_sugar">Added Sugar:</label>
        <input
          id="added_sugar"
          type="number"
          onChange={handleTextChange}
        />
        <label htmlFor="image">Image:</label>
        <input
          id="image"
          type="file"
          value={snack.image}
          onChange={handleTextChange}
        />  
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default SnackNewForm