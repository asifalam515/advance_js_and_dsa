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
];

const subTotal = rowData.reduce((previousProduct, currentProduct) => {
  const cost = currentProduct.price * currentProduct.quantity;
  return previousProduct + cost;
}, 0);
console.log(subTotal);
