import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({props, showItems,setShowIndex}) => {

  const {title,itemCards}=props;

  return (
    <div className="m-8 p-4 bg-gray-100 rounded-lg flex items-center flex-col shadow-xl">

      <div className="flex justify-between cursor-pointer  w-full" onClick={()=>{
        setShowIndex();
      }}>
        <span className="text-xl w-10/12 font-bold">{`${title} (${itemCards.length})`}</span>

        <span className="text-center w-2/12 text-lg hover:scale-x-125 transition-all active:scale-100" >&#9660;</span>

      </div>

      {
        itemCards && showItems && <ItemList items={itemCards} useMapFunction={true}/>
      }
      

    </div>
  )
}

export default RestaurantCategory;