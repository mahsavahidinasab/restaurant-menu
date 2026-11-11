import Button from '@mui/material/Button';

export default function CategoryButtons({categories, selectedCategory, setSelectedCategory}) {
    return (
        <div className="category-buttons">
            <Button
            variant={selectedCategory === "All" ? "contained" : "text"}
            onClick={() => setSelectedCategory("All")}>
                Show All
            </Button>
            {categories.map((name) => (
                <Button key={name} variant={selectedCategory === name ? "contained" : "text"} onClick={() => setSelectedCategory(name)}>
                    Show Only {name}
                </Button>
            ))}
        </div>
    );
}