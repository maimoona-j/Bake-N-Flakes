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


// import Category from "../Components/Category";
// import Items from "../Components/CookiesItems";
// import ProductDisplay from "../Components/ProductDisplay";
// import Sort from "../Components/Sort";

// export default function Cookies() {
//   return (
//     <div style={{ display: "flex", flexDirection: "column" }}>
//       <ProductDisplay />
//       <Sort />
//       <div style={{ display: "flex" }}>
//         <div style={{ flex: 1 }}>
//           <Category />
//         </div>
//         <div style={{ flex: 1 }}>
//           <Items />
//         </div>
//       </div>
//     </div>
//   );
// }




// import React from "react";
// import Category from "../Components/Category";
// import Items from "../Components/CookiesItems";
// import ProductDisplay from "../Components/ProductDisplay";
// import Sort from "../Components/Sort";

// export default function Cookies() {
//   return (
//     <div style={{ display: "flex", flexDirection: "column" }}>
//       <ProductDisplay />
//       <Sort />
//       <div style={{ display: "flex" }}>
//         <div style={{ flex: 1 }}>
//           <div className="category-wrapper">
//             <Category />
//           </div>
//         </div>
//         <div style={{ flex: 1 }}>
//           <Items />
//         </div>
//       </div>
//     </div>
//   );
// }






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
      <HomeMade/>
    </div>
  );
}

 

// In your JSX file (e.g., Cookies.js or App.js)

// import React from "react";
// import Category from "../Components/Category";
// import Items from "../Components/CookiesItems";
// import ProductDisplay from "../Components/ProductDisplay";
// import Sort from "../Components/Sort";

// export default function Cookies() {
//   return (
//     <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
//       <ProductDisplay />
//       <Sort />
//       <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
//         <div style={{ flex: 1, maxWidth: "800px", padding: "0 16px" }}>
//           <div className="category-wrapper">
//             <Category />
//           </div>
//         </div>
//         <div style={{ flex: 1, maxWidth: "800px", padding: "0 16px" }}>
//           <Items />
//         </div>
//       </div>
//       <footer style={{ width: "100%", backgroundColor: "#333", color: "white", textAlign: "center", padding: "16px 0" }}>
//         Copyright © Bake n' Flakes
//       </footer>
//     </div>
//   );
// }
