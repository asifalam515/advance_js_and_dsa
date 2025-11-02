const rowData = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    price: 59.99,
    quantity: 2,
    rating: 5,
    image: "/images/headphones.jpg",
    category: "Electronics",
    inStock: true,
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    price: 89.5,
    quantity: 1,
    rating: 2,
    image: "/images/fitness-watch.jpg",
    category: "Wearables",
    inStock: true,
  },
  {
    id: 3,
    name: "Ergonomic Office Chair",
    price: 199.99,
    quantity: 1,
    rating: 3,
    image: "/images/office-chair.jpg",
    category: "Furniture",
    inStock: true,
  },
  {
    id: 4,
    name: "Mechanical Gaming Keyboard",
    price: 79.99,
    quantity: 1,
    rating: 2,
    image: "/images/gaming-keyboard.jpg",
    category: "Electronics",
    inStock: false,
  },
  {
    id: 5,
    name: "Stainless Steel Water Bottle",
    price: 24.99,
    quantity: 3,
    rating: 3,
    image: "/images/water-bottle.jpg",
    category: "Accessories",
    inStock: true,
  },
  {
    id: 6,
    name: "Portable Power Bank 20000mAh",
    price: 49.99,
    quantity: 1,
    rating: 3,
    image: "/images/power-bank.jpg",
    category: "Electronics",
    inStock: true,
  },

  {
    id: 7,
    name: "Noise Cancelling Earbuds",
    price: 69.99,
    quantity: 1,
    rating: 4,
    image: "/images/earbuds.jpg",
    category: "Electronics",
    inStock: false,
  },
];
const numbers = [12, 32, 53, 234, 234, 23, 6, 7, 1];
const totalPrice = rowData.reduce((total, num) => {});
const ans = numbers.reduce((prevValue, currentValue) => {
  return prevValue + currentValue;
}, 0);
// console.log(ans);
const subTotal = rowData.reduce((prevValue, currentValue) => {
  return prevValue + currentValue.price;
}, 0);
console.log(subTotal);
