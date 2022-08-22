import React from "react";
import SnackEditForm from "../Components/SnackEditForm";

const Edit = () => {
  return (
    <div className="EditPage">
      <h3>Edit</h3>
      <div className='NewPageInfo'>
        <p>Snack healthy is determined by</p>
        <ul>
          <li>Protein is above 5</li>
          <li>or Fiber is above 5</li>
          <li>and sugar less than 5 </li>
        </ul>{" "}
      </div>
      <SnackEditForm />
    </div>
  );
};

export default Edit;
