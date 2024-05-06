import { Link } from "react-router-dom";

export function Tour(props) {
    return (
        
        <div className="parent">
            {props.tour.map((data) => {
                return (
                    <div className="card" key={data.id}>
                        <img src={data.image} alt="The image is broken" />
                        <p>{data.name}</p>
                        <Link className="read-more" to={`/city/${data.id}`}>Read more</Link>
                    </div>
                )
            })}
        </div>
    )
}