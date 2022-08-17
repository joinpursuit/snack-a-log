import { useState, useEffect } from "react";

import { useParams, Link, useNavigate } from "react-router-dom";

import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;


function SnackEditForm() {

    let { index } = useParams();

    const navigate = useNavigate;

    const [snack, setSnacks] = useState({
        name: "",
        fiber: "",
        protein: "",
        added_sugar: "",
      });


      useEffect(() => {
        axios
          .get(`${API_URL}/snacks/${index}`)
          .then((res) => setSnacks(res.data))
          .catch((error) => console.error(error));
      }, [index]);


      const updateSnack = () => {
        axios
          .put(`${API_URL}/snacks/${index}`,snack)
          .then((res) => {
            setSnacks(res.data);
            navigate(`/snacks/${index}`);
          })
          .catch((error) => console.error(error));
      };

      const handleTextChange = (event) => {
        setSnacks({ ...snack, [event.target.id]: event.target.value });
      };
    
      const handleNumberChange = (event) => {
        setSnack({
          ...snack,
          [event.target.id]: Number(event.target.value),
        });
      };
      
      const handleSubmit = (e) => {
        e.preventDefault();
        updateSnack();
      };
  return (
    <div className="edit">
<fieldset>
      <h1>Edit Snack</h1>
      <form onSubmit={handleSubmit}>
      <label>Snack</label>
        <input
          id="name"
          value={snack.name}
          type="text"
          placeholder="Name"
          onChange={handleTextChange}
        />
        <label>Fiber</label>
        <input
          id="fiber"
          value={snack.fiber}
          type="text"
          placeholder="Name"
          onChange={handleTextChange}
        />
        <label>Protein</label>
        <input
          id="protein"
          value={snack.protein}
          type="protein"
          placeholder="Protein"
          onChange={handleNumberChange}
        />
        <label>Added Sugar</label>
        <input
          id="added_sugar"
          value={snack.added_sugar}
          type="added_sugar"
          placeholder="Added_Sugar"
          onChange={handleTextChange}
        />
        <br />
        <br></br>
        <input type="submit" />
      </form>
      <br></br>
      <Link to={`/snacks/${index}`}>
        <button>BACK</button>
      </Link>
      </fieldset>
    </div>
  )
}

export default SnackEditForm