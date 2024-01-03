import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { API_URL } from "../../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import { withPromotedLabel } from "./RestaurantCard";
const Body = () => {
    const [listOfRestaurants, setListOfrestaurants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState(" ");

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard)

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(API_URL);
        const json = await data.json();
        console.log(json);
        let cards = [];
        cards.push(...json.data.cards);
        cards.forEach((e) => {
            if (e?.card?.card?.gridElements?.infoWithStyle?.restaurants) {
                setListOfrestaurants(
                    e.card.card.gridElements.infoWithStyle.restaurants
                );
                setFilteredRestaurant(
                    e.card.card.gridElements.infoWithStyle.restaurants
                );
            }
        });
    };

    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false) {
        return (
            <h1>Looks like your offline. please check your internt connection</h1>
        );
    }
    console.log("value -----------", onlineStatus);

    return listOfRestaurants.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="body">
            <div className="filter flex">
                <div className="search m-4 p-4">
                    <input
                        type="text"
                        className="border border-solid border-black"
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}
                    />
                    <button
                        className="px-4 py-2 bg-green-100 m-4 rounded-lg"
                        onClick={() => {
                            const filteredRestaurant = listOfRestaurants.filter((res) =>
                                res.info.name.toLowerCase().includes(searchText.toLowerCase())
                            );
                            setFilteredRestaurant(filteredRestaurant);
                        }}
                    >
                        search
                    </button>
                </div>
                <div className="m-4 p-4 flex items-center">
                    <button
                        className="px-4 py-2 bg-gray-100"
                        onClick={() => {
                            const filteredList = listOfRestaurants.filter(
                                (res) => res.info.avgRating > 4
                            );
                            setListOfrestaurants(filteredList);
                        }}
                    >
                        top restaurants
                    </button>
                </div>
            </div>
            <div className="mx-20 grid grid-cols-2 lg:grid-cols-5">
                {filteredRestaurant ? (
                    filteredRestaurant.map((restaurant) => (
                        <Link
                            key={restaurant?.info?.id}
                            to={"/restaurant/" + restaurant.info.id}
                        >
                            {restaurant.info.promoted ? <RestaurantCardPromoted resData={restaurant.info} /> :
                                <RestaurantCard resData={restaurant.info} />}
                        </Link>
                    ))
                ) : (
                    <p>No data</p>
                )}
            </div>
        </div>
    );
};

export default Body;
