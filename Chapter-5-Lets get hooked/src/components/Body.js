import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../utils/mockData";

const Body = () => {
  // state Variable - Super powerful variable (hooks)
// syntax:
//  const [listofRes, setlistofRes] = useState([data filled])

const [ListofRes, setListofRes] = useState(resList)


  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // console.log("Button clicked");
            // Filter Logic in simple:

            // resList = resList.filter((res)=> res.data.avgRating > 4);
            // console.log(resList)

            // Filter Logic using hooks- useState():

           const filteredList = ListofRes.filter((res)=> res.data.avgRating > 4);
           setListofRes(filteredList)
          }}
        >
          Top rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {ListofRes.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
