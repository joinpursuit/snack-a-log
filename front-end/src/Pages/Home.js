import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className='WelcomeMsg'>
      <h3>Welcome to Snack-A-Log Awesomeness !!! </h3>
      <p>
        {"To proceed, please select your snack of choice by clicking here -> "}
        <Link to='/snacks'>Show snacks</Link>{" "}
      </p>
      <h4>Or</h4>
      <p>
        {"Add a new snack by clicking here -> "}
        <Link to='/snacks/new'>Add new</Link>{" "}
      </p>
    </div>
  );
};

export default Home;
