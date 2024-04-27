import React, { useState } from "react";

function Item({ name, category }) {
// State variable to keep track of whether the item is in the cart
  const [inCart, setInCart] = useState(false);

// Function to handle adding/removing item from cart
  const handleCartToggle = () => {
    setInCart(!inCart);
  };

  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      {/* Button to add/remove item from cart  */}
      <button className="add" onClick={handleCartToggle}>
        {inCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
