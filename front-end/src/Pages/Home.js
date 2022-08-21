import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className='WelcomeMsg'>
      <h2>Welcome to Snack-A-Log Awesomeness !!! </h2>
      <p>
        To proceed, please select your snack after clicking{" "}
        <Link to='/snacks'>here</Link>{" "}
      </p>
    </div>
  );
};

export default Home;
