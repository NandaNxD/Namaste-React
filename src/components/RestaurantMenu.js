import { useEffect, useState } from "react"
import Shimmer from "./Shimmer";
import { CDN_URL } from "../utils/constants";
import {useParams} from 'react-router-dom'
import MenuItem from "./MenuItem";

const RestaurantMenu = () => {
    const [resInfo,setResInfo]=useState(null);

    const {resId}=useParams();

    const [resMenuItems,setResMenuItems]=useState([]);

    useEffect(()=>{
        getRestaurantMenu()
    },[])

    const getRestaurantMenu=async ()=>{
        const data=await fetch('https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9834&lng=77.7326&restaurantId='+resId+'&catalog_qa=undefined&isMenuUx4=true')
        const json=await data.json();

        setResInfo(json?.data?.cards[2]?.card?.card?.info);

        let tempArray=[]
        
        for(let {card} of json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards){
            let {name,imageId,price,description,ratings,id}=card.info;
            ratings=ratings?.aggregatedRating?.rating
           
            tempArray.push({
                name:name,
                imageId:imageId,
                price:price,
                ratings:ratings,
                price:price,
                description:description,
                id:id
            });
        }

        setResMenuItems(tempArray);
    }

    if(resInfo===null){
       return (<Shimmer/>)
    }

    const {name,cuisines,cloudinaryImageId,avgRating,costForTwoMessage,id}=resInfo || {}


    return(
            <div className="res-menu">
                <h1>{name}</h1>

                
                <img src={CDN_URL+cloudinaryImageId}></img>
               
                <h3>{cuisines.join(', ')} - {costForTwoMessage}</h3>
                <h3>Ratings: {avgRating}</h3>

                <h2>Menu</h2>

                <div>
                    {
                        resMenuItems.map((menuItem)=>{
                            return (
                               <MenuItem props={menuItem} key={menuItem.id} />
                            )
                        })
                    }
                </div>
                
            </div>
        )
}

export default RestaurantMenu