
import React, { useState, useReducer } from "react";;
import About from "./pages/About";
import './App.css'
import MenuCategory from './MenuCategory'
import SearchBar from "./SearchBar";
import CategoryButtons from "./CategoryButtons";
import DailySpecial from "./Dailyspecial";
import Cart, { cartReducer } from "./Cart";
import { menuData } from "./menuData";
import {Routes, Route} from 'react-router-dom'
import ItemDetails from "./ItemDetails";


function Home() {
 
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const [cart, dispatch] = useReducer(cartReducer, []);

  const addToCart = (item) => dispatch({ type: 'ADD_ITEM', item });
  const removeFromCart = (id) => dispatch({ type: 'REMOVE_ITEM', id });
  const clearCart = () => dispatch({ type: 'CLEAR_CART' });

  const query = searchQuery.trim().toLowerCase();
  const categoryNames = menuData.map((category) => category.category);

  const filteredMenu = menuData
    .filter(
      (category) =>
        selectedCategory === "All" || category.category === selectedCategory
    )
    .map((category) => ({
      ...category,
      items: category.items.filter(
        (item) =>
          item.name.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query)
      ),
    }))
    .filter((category) => category.items.length > 0);

  return (
    <div className='App'>
      <h1>Welcome to Mahsa's Restaurant</h1>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <CategoryButtons
        categories={categoryNames}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <DailySpecial />

      <main className="menu-container">
        {filteredMenu.length > 0 ? (
          filteredMenu.map((category) => (
            <MenuCategory
              key={category.category}
              category={category.category}
              items={category.items}
              onAddToCart={addToCart}
            />
          ))
        ) : (
          <p style={{ color: "gray" }}>No results found</p>
        )}
      </main>

      <Cart cart={cart} onRemove={removeFromCart} onClear={clearCart} />
    </div>
  )
}
  
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dish/:id" element={<ItemDetails />} />
      <Route path="/about" element={<About />} />
    </Routes>
  )
 
}


export default App
