import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const API = process.env.REACT_APP_API_URL;

export default function SnackNew() {
    const navigate = useNavigate();


    const [snacks, setSnacks] = useState({
        name: '',
        fiber: 0,
        protein: 0,
        added_sugar: 0,
        is_healthy: false,
        image: '',
    });

    const addSnack = () => {
        axios.post(`${API}/snacks`, snacks)
          .then(response => navigate(`/snacks`))
          .catch(error => console.error(error))
      };
    
      const handleTextChange = (event) => {
        setSnacks({ ...snacks, [event.target.id]: event.target.value })
      };
    
      const handleCheckboxChange = () => {
        setSnacks({ ...snacks, is_healthy: !snacks.is_healthy });
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        addSnack();
      };


    return (
        <div className="SnackNew">

            <form onSubmit={handleSubmit}>

                <label htmlFor='name'>Snack Name:</label>
                <input
                    id="name"
                    value={snacks.name}
                    type='text'
                    onChange={handleTextChange}
                    required
                />

                <label htmlFor='fiber'>Fiber:</label>
                <input
                    id="fiber"
                    value={snacks.fiber}
                    type='number'
                    onChange={handleTextChange}
                />

                <label htmlFor='protein'>Protein:</label>
                <input
                    id="protein"
                    value={snacks.protein}
                    type="number"
                    onChange={handleTextChange}
                />

                <label htmlFor='added_sugar'>Added Sugar:</label>
                <input
                    id="added_sugar"
                    value={snacks.added_suagr}
                    type='number'
                    onChange={handleTextChange}
                />

                <label htmlFor="is_healthy">Is Healthy?</label>
                <input
                    id="is_healthy"
                    type="checkbox"
                    onChange={handleCheckboxChange}
                    checked={snacks.is_healthy}
                />

                <label htmlFor='image'>Image URL:</label>
                <input
                    id="image"
                    value={snacks.image}
                    type='text'
                    onChange={handleTextChange}
                    required
                />

                <br />
                <input type='submit' />

            </form>
        </div>
    )
}
