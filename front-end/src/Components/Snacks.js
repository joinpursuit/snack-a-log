//we are detructoring useState and useEffect, importing from react
import { useState, useEffect } from "react";
//importing snacks.js and calling it Snack
import Snack from "../Components/Snack.js";
//importing Snacks CSS
import "./Snacks.css";
//importing axios
import axios from "axios";

//creating the variable API and setting it equal to process.env.REACT_APP_API_URL
const API = process.env.REACT_APP_API_URL;

//creating the function Snacks
function Snacks() {
  //invoking useState and setting the variable snack to an object and setSnack which updates the component
  const [snacks, setSnacks] = useState([]);

  //useEffect is invoked and within the it we have 2 parameters our axios that fetches our API and array of dependencies
  //then we are updating the variable using setSnack SETTING it equal to res.data
  //adding a catch to notify when an error occurs
  useEffect(() => {
    axios
      .get(`${API}/snacks`)
      .then((res) => setSnacks(res.data.payload))
      .catch((err) => console.error(err));
  }, []);
  console.log(snacks);

  return (
    <div>
      <section className='snacks-index'>
        {snacks.map((snack, index) => {
          return <Snack snack={snack} />;
        })}
      </section>
    </div>
  );
}

export default Snacks;
