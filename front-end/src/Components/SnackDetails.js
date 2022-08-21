import { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import HealthCheck from './HeartHealth';
import axios from 'axios';
import Button  from 'react-bootstrap/Button';

const API = process.env.REACT_APP_API_URL;

export default function SnackDetails() {

  const [snack, setSnack] = useState({}); 
  const { id } = useParams(); 
  const navigate = useNavigate(); 

  useEffect(() => {
    axios.get(`${API}/snacks/${id}`)
    .then((res) => setSnack(res.data.payload))
    .catch((err) => console.log(err))
  }, [id])

  const handleDelete = () => {
    axios.delete(`${API}/snacks/${id}`)
    .then((res) => navigate('/snacks'))
    .catch((err) => console.log(err))
  }

  return (
    <>
    {console.log(snack)}
    {console.log(snack.id)}
      <article>
        <h2>{snack.name}</h2>
        <img src={snack.image} alt="pic" />
        <div className="showNavigation">
          <section>
            <HealthCheck snack={snack} />
          </section>

          <h3>Protein: {snack.protein}g</h3>
          <h3>Fiber: {snack.fiber}g</h3>
          <h3>Added sugar: {snack.added_sugar}g</h3>
          <div>
            {" "}
            <Link to={`/snacks`}>
              <Button>Back</Button>
            </Link>
          </div>
          <div>
            <Link to={`/snacks/${id}/edit`}>
              <Button>Edit</Button>
            </Link>
          </div>
          <div>
            <Button onClick={handleDelete}>Delete</Button>
          </div>
        </div>
      </article>
    </>
  );
}
