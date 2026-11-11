import { useParams } from "react-router-dom";
import { menuData } from "./menuData";
import { Link } from "react-router-dom";


function ItemDetails() {
const {id} = useParams();

function findItem(id) {
    return menuData.flatMap(c => c.items).find(item => item.id === Number(id));
}

    const item = findItem(id);

    if(!item){
        return (
            <div className="item-detail">
                <h2>Item not found</h2>
                <Link to="/">Back to Menu</Link>
            </div>
        )
    }

    return (
        <div className="item-detail">
            <img src={item.image} alt={item.name} width= "300" />
            <h2>{item.name}</h2>
            <p>Description: {item.description}</p>
            <p>Price: {item.price}</p>
            <Link to="/">Back to Menu</Link>
        </div>
    )
}

export default ItemDetails;