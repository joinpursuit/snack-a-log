import { useEffect, useState } from "react";
import Snack from "./Snack";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

const Snacks = () => {
  const [snacks, setSnacks] = useState([]);
  useEffect(() => {
    axios
      .get(`${API}/snacks`)
      .then((response) => {
        setSnacks(response.data.payload);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [snacks]);

  return (
    <>
      {snacks.map((snack) => {
        return <Snack key={snack.id} id ={snack.id} snack={snack} />;
      })}
    </>
  );
};

export default Snacks;
