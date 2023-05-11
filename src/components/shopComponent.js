import React from "react";
import "../index.css"; // Import the CSS file

const ShopComponent = ({ name, url, price }) => (
  <div className="shop-component">
    <img src={url} alt={name} className="shop-component-image" />
    <h2 className="shop-component-name">{name}</h2>
    <p className="shop-component-price">{price}</p>
  </div>
);

export default ShopComponent;
