import { useState } from "react";
import { useParams } from "react-router-dom";
import dataTravle from "../../data/db.json";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import "./TourDetails.css";

function TourDetails() {
    const { id } = useParams();
    const [seeMore, setSeeMore] = useState(true);
    
    const toggleReadMore = () => { setSeeMore(!seeMore); }

    const cityID = dataTravle.find(city => String(city.id) === id);

    return (
        <>
            <Header />
            <div className="class-parent">
                <img src={cityID.image} alt="The image is broken" />
                <div className="class-p" key={cityID.id}>
                    <article>{seeMore? cityID.info.slice(0, 90) : cityID.info}
                    <span className="read" onClick={toggleReadMore}>
                    {seeMore ? " ...read more" : " read less"}
                    </span>
                    </article>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default TourDetails;