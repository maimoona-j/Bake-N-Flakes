// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { fas } from "@fortawesome/free-solid-svg-icons";
// library.add(fas);

// export default function BestSeller() {
//   return (
//     <>
//       <h1>Best Seller</h1>
//       <div>
//         <div className="flex justify-center items-center   ">
//           <div className="border border-solid w-64 h-96 mb-6 ml-5 bg-pink-200 m-10">
//             <img
//               src="https://cdn.pixabay.com/photo/2015/05/07/15/08/cookie-756601_640.jpg"
//               alt="img"
//               className="w-64 h-42 "
//             />

//             <div className="flex items-center text-center mt-5 mr-5">
//               <div className="ml-auto">
//                 <h6>reviews</h6>
//                 {[1, 2, 3, 4].map((star: any) => (
//                   <FontAwesomeIcon icon="star" className="text-yellow-500   " />
//                 ))}
//               </div>
//             </div>
//             <div className="m-5">
//               <h3 className="text-lg mb-2">cookies</h3>
//               <p className="mb-2">$30</p>
//               <button className="bg-blue-300 p-3  w-32">buy now</button>
//             </div>
//           </div>

//           <div className="border border-solid w-64 h-96 mb-6 ml-5 bg-pink-200  m-10">
//             <img
//               src="https://cdn.pixabay.com/photo/2015/05/07/15/08/cookie-756601_640.jpg"
//               alt="img"
//               className="w-64 h-42 "
//             />

//             <div className="flex items-center text-center mt-5 mr-5">
//               <div className="ml-auto">
//                 <h6>reviews</h6>
//                 {[1, 2, 3, 4].map((star: any) => (
//                   <FontAwesomeIcon icon="star" className="text-yellow-500   " />
//                 ))}
//               </div>
//             </div>
//             <div className="m-5">
//               <h3 className="text-lg mb-2">cookies</h3>
//               <p className="mb-2">$30</p>
//               <button className="bg-blue-300 p-3  w-32">buy now</button>
//             </div>
//           </div>

//           <div className="border border-solid w-64 h-96 mb-6 ml-5 bg-pink-200  m-10">
//             <img
//               src="https://cdn.pixabay.com/photo/2015/05/07/15/08/cookie-756601_640.jpg"
//               alt="img"
//               className="w-64 h-42 "
//             />

//             <div className="flex items-center text-center mt-5 mr-5">
//               <div className="ml-auto">
//                 <h6>reviews</h6>
//                 {[1, 2, 3, 4].map((star: any) => (
//                   <FontAwesomeIcon icon="star" className="text-yellow-500   " />
//                 ))}
//               </div>
//             </div>
//             <div className="m-5">
//               <h3 className="text-lg mb-2">cookies</h3>
//               <p className="mb-2">$30</p>
//               <button className="bg-blue-300 p-3  w-32">buy now</button>
//             </div>
//           </div>
//         </div>

//         <div className="flex justify-center items-center   ">
//           <div className="border border-solid w-64 h-96 mb-6 ml-5 bg-blue-200 m-10">
//             <img
//               src="https://cdn.pixabay.com/photo/2015/05/07/15/08/cookie-756601_640.jpg"
//               alt="img"
//               className="w-64 h-42 "
//             />

//             <div className="flex items-center text-center mt-5 mr-5">
//               <div className="ml-auto">
//                 <h6>reviews</h6>
//                 {[1, 2, 3, 4].map((star: any) => (
//                   <FontAwesomeIcon icon="star" className="text-yellow-500   " />
//                 ))}
//               </div>
//             </div>
//             <div className="m-5">
//               <h3 className="text-lg mb-2">cookies</h3>
//               <p className="mb-2">$30</p>
//               <button className="bg-blue-400 p-3  w-32">buy now</button>
//             </div>
//           </div>

//           <div className="border border-solid w-64 h-96 mb-6 ml-5 bg-blue-200  m-10">
//             <img
//               src="https://cdn.pixabay.com/photo/2015/05/07/15/08/cookie-756601_640.jpg"
//               alt="img"
//               className="w-64 h-42 "
//             />

//             <div className="flex items-center text-center mt-5 mr-5">
//               <div className="ml-auto">
//                 <h6>reviews</h6>
//                 {[1, 2, 3, 4].map((star: any) => (
//                   <FontAwesomeIcon icon="star" className="text-yellow-500   " />
//                 ))}
//               </div>
//             </div>
//             <div className="m-5">
//               <h3 className="text-lg mb-2">cookies</h3>
//               <p className="mb-2">$30</p>
//               <button className="bg-blue-400 p-3  w-32">buy now</button>
//             </div>
//           </div>

//           <div className="border border-solid w-64 h-96 mb-6 ml-5 bg-blue-200  m-10">
//             <img
//               src="https://cdn.pixabay.com/photo/2015/05/07/15/08/cookie-756601_640.jpg"
//               alt="img"
//               className="w-64 h-42 "
//             />

//             <div className="flex items-center text-center mt-5 mr-5">
//               <div className="ml-auto">
//                 <h6>reviews</h6>
//                 {[1, 2, 3, 4].map((star: any) => (
//                   <FontAwesomeIcon icon="star" className="text-yellow-500   " />
//                 ))}
//               </div>
//             </div>
//             <div className="m-5">
//               <h3 className="text-lg mb-2">cookies</h3>
//               <p className="mb-2">$30</p>
//               <button className="bg-blue-400 p-3  w-32">buy now</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import CookieItem from "./CookieItem";
library.add(fas);

export default function BestSeller() {

  return (
    <>
      <h1>Best Seller</h1>
       <div className="flex flex-wrap justify-center">
        <CookieItem/>
      </div>
    </>
  );
}



// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

// interface CardProps {
//   imageSrc: string;
//   name: string;
//   price: string;
//   rating: number;
// }

// const Card: React.FC<CardProps> = ({ imageSrc, name, price, rating }) => {
//   const renderRatingStars = (): React.ReactNode => {
//     const stars: React.ReactNode[] = [];

//     for (let i = 0; i < Math.floor(rating); i++) {
//       stars.push(
//         <FontAwesomeIcon icon="star" className="text-yellow-500" key={i} />
//       );
//     }

//     return stars;
//   };

//   return (
//     <div className="border border-solid w-64 h-96 mb-6 ml-5 bg-pink-200 m-10">
//       <img src={imageSrc} alt="img" className="w-64 h-42" />

//       <div className="flex items-center text-center mt-5 mr-5">
//         <div className="ml-auto">
//           <h6>reviews</h6>
//           {renderRatingStars()}
//         </div>
//       </div>

//       <div className="m-5">
//         <h3 className="text-lg mb-2">{name}</h3>
//         <p className="mb-2">{price}</p>
//         <button className="bg-blue-300 p-3 mb-8 w-32 hover:bg-gray-400">
//           buy now
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Card;