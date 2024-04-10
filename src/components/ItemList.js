import { CDN_URL } from "../utils/constants";


const ItemList = ({items}) => {
    items=items.map((card)=>{
        return card?.card?.info;
    })
    console.log(items);
  return (
    <div className="w-full my-2">
        {
            items.map((item)=>{
                return (
                    <div key={item.id} className="flex my-2 border-b-2 border-gray-300 p-3 justify-between">

                        <div className="w-8/12">
                            <div className={ 'w-fit rounded-sm border-2  text-sm '+(item?.isVeg?'border-green-700':'border-red-700')}>
                                {
                                    item?.isVeg?'🟢':'🔺'
                                }
                            </div>
                            <div className="font-bold text-base text-gray-700">
                                {item.name}
                            </div>

                            <div>
                                {item.description}
                            </div>

                            <div className="font-bold my-2">
                                ₹{
                                    item?.price?(item.price/100): (item.defaultPrice/200)
                                }
                              
                            </div>
                        </div>

                        <div className="w-3/12 relative">
                            {
                                item.imageId && (<img src={CDN_URL+item.imageId} className="rounded-lg shadow-lg"></img>)
                            } 
                    
                            <div className={`bg-green-700 text-white p-2 absolute rounded-md shadow-lg ${item.imageId?'-bottom-2':''} right-16 cursor-pointer transition-all hover:scale-105  active:scale-95`}>
                                Add +
                            </div>

                        </div>
                                           
                        

                        

                       
                    </div>

                )
            })
        }
    </div>
  )
}

export default ItemList;