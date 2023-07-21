// import { library } from "@fortawesome/fontawesome-svg-core";
// import { fas } from "@fortawesome/free-solid-svg-icons";
// import HomeItem from "./HomeItem";
// library.add(fas);

// export default function BestSeller() {
//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold mb-4">Best Seller</h1>
//       <div className="ml-[280px]">
//         <HomeItem />
//       </div>
//     </div>
//   );
// }


import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import HomeItem from "./HomeItem";
library.add(fas);

export default function BestSeller() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Best Seller</h1>
      <div className="ml-[280px]">
        <HomeItem />
      </div>
    </div>
  );
}
