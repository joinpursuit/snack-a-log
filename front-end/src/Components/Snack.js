import React from "react";
import HeartHealth from "./HeartHealth";
import { Link } from "react-router-dom";
const Snack = ({ snack }) => {
  const { name, is_healthy, image, id } = snack;
  return (
    <article>
      <div className='Snack'>
        <Link to={`/snacks/${id}`}>
          <img src={image} alt={name} />
          <h4>
            <span><HeartHealth snackHealth={is_healthy} /> </span>{name}
          </h4>
        </Link>
      </div>
    </article>
  );
};

export default Snack;
