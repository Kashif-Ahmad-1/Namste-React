import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
// import resList from "../utils/mockData";
import Shimmer from "./ShimmerUi";

const Body = () => {


// const [ListofRes, setListofRes] = useState(resList) // this used for mock data

const [ListofRes, setListofRes] = useState([])
useEffect(()=>{
  
  fetchData();
}, []);

const fetchData = async () => {
  const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&collection=83667');
  
  const json = await data.json();
  console.log("apiData", json);
 
  setListofRes(json.data.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
}
// console.log("ResList", resList);


// shimmer Ui
if(ListofRes.length===0){
  return <Shimmer />
}
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            

           const filteredList = ListofRes.filter((res)=> res.info.avgRating > 4);
           setListofRes(filteredList)
          }}
        >
          Top rated Restaurant
        </button>
      </div>

      
      <div className="res-container">
        {ListofRes.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;