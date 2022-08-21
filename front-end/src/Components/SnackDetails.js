import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./SnackDetails.css";

function SnackDetails() {
  const [snack, setSnack] = useState({});
  let { index } = useParams();
  let navigate = useNavigate();

  const API = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios
      .get(`${API}/snacks/${index}`)
      .then((res) => setSnack(res.data))
      .catch((err) => console.error(err));
  }, [index, navigate, API]);

  const deleteSnack = () => {
    axios
      .delete(`${API}snacks/${index}`)
      .then((response) => navigate(`/snacks`))
      .catch((error) => console.error("catch", error));
  };

  const handleDelete = () => {
    deleteSnack();
  };

  // const handleEdit = (index) => {
  //   axios.put(`${API}/snacks/${index}`, snack)
  //   .then((res) => {
  //     setSnack(res.data)
  //     navigate(`/snacks/${index}`)
  //   })
  //   .catch((err) => console.log(err))

  // }

  return (
    <div className="snack-details">
      {/* is_healthy heart */}
      <div className="snack-detail">

      <section className ='snack-visual'>

      <h3 className='snack'>{snack.name} </h3>
      <img src={snack.image} alt={snack.name} />
      </section>
      <section className="snack-info">
      {snack.fiber > 1 ? <h3>Snack Fiber: <br></br><span className='result'>{snack.fiber} grams</span></h3> : <h3>Snack Fiber: <br></br><span className='result'>{snack.fiber} gram</span></h3>}
      {snack.protein > 1 ? <h3>Snack Protein:<br></br> <span className='result'>{snack.protein} grams</span></h3> : <h3>Snack Protein: <br></br><span className='result'>{snack.protein} gram</span></h3>}
      {snack.added_sugar > 1 ? <h3>Snack Added Sugar: <br></br> <span className ='result'>{snack.added_sugar} grams</span></h3> : <h3>Snack Added Sugar: <br></br><span className='result'>{snack.added_sugar} gram</span></h3>}
      </section>
      </div>

      <Link to={`/snacks`}>
        <button className="back-button">Back</button>
      </Link>
      <Link to={`/snacks/${index}/edit`}>
        <button className="edit-button">Edit</button>
      </Link>
      <button className="delete-button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}

export default SnackDetails;
