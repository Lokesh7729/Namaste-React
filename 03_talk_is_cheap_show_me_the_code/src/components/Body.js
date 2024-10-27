import RestaurantCard from "./RestaurantCard";
// import resList from "./utils/mockData";
import { useEffect, useState } from "react";
const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
s
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.6263908&lng=88.4313014&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants[0]
        .info.cloudinaryImageId
    );b
    const allResList =
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
    setListOfRestaurant(allResList);
  };

  return (
    <div className="body">

      <div className="search"><input type="text" /><button
          className="filter-btn"
          onClick={() => {
            // filter logic
            const filterdList = listOfRestaurant.filter(
              (res) => res.info.avgRating >= 4.5
            );
            setListOfRestaurant(filterdList);
          }}
        >
          Top
        </button></div>
      <div className="res-cont">
        {listOfRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
