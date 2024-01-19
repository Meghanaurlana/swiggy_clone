import { useState } from 'react';
import Items from './Items';



const RestaurantCategory = (data) => {
    const [showItems, setShowItems] = useState(false)
    const handleClick = () => {
        setShowItems(!showItems)
    }
    return (
        <div>
            <div className="w-4/12 m-auto my-4 bg-gray-50 shadow-lg p-4 ">
                <div className="flex justify-between cursor-pointer"
                    onClick={handleClick}
                >
                    <span className="font-bold">
                        {data.data.card.title}({data.data.card.itemCards.length})
                    </span>
                    <span>🔻</span>
                </div>
                {showItems && <Items items={data.data.card.itemCards} />}
            </div>
        </div>
    );
};
export default RestaurantCategory;
