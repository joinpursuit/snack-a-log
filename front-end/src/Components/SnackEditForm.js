import { useState, useEffect } from "react";

import { useParams, Link, useNavigate } from "react-router-dom";

import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;


function SnackEditForm() {

    let { index } = useParams();
console.log(index,"PPPPPPPPP")
    const navigate = useNavigate;

    const [snack, setSnack] = useState({
        name: "",
        fiber: "",
        protein: "",
        added_sugar: "",
      });


      useEffect(() => {
        axios
          .get(`${API_URL}/snacks/${index}`)
          .then((res) => setSnack(res.data))
          .catch((error) => console.error(error));
      }, [index]);


      const updateSnack = () => {
        axios
          .put(`${API_URL}/snacks/${index}`,snack)
          .then((res) => {
            setSnack(res.data);
            navigate(`/snacks/${index}`);
          })
          .catch((error) => console.error(error));
      };

      const handleTextChange = (event) => {
        setSnack({ ...snack, [event.target.id]: event.target.value });
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
          type="number"
          placeholder="Name"
          onChange={handleNumberChange}
        />
        <label>Protein</label>
        <input
          id="protein"
          value={snack.protein}
          type="number"
          placeholder="Protein"
          onChange={handleNumberChange}
        />
        <label>Added Sugar</label>
        <input
          id="added_sugar"
          value={snack.added_sugar}
          type="number"
          placeholder="Added_Sugar"
          onChange={handleNumberChange}
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