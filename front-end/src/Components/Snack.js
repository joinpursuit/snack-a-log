import { Link } from "react-router-dom";

function Snack({ snack, index }) {
  return (
    <div>
      {/* <ul>{`/transactions/${index}`}</ul> */}
      <p>{snack.fiber}</p>

      <p>
        <Link to={`/snacks/${index}`}>{snack.name} </Link>
      </p>

      <p>{snack.protein}</p>

      {/* <li>{transaction.date}<br></br>{transaction.item_name}<br></br>{transaction.amount}</li> */}
    </div>
  );
}

export default Snack;
