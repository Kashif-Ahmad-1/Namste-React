import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";

const Body = () => {

const[list, setList] = useState([]);


  useEffect(()=>{
    //fetch Data here. 
    fetchData();
  }, []);

 
  const fetchData = async () => {
    const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&collection=83667');
    const json = await data.json();
    console.log("apiData", json);
   
    setList(json.data.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }
  console.log("ResList", resList);

    return (
        <>
        <div className="body">
            <div className="filter">
              {/*Print high rating value only*/}
                <button 
                className="filter-btn"
                onClick={()=>{
                  //Write filter out to get avgRating > 4
                  const filterList = list.filter(restaurant=>restaurant.info.avgRating>3);
                  setList(filterList);
                }}>Top Rated Restaurant</button>
            </div>
            <div className="res-container">
              {
                

                list.map((restaurant) => <RestaurantCard key={restaurant.info.id} resList={restaurant}/>)

              }  
               
                
            </div>
        </div>
        </>
    )
}

export default Body;