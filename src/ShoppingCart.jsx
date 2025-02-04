import { useState } from "react";

const products = [
  { name: "Laptop", price: 1200 },
  { name: "Smartphone", price: 800 },
  { name: "Headphones", price: 150 },
  { name: "Keyboard", price: 100 },
  { name: "Mouse", price: 50 },
  { name: "Monitor", price: 300 },
  { name: "Smartwatch", price: 200 },
  { name: "Tablet", price: 500 },
  { name: "External Hard Drive", price: 120 },
  { name: "Gaming Chair", price: 250 },
];

export default function ShoppingCart() {
  const [totalPrice, setTotalPrice] = useState(0);

  const handleChange = (e, i) => {
    setTotalPrice(totalPrice + products[i].price);
  };

  return (
    <>
      <h2>Shopping Cart</h2>
      <form>
        {products.map((p, i) => {
          return (
            <div key={i}>
              <label htmlFor={p.name}>{p.name}</label>
              <input
                type="number"
                min="0"
                defaultValue="0"
                name={p.name}
                id={p.name}
                onChange={(e) => handleChange(e, i)}
              />
              <span>{p.price}</span>
            </div>
          );
        })}
      </form>
      <p>Total price: {totalPrice}</p>
    </>
  );
}
