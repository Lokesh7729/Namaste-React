import { LOGO_URL } from "./utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, id, avgRating, sla , cloudinaryImageId, cuisines, areaName} = resData;
  return (
    <div className="res-card">
      <img src={LOGO_URL+cloudinaryImageId} alt="" />
      <h3>{name}</h3>
      <p>
        {" "}
        <i className="fa-solid fa-star"></i> {avgRating} • {sla.deliveryTime + " mins"}
      </p>
      <h4>{cuisines.join(" , ")}</h4>
      <h4>{areaName}</h4>
    </div>
  );
};

export default RestaurantCard;
