import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
// import resList from "../utils/mockData";
import Shimmer from "./ShimmerUi";

const Body = () => {
  // const [ListofRes, setListofRes] = useState(resList) // this used for mock data

  const [ListofRes, setListofRes] = useState([]);
  const [FilteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setsearchText] = useState("");

  // whenever state variable update, react triggers a reconciliation cycle ( re-render the component)

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&collection=83667');

    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.3412041&lng=82.99821510000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    ); // varanasi swiggy api

    const json = await data.json();
    console.log("apiData", json);

    setListofRes(
      json.data.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json.data.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  // console.log("ResList", resList);

  // shimmer Ui
  if (ListofRes.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              console.log(searchText);
              const filteredRestaurant = ListofRes.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = ListofRes.filter(
              (res) => res.info.avgRating > 4
            );
            setListofRes(filteredList);
          }}
        >
          Top rated Restaurant
        </button>
      </div>

      <div className="res-container">
        {FilteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
