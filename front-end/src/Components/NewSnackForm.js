import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

const NewSnackForm = () => {
    const [newSnack, setNewSnack] = useState({
        name: "",
        protein: 0,
        fiber: 0,
        added_sugar: 0,
        image: "",
    });
    const navigate = useNavigate();

    const addSnack = () => {
        axios.post(`${API}/snacks`, newSnack)
        .then(res => navigate('/snacks'))
        .catch(err => console.error(err))
    };

    const handleTextChange = (e) => {

    };

    const handleSubmit = (e) => {

    };

    return (
        <div>
            <h1>Add New</h1>
            <p>Snack Health is determined by:</p>
            <ul>
                <li>protein is above 5</li>
                <li>or fiber is above 5</li>
                <li>and added sugar is less than 5</li>
            </ul>
            <form>
                <label>
                    Name:
                <input />
                </label>
                <br />

                <label>
                    Fiber:
                <input />
                </label>
                <br />

                <label>
                    Protein:
                <input />
                </label>
                <br />

                <label>
                    Added Sugar:
                <input />
                </label>
                <br />

                <label>
                    Image:
                <input />
                </label>
                <br />
                <input type="submit" />
                <Link to="/">
                <button>Back</button>
                </Link>
            </form>
        </div>
    );
};

export default NewSnackForm;