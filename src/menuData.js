import caesar from './assets/images/caesar.jpg'
import garlicBread from './assets/images/Garlic-Bread-4.webp'
import chicken from './assets/images/chicken.jpg'

export const menuData = [
  {
    category: "Appetizers",
    items: [
      {
        id: 1,
        name: "Caesar Salad",
        image: caesar,
        price: 9.99,
        description: "Fresh romaine lettuce with parmesan cheese"
      },
      {
        id: 2,
        name: "Garlic Bread",
        image: garlicBread,
        price: 5.99,
        description: "Toasted bread with garlic butter and herbs"
      }
    ]
  },
  {
    category: "Main Courses",
    items: [
      {
        id: 3,
        name: "Grilled Chicken",
        image: chicken,
        price: 18.99,
        description: "Grilled chicken breast with rice and vegetables"
      },
      {
        id: 4,
        name: "Spaghetti Bolognese",
        price: 16.99,
        description: "Pasta with a rich tomato and beef sauce"
      }
    ]
  },
  {
    category: "Desserts",
    items: [
      {
        id: 5,
        name: "Chocolate Cake",
        price: 7.99,
        description: "Rich chocolate cake with chocolate frosting"
      }
    ]
  }
];

