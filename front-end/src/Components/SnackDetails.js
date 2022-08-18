import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import HeartHealth from "./HeartHealth";

const API = process.env.REACT_APP_API_URL;

const SnackDetails = () => {
    const [snack, setSnack] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${API}/snacks/${id}`)
        .then(res => setSnack(res.data.payload))
        .catch(err => console.error(err))
    }, [id]);

    return (
        <div>
            <img src={snack.image} />
            <h1>{snack.name}</h1>
            <HeartHealth snackHealth={snack} />
            <p>Protein: {snack.protein}</p>
            <p>Fiber: {snack.fiber}</p>
            <p>Added Sugar: {snack.added_sugar}</p>
            <Link to="/">
            <button>Back</button>
            </Link>
            <Link to="/">
            <button>Edit</button>
            </Link>
            <Link to="/">
            <button>Delete</button>
            </Link>
        </div>
    );
};

export default SnackDetails;