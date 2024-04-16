
import { CDN_URL } from "../utils/constants";

const RestaurentCard = (props) => {
    console.log(props);
    let {name,cuisines,avgRating,cloudinaryImageId,costForTwo}=props?.data

    return (
        <div className="w-64 m-2 rounded-md bg-gray-200 hover:bg-gray-300 pb-10">
            <img src={CDN_URL+cloudinaryImageId} alt="res-logo" className="rounded-md" />
            <h3 className="font-bold py-2 text-lg text-center">{name}</h3>
            <h4 className="text-base text-center">{cuisines.join(', ')}</h4>
            <h4 className="text-base text-center">Ratings: {avgRating}</h4>
            <h4 className="text-base text-center">{costForTwo}</h4>
        </div>
    )
}


export const withPromotedLabel=(RestaurentCard)=>{
    return (props)=>{
        console.log(props);
        return (
            <div>
                <label className="absolute bg-green-700 text-white mx-4 my-2 p-2 rounded-lg">Veg</label>
                <RestaurentCard data={props.data} />
            </div>
        )
    }
}

export default RestaurentCard;