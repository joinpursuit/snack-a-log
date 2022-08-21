import heartSolid from "../assets/heart-solid.png";
import heartOutline from "../assets/heart-regular.png";

function HeartHealth({ snackHealth }) {

  return (
  
    <div>
      {snackHealth.is_healthy ? <img src={heartSolid} alt="solid-heart" /> : <img src={heartOutline} alt="outlined-heart" />}
      </div>
  
  );
}

export default HeartHealth;
