import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";


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

  //     .then((res) => {
  //       setSnack(res.data);
  //     })
  //     .catch((error) => {
  //       navigate("/not-found");
  //     });
  // }, [index]);

  const deleteSnack = () => {
    axios
      .delete(`${API}snacks/${index}`)
      .then((response) => navigate(`/snacks`))
      .catch((c) => console.error("catch", c));
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
  console.log("Line 49: ",snack.image)
  return (
    <div>
      {/* is_healthy heart */}
      <h3>Snack name: {snack.name} </h3>
      <img src={snack.image}/>
      
      <h3>Snack fiber :{snack.fiber}</h3>
      <h3>Snack protein: {snack.protein}</h3>
      <h3>Snack added sugar {snack.added_sugar}</h3>
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
