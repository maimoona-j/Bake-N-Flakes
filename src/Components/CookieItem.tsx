
// code before array

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { useState } from "react";

// export default function CookieItem() {
//   const [cookieName, setCookieName] = useState("cookies");
//   return (
//     <div className="border border-solid w-64 h-96 mb-6 ml-5 bg-pink-200 m-10">
//       <img
//         src="https://cdn.pixabay.com/photo/2015/05/07/15/08/cookie-756601_640.jpg"
//         alt="img"
//         className="w-64 h-42 "
//       />

//       <div className="flex items-center text-center mt-5 mr-5">
//         <div className="ml-auto">
//           <h6>reviews</h6>
//           {[1, 2, 3, 4].map((star: any) => (
//             <FontAwesomeIcon icon="star" className="text-yellow-500   " />
//           ))}
//         </div>
//       </div>
//       <div className="m-5">
//         <h3 className="text-lg mb-2">{cookieName}</h3>
//         <p className="mb-2">$30</p>
//         <button className="bg-blue-300  p-3 mb-8 w-32 hover:bg-gray-400 ">buy now</button>
//       </div>
//     </div>
//   );
// }

// first try with array

// import { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
//   const { imageSrc, name, price, rating } = card;

//   return (
//     <div className="border border-solid w-64 h-96 mb-6 ml-5 bg-pink-200 m-10">
//       <img src={imageSrc} alt="img" className="w-64 h-42" />

//       <div className="flex items-center text-center mt-5 mr-5">
//         <div className="ml-auto">
//           <h6>reviews</h6>
//           {[...Array(Math.floor(rating))].map((_, index) => (
//             <FontAwesomeIcon icon="star" className="text-yellow-500" key={index} />
//           ))}
//         </div>
//       </div>
//       <div className="m-5">
//         <h3 className="text-lg mb-2">{name}</h3>
//         <p className="mb-2">{price}</p>
//         <button className="bg-blue-300 p-3 mb-8 w-32 hover:bg-gray-400">buy now</button>
//       </div>
//     </div>
//   );
// };

// const HomePage: React.FC = () => {
//   const [bestSellers, setBestSellers] = useState([
//     {
//       id: 1,
//       imageSrc:  require('../images/cake1.jpg').default,
//       name: "Cookie 1",
//       price: "$10",
//       rating: 4.5,
//     },
//     {
//       id: 2,
//       imageSrc: "../images/cake2.jpg",
//       name: "Cookie 2",
//       price: "$15",
//       rating: 4.2,
//     },
//     {
//       id: 3,
//       imageSrc: "../images/cake3.jpg",
//       name: "Cookie 2",
//       price: "$12",
//       rating: 4.2,
//     },
//     {
//       id: 4,
//       imageSrc: "../images/cookies1.jpg",
//       name: "Cookie 2",
//       price: "$18",
//       rating: 4.4,
//     },
//     {
//       id: 5,
//       imageSrc: "../images/cookies2.jpg",
//       name: "Cookie 2",
//       price: "$15",
//       rating: 4.5,
//     },
//     {
//       id: 6,
//       imageSrc: "../images/cookies3.jpg",
//       name: "Cookie 2",
//       price: "$10",
//       rating: 4.3,
//     },
//   ]);

//   return (
//     <div>
//       {bestSellers.map((card) => (
//         <Card key={card.id} card={card} />
//       ))}
//     </div>
//   );
// };

// export default HomePage;

 



 
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
    <div className="border border-solid w-64 h-96 mb-6 ml-5 bg-pink-200 m-10">
      <img src={imageSrc} alt="img" className="w-64 h-42" />

      <div className="flex items-center text-center mt-5 mr-5">
        <div className="ml-auto">
          <h6>reviews</h6>
          {[...Array(Math.floor(rating))].map((_, index) => (
            <FontAwesomeIcon
              icon="star"
              className="text-yellow-500"
              key={index}
            />
          ))}
        </div>
      </div>
      <div className="m-5">
        <h3 className="text-lg mb-2">{name}</h3>
        <p className="mb-2">{price}</p>
        <button className="bg-blue-300 p-3 mb-8 w-32 hover:bg-gray-400">
          buy now
        </button>
      </div>
    </div>
  );
};

const CookiesItem: React.FC = () => {
  const [bestSellers, setBestSellers] = useState([
    {
      id: 1,
      imageSrc: cake1,
      name: "Cookie 1",
      price: "$10",
      rating: 4.5,
    },
    {
      id: 2,
      imageSrc: cake2,
      name: "Cookie 2",
      price: "$15",
      rating: 4.2,
    },
    {
      id: 3,
      imageSrc: cake3,
      name: "Cookie 3",
      price: "$12",
      rating: 4.2,
    },
    {
      id: 4,
      imageSrc: cookies1,
      name: "Cookie 4",
      price: "$18",
      rating: 4.4,
    },
    {
      id: 5,
      imageSrc: cookies2,
      name: "Cookie 5",
      price: "$15",
      rating: 4.5,
    },
    {
      id: 6,
      imageSrc: cookies3,
      name: "Cookie 6",
      price: "$10",
      rating: 4.3,
    },
  ]);

  const limitedBestSellers = bestSellers.slice(0, 6);

  return (
    <div>
      {limitedBestSellers.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
};

export default CookiesItem;



// import React, { useState } from "react";
// import BestSeller from "./BestSeller";
// import cake1 from "../images/cake1.jpg";
// import cake2 from "../images/cake2.jpg";
// import cake3 from "../images/cake3.jpg";
// import cookies1 from "../images/cookies1.jpg";
// import cookies2 from "../images/cookies2.jpg";
// import cookies3 from "../images/cookies3.jpg";

// interface CardData {
//   id: number;
//   imageSrc: string;
//   name: string;
//   price: string;
//   rating: number;
// }

// const CookieItem: React.FC = () => {
//   const [bestSellers, setBestSellers] = useState<CardData[]>([
//     {
//       id: 1,
//       imageSrc: cake1,
//       name: "Cookie 1",
//       price: "$10",
//       rating: 4.5,
//     },
//     {
//       id: 2,
//       imageSrc: cake2,
//       name: "Cookie 2",
//       price: "$15",
//       rating: 4.2,
//     },
//     {
//       id: 3,
//       imageSrc: cake3,
//       name: "Cookie 3",
//       price: "$12",
//       rating: 4.2,
//     },
//     {
//       id: 4,
//       imageSrc: cookies1,
//       name: "Cookie 4",
//       price: "$18",
//       rating: 4.4,
//     },
//     {
//       id: 5,
//       imageSrc: cookies2,
//       name: "Cookie 5",
//       price: "$15",
//       rating: 4.5,
//     },
//     {
//       id: 6,
//       imageSrc: cookies3,
//       name: "Cookie 6",
//       price: "$10",
//       rating: 4.3,
//     },
//   ]);

//   const limitedBestSellers = bestSellers.slice(0, 6);

//   return (
//     <div>
//       {limitedBestSellers.map((card) => (
//         <BestSeller key={card.id} {...card} />
//       ))}
//     </div>
//   );
// };

// export default CookieItem;