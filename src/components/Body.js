import RestaurentCard from "./RestaurentCard"
import dataArray from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    const [listOfRestaurents, setListOfRestaurents] = useState([]);

    const [searchText,setSearchText]=useState('');

    const [loading,setLoading]=useState(true);

    const [filteredRestaurant,setFilteredRestaurant]=useState([])

    console.log(listOfRestaurents)

    useEffect(() => {
        try {
            fetchData()
        }
        catch (err) {

        }

    }, []);

    const fetchData = async () => {
        const data = await fetch('https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9698196&lng=77.7499721&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');

        const json = await data.json();

        setLoading(false)

        setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        setListOfRestaurents(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [])
    }


    return loading  ? (<Shimmer/>) : (
        <div className="body">
          
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e)=>setSearchText(e.target.value)}></input>
                    <button onClick={()=>{
                        if(!searchText.length){
                            setFilteredRestaurant(listOfRestaurents);
                            return;
                        }
                      
                        setFilteredRestaurant(listOfRestaurents.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase())))
                    }}>Search</button>
                </div>
                <button className="filter-btn"

                    onClick={() => {
                        setFilteredRestaurant(listOfRestaurents.filter(value => value.info.avgRating > 4))
                    }}

                >
                    Top Rated Restaurants
                </button>
            </div>

            <div className="res-container">
                {
                    filteredRestaurant.map(({ info }) => {
                        return <RestaurentCard key={info.id} data={info}></RestaurentCard>
                    })
                }
            </div>
        </div>
    )
}

export default Body;