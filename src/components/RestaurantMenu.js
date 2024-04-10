import { useEffect, useState } from "react"
import Shimmer from "./Shimmer";
import { CDN_URL } from "../utils/constants";
import {useParams} from 'react-router-dom'
import MenuItem from "./RestaurantCategory";
import useRestaurantMenuItem from "../utils/useRestaurantMenuItem";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  

    const {resId}=useParams();

    const resInfo=useRestaurantMenuItem(resId); 


    if(resInfo===null){
       return (<Shimmer/>)
    }

    const {name,cuisines,cloudinaryImageId,avgRating,costForTwoMessage,id}=resInfo?.cards[2]?.card?.card?.info || {}

    const resMenuCategory=resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((card)=>{
       return card?.card?.card?.['@type']==='type.googleapis.com/swiggy.presentation.food.v2.ItemCategory';
    }).map((card)=>{
        return card?.card?.card
    })

    return(
            <div className="flex flex-col items-center">
                <h1 className="text-3xl my-4 font-bold">{name}</h1>
                
                <img src={CDN_URL+cloudinaryImageId} className="w-80 rounded-lg"></img>
               
                <h3 className="text-lg">{cuisines.join(', ')} - {costForTwoMessage}</h3>
                <h3 className="text-xl">Ratings: {avgRating}</h3>

                <div className="w-7/12">
                    {
                        resMenuCategory.map((category)=>{
                            return (
                               <RestaurantCategory props={category} key={category.title} />
                            )
                        })
                    }
                </div>
                
            </div>
        )
}

export default RestaurantMenu