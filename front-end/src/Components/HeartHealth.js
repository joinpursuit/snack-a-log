import heartSolid from "../assets/heart-solid.png";
import heartOutline from "../assets/heart-regular.png";

function HeartHealth({ snackHealth }) {
  return (
    <div className="health">
      <p>{snackHealth.is_healthy ? <img src={heartSolid} alt="solid-heart" /> : <img src={heartOutline} alt="outlined-heart" />}</p>
    </div>
  );
}

export default HeartHealth;
