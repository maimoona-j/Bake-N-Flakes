// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import cake1 from "../images/cake1.jpg";
// import cake2 from "../images/cake2.jpg";
// import cake3 from "../images/cake3.jpg";
// import cookies1 from "../images/cookies1.jpg";
// import cookies2 from "../images/cookies2.jpg";
// import cookies3 from "../images/cookies3.jpg";


// interface CardProps {
//   card: {
//     id: number;
//     imageSrc: string;
//     name: string;
//     price: string;
//     rating: number;
//   };
// }

// const Card: React.FC<CardProps> = ({ card }) => {
//   const navigate = useNavigate();
//   const handleCart = ()=>{
// navigate("/cart")
//   }
//   const { imageSrc, name, price, rating } = card;

//   return (
//     <div className="border border-solid w-full md:w-64 h-auto mb-6  rounded-xl bg-pink-200  md:w-80 md:h-[450px] md:mb-8 md:ml-8">
//       <img src={imageSrc} alt="img" className="w-full h-42 md:h-52" />

//       <div className="flex items-center text-center mt-5 mr-5">
//         <div className="ml-auto">
//           <h6>reviews</h6>
//           {[...Array(Math.floor(rating))].map((_, index) => (
//             <FontAwesomeIcon
//               icon="star"
//               className="text-yellow-500"
//               key={index}
//             />
//           ))}
//         </div>
//       </div>
//       <div className="m-5">
//         <h3 className="text-lg mb-2">{name}</h3>
//         <p className="mb-2">{price}</p>
//         <button className="bg-blue-300 p-3 mb-8 w-32 rounded-full hover:bg-gray-400" onClick={handleCart}>
//           buy now
//         </button>
//       </div>
//     </div>
//   );
// };

// const CookiesItem: React.FC = () => {
//   const [bestSellers, setBestSellers] = useState([
//     {
//       id: 1,
//       imageSrc: cake1,
//       name: "Cake 1",
//       price: "$10",
//       rating: 4.5,
//     },
//     {
//       id: 2,
//       imageSrc: cake2,
//       name: "Cake 2",
//       price: "$15",
//       rating: 4.2,
//     },
//     {
//       id: 3,
//       imageSrc: cake3,
//       name: "Cake 3",
//       price: "$12",
//       rating: 4.2,
//     },

//     {
//       id: 4,
//       imageSrc: cookies1,
//       name: "Cookie 1",
//       price: "$18",
//       rating: 4.4,
//     },
//     {
//       id: 5,
//       imageSrc: cookies2,
//       name: "Cookie 2",
//       price: "$15",
//       rating: 4.5,
//     },
//     {
//       id: 6,
//       imageSrc: cookies3,
//       name: "Cookie 3",
//       price: "$10",
//       rating: 4.3,
//     },
//   ]);

//   const limitedBestSellers = bestSellers.slice(0, 6);
//   const cakes = limitedBestSellers.slice(0, 3); // First 3 items are cakes
//   const cookies = limitedBestSellers.slice(3, 6);

//   return (
//     <div className="  ">
//       <div className="flex flex-col items-center justify-center">
//         <div className="flex flex-row flex-wrap">
//           {cakes.map((cake) => (
//             <div key={cake.id} className="mr-2">
//               <Card card={cake} />
//             </div>
//           ))}
//         </div>
//         <div className="flex flex-row  flex-wrap">
//           {cookies.map((cookie) => (
//             <div key={cookie.id} className="mr-2">
//               <Card card={cookie} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CookiesItem;





import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cake1 from "../images/cake1.jpg";
import cake2 from "../images/cake2.jpg";
import cake3 from "../images/cake3.jpg";
import cookies1 from "../images/cookies1.jpg";
import cookies2 from "../images/cookies2.jpg";
import cookies3 from "../images/cookies3.jpg";

interface CardProps {
  card: {
    id: number;
    imageSrc: string;
    name: string;
    price: string;
    rating: number;
  };
}

const Card: React.FC<CardProps> = ({ card }) => {
  const { imageSrc, name, price, rating } = card;

  return (
    <div className="rounded-xl bg-pink-200 cursor-pointer shadow-lg">
    <img src={imageSrc} alt="img" className="rounded-t-xl transition-all duration-500 hover:scale-90 hover:brightness-50 w-full" />

    <div className="flex items-center justify-center mt-2">
      <div className="flex items-center">
        <h6 className="font-semibold pr-3">Reviews</h6>
        {[...Array(Math.floor(rating))].map((_, index) => (
          <FontAwesomeIcon
            icon="star"
            className="text-yellow-500 hover:animate-spin mx-px"
            key={index}
          />
        ))}
      </div>
    </div>
    <div className="px-5 py-5">
      <h3 className="text-2xl font-semibold text-pink-500">{name}</h3>
      <p className="underline text-pink-500">{price}</p>
      <div className="flex   justify-center gap-2 items-center py-2">
        <button
          className="bg-pink-500 font-semibold text-pink-200 hover:text-pink-500 hover:bg-pink-200 border border-pink-400 transition-all whitespace-nowrap duration-300 px-2 sm:px-5 lg:px-4 xl:px-6 py-2 rounded ">
            Buy Now
        </button>
      </div>
    </div>
  </div>
  );
};

const CookiesItem: React.FC = () => {
  const [bestSellers, setBestSellers] = useState([
    {
      id: 1,
      imageSrc: cake1,
      name: "cake1",
      price: "$10",
      rating: 4.5,
    },
    {
      id: 2,
      imageSrc: cake2,
      name: "Cake 2",
      price: "$15",
      rating: 4.2,
    },
    {
      id: 3,
      imageSrc: cake3,
      name: "Cake 3",
      price: "$12",
      rating: 4.2,
    },

    {
      id: 4,
      imageSrc: cookies1,
      name: "Cookie 1",
      price: "$18",
      rating: 4.4,
    },
    {
      id: 5,
      imageSrc: cookies2,
      name: "Cookie 2",
      price: "$15",
      rating: 4.5,
    },
    {
      id: 6,
      imageSrc: cookies3,
      name: "Cookie 3",
      price: "$10",
      rating: 4.3,
    },
  ]);

  const limitedBestSellers = bestSellers.slice(0, 6);
  const cakes = limitedBestSellers.slice(0, 3); // First 3 items are cakes
  const cookies = limitedBestSellers.slice(3, 6);

  return (
   




 











    <div className="py-10">
      <div className="responsive flex flex-col gap-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {cakes.map((cake) => (
            <div key={cake.id} className="mr-2">
              <Card card={cake} />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {cookies.map((cookie) => (
            <div key={cookie.id} className="mr-2">
              <Card card={cookie} />
            </div>
          ))}
        </div>
      </div>
    </div>

    
  );
};

export default CookiesItem;
