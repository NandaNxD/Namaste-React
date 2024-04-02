import { Link } from "react-router-dom";
import { CDN_URL } from "../utils/constants";

const RestaurentCard = (props) => {
    let {name,cuisines,avgRating,cloudinaryImageId,costForTwo}=props?.data

    return (
        <Link to={'/restaurant/'+props.data.id}>
        <div className="res-card" style={{ background: '#f0f0f0' }}>
            <img src={CDN_URL+cloudinaryImageId} alt="res-logo" className="res-logo" />
            <h3>{name}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h4>Ratings: {avgRating}</h4>
            <h4>{costForTwo}</h4>
        </div>
        </Link>
    )
}

export default RestaurentCard;