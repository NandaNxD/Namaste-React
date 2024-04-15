import RestaurentCard, { withPromotedLabel } from "./RestaurentCard"
import dataArray from "../utils/mockData";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

const Body = () => {
    const [listOfRestaurents, setListOfRestaurents] = useState([]);

    const [searchText,setSearchText]=useState('');

    const [loading,setLoading]=useState(true);

    const [filteredRestaurant,setFilteredRestaurant]=useState([])

    console.log(listOfRestaurents)

    const {loggedInUser,setLoggedInUser}=useContext(UserContext);

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

      //console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        setListOfRestaurents(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [])
    }

    const onlineStatus=useOnlineStatus();

    const VegRestaurantCard=withPromotedLabel(RestaurentCard);

    if(!onlineStatus){
        return (<h1>Offine! Please check your Internet Connection</h1>)
    }


    return loading  ? (<Shimmer/>) : (
        <div className="body">
          
            <div className="flex gap-2 justify-center">
                <div className="p-2 m-2">
                    <input type="text" className="border border-solid  border-black p-2 rounded-lg" value={searchText} onChange={(e)=>setSearchText(e.target.value)}></input>
                    <button onClick={()=>{
                        if(!searchText.length){
                            setFilteredRestaurant(listOfRestaurents);
                            return;
                        }
                      
                        setFilteredRestaurant(listOfRestaurents.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase())))
                    }} className="p-2 bg-green-200 m-2 rounded-lg">Search</button>
                </div>
                <div className="p-2 m-2">
                   <button className="m-2 p-2 bg-gray-200 rounded-lg"
                        onClick={() => {
                            setFilteredRestaurant(listOfRestaurents.filter(value => value.info.avgRating > 4))
                        }}
                    >
                    Top Rated Restaurants
                    </button>
                </div>


                <div className="p-2 m-2">
                   <input className="m-2 p-2 bg-white rounded-lg border border-black"
                        value={loggedInUser}

                        onChange={(e)=>{setLoggedInUser(e.target.value)}}
                         
                    />
                </div>
               
            </div>

            <div className="flex flex-wrap justify-center">
                {
                    filteredRestaurant.map(({ info }) => {
                        return (
                            <Link to={'/restaurant/'+info.id} key={info.id}>
                                {(info?.veg)?<VegRestaurantCard key={info.id} data={info}/>: <RestaurentCard key={info.id} data={info}/>}
                             </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Body;