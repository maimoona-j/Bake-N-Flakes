 
 import Category from "../Components/Category";
 import CakeItems from "../Components/CakeItem";
 import ProductDisplay from "../Components/ProductDisplay";
 import Sort from "../Components/Sort";
import HomeMade from "../Components/HomeMade";

export default function Cakes() {
  return (
    <div> 
       <div style={{ display: "flex", flexDirection: "column" }}>
      <ProductDisplay />
      <Sort />
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1 }}>
          <Category />
        </div>
        <div style={{ flex: 1 }}>
          <CakeItems />
        </div>
      </div>
      <HomeMade/>
    </div>
    </div>
  )
}
