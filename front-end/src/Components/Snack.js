import { Link } from "react-router-dom";

function Snack({ snack, index }) {
  return (
    <div>
      <p>{snack.fiber}</p>

      <p>
        <Link to={`/snacks/${index}`}>{snack.name} </Link>
      </p>

      <p>{snack.protein}</p>
    </div>
  );
}

export default Snack;
