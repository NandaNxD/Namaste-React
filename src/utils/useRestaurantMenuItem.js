import { useState,useEffect } from "react";

const useRestaurantMenuItem=(resId)=>{
    const [resInfo,setResInfo]=useState(null);

    useEffect(()=>{
        getRestaurantMenuItem();
    },[])

    const getRestaurantMenuItem=async ()=>{
        const data=await fetch('https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9834&lng=77.7326&restaurantId='+resId+'&catalog_qa=undefined&isMenuUx4=true')
        const json=await data.json();

        setResInfo(json?.data);
    }

    return resInfo;
}


export default useRestaurantMenuItem;