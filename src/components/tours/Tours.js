import dataTravle from "../../data/db.json";
import "./Tours.css";

function Tours () {
    return (
        <div className="parent">
        {dataTravle.map((data) => { 
            return (
            <div className="card">
                <img src={data.image} alt="The image is broken"/>
                <p>{data.name}</p>
            </div>
            )
        })}
        </div>
    )
}

export default Tours;