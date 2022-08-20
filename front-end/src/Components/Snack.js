import { Link } from "react-router-dom";

function Snack({ snack, index }) {
  return (
    <div className ='snacks'>
      <Link to={`/snacks/${index}`}>
        <>
          <img src={snack.image} alt={snack.name}></img>
          <p>{snack.name}</p>
        </>
      </Link>
    </div>
  );
}

export default Snack;
