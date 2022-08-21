//Importing React detructoring the library to pulling { useState, useEffect } from 'react'
//Importing react-router-dom to destructor {Link, useParams, useNavigate}
//Importing axios from axios
//Importing SnackDetails Css

import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./SnackDetails.css";

//Created the function SnackDetails

function SnackDetails() {
  //invoking useState and setting the variable snack to an object and setSnack which updates the component
  const [snack, setSnack] = useState({});
  //creates a variable, destructors index from the URL parameter by invoking useParams()
  let { index } = useParams();
  //created the variable navigate and setting it equal to the invoked UseNavigate()
  let navigate = useNavigate();
  //create the variable API setting it equal to process.env.REACT_APP_API_URL
  const API = process.env.REACT_APP_API_URL;

  //useEffect is invoked and within the it we have 2 parameters our axios that fetches our API and array of dependencies
  //then we are updating the variable using setSnack SETTING it equal to res.data
  //adding a catch to notify when an error occurs
  useEffect(() => {
    axios
      .get(`${API}/snacks/${index}`)
      .then((res) => setSnack(res.data))
      .catch((err) => console.error(err));
  }, [index, navigate, API]);

  //created a variable deleteSnack that calls axios and CRUD functionality Delete specifying what specifically should be deleted via the string within the parameter
  //then setting the response to navigate to route to snacks
  //catches if there is an error
  const deleteSnack = () => {
    axios
      .delete(`${API}snacks/${index}`)
      .then((response) => navigate(`/snacks`))
      .catch((error) => console.error("catch", error));
  };
  handleDelete =()=>{
    deleteSnack()
  }

  
  return (
    <div className="snack-details">
      {/* is_healthy heart */}
      <div className="snack-detail">

      <section className ='snack-visual'>

      <h3 className='snack'>{snack.name} </h3>
      <img src={snack.image} alt={snack.name} />
      </section>
      <section className="snack-info">

      {/* created a ternary if the value is greater than 1 then gram is grams*/}
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
