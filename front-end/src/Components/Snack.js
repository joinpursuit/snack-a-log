import { Link } from "react-router-dom";

function Snack({ snack, index }) {
  return (
    <div>
        <Link to={`/snacks/${index}`}>
        <>
      <img src={snack.image} alt={snack.name}></img>

          <p>{snack.name}</p> 
        </>
          </Link>
    
      {/* <li>{transaction.date}<br></br>{transaction.item_name}<br></br>{transaction.amount}</li> */}
    </div>
  );
}

export default Snack;
