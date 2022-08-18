import HeartHealth from "./HeartHealth";

const Snack = ({snack}) => {
    return (
        <div>
            <img src={snack.image} alt="" />
            <p><a href={`/snacks/${snack.id}`}>{snack.name}</a></p>
            <HeartHealth snackHealth={snack}/>
        </div>
    );
};

export default Snack;