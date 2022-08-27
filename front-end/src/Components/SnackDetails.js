import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import HeartHealth from "./HeartHealth";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;
const SnackDetails = () => {
  const [snack, setSnack] = useState([]);
  let { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    let isMounted = true;
    axios
      .get(`${API}/snacks/${id}`)
      .then((response) => {
        if (isMounted) setSnack(response.data.payload);
      })
      .catch((error) => console.error(error));
    return () => {
      isMounted = false;
    }; 
  }, [id, navigate]);

  const handleDelete = () => {
    axios
      .delete(`${API}/snacks/${id}`)
      .then((response) => navigate(`/snacks`))
      .catch((error) => console.snack(error));
  };
  const { name, fiber, protein, added_sugar, is_healthy, image } = snack;
  return (
    <article className='Show'>
      {is_healthy ? (
        <p className='Healthy'>This snack is healthy! </p>
      ) : (
        <p className='NotHealthy'>This snack is not healthy!</p>
      )}

      <aside>
        <HeartHealth snackHealth={is_healthy} />
      </aside>
      <h5>{name}</h5>
      <div>
        <img className='ShowImg' src={image} alt={name} srcSet={image} />

        <p>Protein: {protein}</p>
        <p>Fiber: {fiber}</p>
        <p>Added Sugar: {added_sugar}</p>
      </div>
      <div className='showNavigation'>
        <div>
          {" "}
          <Link to={`/snacks`}>
            <button>Back</button>
          </Link>
        </div>
        <div>
          {" "}
          <Link to={`/snacks/${id}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <div>
          {" "}
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </article>
  );
};

export default SnackDetails;
