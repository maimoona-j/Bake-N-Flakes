// import Category from "../Components/Category";
// import Items from "../Components/Items";
// import ProductDisplay from "../Components/ProductDisplay";
// import Sort from "../Components/Sort";

// export default function Cookies() {
//   return (
//     <>
//       <ProductDisplay />
//       <Sort />
//       <Category />
//       <Items />
//     </>
//   );
// }


// trial


import Category from "../Components/Category";
import Items from "../Components/CookiesItems";
import ProductDisplay from "../Components/ProductDisplay";
import Sort from "../Components/Sort";

export default function Cookies() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <ProductDisplay />
      <Sort />
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1 }}>
          <Category />
        </div>
        <div style={{ flex: 1 }}>
          <Items />
        </div>
      </div>
    </div>
  );
}

