import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Simmer from "./Simmer.js";
const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filterdRestaurant, setFilterRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  // Whenever state variable update , react triggers a reconciliation cycle (re-render the component)

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.6263908&lng=88.4313014&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const allResList =
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
    setListOfRestaurant(allResList);
    setFilterRestaurant(allResList);
  };
  // conditional rendering
  return listOfRestaurant.length === 0 ? (
    <Simmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            placeholder="Search for food "
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className=" search-btn btn"
            onClick={() => {
              // filter the restaurant cards and up
              // searchtext
              console.log(searchText);
              const filteredRestaurant = listOfRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilterRestaurant(filteredRestaurant);
            }}
          >
            seach
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            // filter logic
            const filterdList = listOfRestaurant.filter(
              (res) => res.info.avgRating >= 4.5
            );
            setFilterRestaurant(filterdList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-cont">
        {filterdRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
