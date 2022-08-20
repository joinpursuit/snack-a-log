import { Link } from "react-router-dom";

function Snack({ snack }) {
  // console.log(`name is ${JSON.stringify(snack)} and index is: ${index}`)
  console.log(`Line 5: ${snack.image}`)
  return (
    
    <div className ='snacks'>
    
      <Link to={`/snacks/${snack.id}`}>
        <>
        
          <img src={snack.image}  alt={snack.name}></img>
          <p>{snack.name}</p>
        </>
      </Link>
    </div>
  );
}

export default Snack;
