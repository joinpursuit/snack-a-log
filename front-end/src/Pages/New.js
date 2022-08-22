import React from "react";
import SnackNewForm from "../Components/SnackNewForm";

const New = () => {
  return (
    <>
      <div className='NewPageInfo'>
        <p>Snack healthy is determined by</p>
        <ul>
          <li>Protein is above 5</li>
          <li>or Fiber is above 5</li>
          <li>and sugar less than 5 </li>
        </ul>{" "}
      </div>
      <SnackNewForm />
    </>
  );
};

export default New;
