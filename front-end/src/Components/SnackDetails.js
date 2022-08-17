import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;



function SnackDetails() {
    const [snack, setSnacks] = useState({});
    let { index } = useParams();
    const navigate = useNavigate();


    useEffect(() => {
        axios
          .get(`${API_URL}/snacks/${index}`)
          .then((res) => {
            setSnacks(res.data);
          })
          .catch((error) => {
            navigate("/not-found");
          });
      }, [index,]);

      const handleDelete = () => {
        axios
          .delete(`${API_URL}snacks/${index}`)
          .then((response) => navigate(`/snacks`))
          .catch((error) => console.error(error));
      };
      

  return (
    <div>
         <h3>{snack.name}</h3>
      <h3>{snack.fiber}</h3>
      <h3>${snack.protein}</h3>
      <h3>{snack.added_sugar}</h3>
      <Link to={`/snacks`}>
        <button className="back-button">Back</button>
      </Link>
      <Link to={`/snacks/${index}/edit`}>
        <button className="edit-button">Edit</button>
      </Link>
      <button className="delete-button" onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default SnackDetails