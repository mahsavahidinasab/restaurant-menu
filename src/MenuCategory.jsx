import Menu from "./Menu";

export default function MenuCategory({ category, items, onAddToCart }) {
    return (
        <div className="menu-category">
            <h2>{category}</h2>
            <div className="items-container">
                {items.map(item => (
                    <Menu
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        price={item.price}
                        description={item.description}
                        onAddToCart={() => onAddToCart(item)}


                        
                    />
                ))}
            </div>
        </div>
    )
}