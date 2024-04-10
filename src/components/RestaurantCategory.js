import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({props}) => {

  const [expanded,setExpanded]=useState(false);

  const {title,itemCards}=props;

  return (
    <div className="m-8 p-4 bg-gray-100 rounded-lg flex items-center flex-col shadow-xl">

      <div className="flex justify-between cursor-pointer  w-full" onClick={()=>{
          setExpanded(!expanded);
        }}>
        <span className="text-xl w-10/12 font-bold">{`${title} (${itemCards.length})`}</span>

        <span className="text-center w-2/12" >🔽</span>

      </div>

      {
        itemCards && expanded && <ItemList items={itemCards}/>
      }
      

    </div>
  )
}

export default RestaurantCategory;