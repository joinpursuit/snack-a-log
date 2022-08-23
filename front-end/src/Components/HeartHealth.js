import heartSolid from "../assets/heart-solid.png";
import heartRegular from "../assets/heart-regular.png";

export default function HealthCheck({ snack }) {
  const { protein, fiber, added_sugar } = snack;
  if (added_sugar >= 5) {
    snack.is_healthy = false;
  } else if (protein < 5 && fiber < 5 && added_sugar < 5) {
    snack.is_healthy = false;
  } else if (protein >= 5 || fiber >= 5) {
    snack.is_healthy = true;
  } else {
    snack.is_healthy = null;
  }
  return (
    <span>
      <aside>
        {snack.is_healthy ? (
          <img width={30} height={30} src={heartSolid} alt="healthy food" />
        ) : (
          <img width={30} height={30} src={heartRegular} alt="unhealthy food" />
        )}
      </aside>
    </span>
  );
}
