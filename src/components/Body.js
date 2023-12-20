import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
    let [listOfRestaurants, setListOfrestaurants] = useState([
        {
            type: "restaurant",
            data: {
                "id": "750644",
                "name": "dosa",
                "avgRating": "2.5",
                "cuisines": "Indian",
                "costForTwo": "250",
                "deliveryTime": "20",
                "cloudinaryImageId": "zskk21orirlgzrjddimy"
            }
        },
        {
            type: "restaurant",
            data: {
                "id": "750645",
                "name": "idli",
                "avgRating": "4.5",
                "cuisines": "Indian",
                "costForTwo": "250",
                "deliveryTime": "20",
                "cloudinaryImageId": "51e49c361768f2d16cfff0dd624fdac7"
            }
        }, {
            type: "restaurant",
            data: {
                "id": "750646",
                "name": "wrap",
                "avgRating": "3.5",
                "cuisines": "Indian",
                "costForTwo": "250",
                "deliveryTime": "20",
                "cloudinaryImageId": "tx6ljru8qyrtsye8tmd5"
            }
        }

    ])
    //   const [filteredList, setFilteredList] = useState([])

    useEffect(() => {
        fetchData()
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.6819038&lng=83.20122510000002&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        )
        const json = await data.json()
        console.log("data++++++++++", json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setListOfrestaurants(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    console.log("-----------", listOfRestaurants)
    return (
        <div className="body">
            <div className="filter">
                <button
                    className="filter-btn"
                    onClick={() => {
                        const filteredList = listOfRestaurants.filter((res) => res.avgRating < 4);
                        setListOfrestaurants(filteredList);
                    }}
                >top restaurants
                </button>
            </div>
            <div className="res-container">
                {listOfRestaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.id} resData={restaurant} />
                ))}
            </div>
        </div>
    );
};

export default Body;


