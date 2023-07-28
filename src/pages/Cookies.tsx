import React from "react";
import Category from "../Components/Category";
import Items from "../Components/CookiesItems";
import HomeMade from "../Components/HomeMade";
import ProductDisplay from "../Components/ProductDisplay";
import Sort from "../Components/Sort";

export default function Cookies() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <ProductDisplay />
      <Sort />
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1 }}>
          <div className="category-wrapper">
            <Category />
          </div>
        </div>
        <div style={{ flex: 1 }}>
          <Items />
        </div>
      </div>
      <HomeMade />
    </div>
  );
}
