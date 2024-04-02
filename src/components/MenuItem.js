import { CDN_URL } from "../utils/constants";

const MenuItem = ({props}) => {
console.log(props)
  const {name, imageId:cloudinaryImageId, price, ratings,description}=props;

  return (
    <div className="menu-item">
        <h3>{name}</h3>
        <div style={{width:'200px'}}>
            <img src={CDN_URL+cloudinaryImageId} alt="res-logo" className="res-logo" />
        </div>
      
        <h4>{description}</h4>
        <h3>Price: ₹{price/100}</h3>
        <h3>Rating: {ratings}</h3>
    </div>
  )
}

export default MenuItem