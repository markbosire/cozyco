import React from "react";
import ShopComponent from "./shopComponent";

const GridComponent = ({ items }) => {
  const getColumns = () => {
    const width = window.innerWidth;
    if (width >= 1200) {
      return 4;
    } else if (width >= 992) {
      return 3;
    } else if (width >= 768) {
      return 2;
    } else {
      return 1;
    }
  };

  const columns = getColumns();
  const columnStyle = {
    width: `${100 / columns}%`,
    float: "left",
  };

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {items?.map((child, index) => (
        <div style={columnStyle} key={index}>
          <ShopComponent key={index} {...child} />
        </div>
      ))}
    </div>
  );
};

export default GridComponent;
