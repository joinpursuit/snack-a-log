import axios from "axios";
import { useState, useEffect } from "react";
import Snack from "./Snack";

const API = process.env.REACT_APP_API_URL;

const Snacks = () => {
    const [snacks, setSnacks] = useState([]);

    useEffect(() => {
        axios.get(`${API}/snacks`)
        .then(res => setSnacks(res.data.payload))
        .catch(err => console.error(err))
    }, []);


    return (
        <div className="Snacks">
            {console.log(snacks)}
            {snacks.map(snack => <Snack key={snack.id} snack={snack} />)}
        </div>
    );
};

export default Snacks;