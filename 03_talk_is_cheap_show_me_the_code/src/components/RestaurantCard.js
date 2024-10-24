const RestaurantCard = (props) => {
  const { resData } = props;
  const { imageUrl, name, rating, deliveryTime, cuisine, address } = resData;
  return (
    <div className="res-card">
      <img src={imageUrl} alt="" />

      <h3>{name}</h3>
      <p>
        {" "}
        <i className="fa-solid fa-star"></i> {rating} • {deliveryTime}
      </p>
      <h4>{cuisine.join(" , ")}</h4>
      <h4>{address}</h4>

      <p></p>
    </div>
  );
};

export default RestaurantCard;
