import ItemList from "./itemList";

const RestaurantCategory = (data) => {
    return (
        <div>
            <div className="w-4/12 m-auto my-4 bg-gray-50 shadow-lg p-4 ">
                <div className="flex justify-between">
                    <span className="font-bold">
                        {data.data.card.title}({data.data.card.itemCards.length})
                    </span>
                    <span>🔻</span>
                </div>
                <ItemList items={data.data.card.itemCards} />
            </div>
        </div>
    );
};
export default RestaurantCategory;
