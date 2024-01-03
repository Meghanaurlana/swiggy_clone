import { CDN_URL } from "../../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  console.log("************  " + resData);

  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } =
    resData;
  console.log(resData);
  return (
    <div className="m-4 p-4 w-60 h-120 rounded-lg bg-gray-100 hover:bg-gray-200">
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h4 className="font-small py-4 text-lg">{name}</h4>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo.toString()}</h4>
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label> promoted </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
