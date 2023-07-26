// import { useState } from "react";
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
//   const { imageSrc, name, price, rating } = card;

//   return (
//     <div className="border border-solid w-64 h-[400px] mb-6 ml-5 rounded-xl bg-pink-200 m-10">
//       <img src={imageSrc} alt="img" className="w-64 h-42" />

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
//         <button className="bg-blue-300 p-3 mb-8 w-32 rounded-full hover:bg-gray-400">
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
//     <div className="flex flex-col">
//       <div className="flex flex-row">
//         {cakes.map((cake) => (
//           <div key={cake.id}>
//             <Card card={cake} />
//           </div>
//         ))}
//       </div>
//       <div className="flex flex-row">
//         {cookies.map((cookie) => (
//           <div key={cookie.id}>
//             <Card card={cookie} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CookiesItem;

// trial

// import { useState } from "react";
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
//   const { imageSrc, name, price, rating } = card;

//   return (
//     <div className="border border-solid w-64 h-[400px] mb-6 ml-5 rounded-xl bg-pink-200 m-5 md:w-80 md:h-[450px] md:mb-8 md:ml-8">
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
//         <button className="bg-blue-300 p-3 mb-8 w-32 rounded-full hover:bg-gray-400">
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
//     <div className="flex flex-col  border border-blue-700 ">
//       <div className="flex flex-row  flex-wrap">
//         {cakes.map((cake) => (
//           <div key={cake.id}>
//             <Card card={cake} />
//           </div>
//         ))}
//       </div>
//       <div className="flex flex-row flex-wrap">
//         {cookies.map((cookie) => (
//           <div key={cookie.id}>
//             <Card card={cookie} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CookiesItem;

// import { useState } from "react";
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
//   const { imageSrc, name, price, rating } = card;

//   return (
//     <div className="border border-solid w-64 h-[400px] mb-6 ml-5 rounded-xl bg-pink-200 m-5 md:w-80 md:h-[450px] md:mb-8 md:ml-8">
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
//         <button className="bg-blue-300 p-3 mb-8 w-32 rounded-full hover:bg-gray-400">
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
//     <div className="flex flex-col mr-56 border border-blue-700 ">
//       <div className="flex flex-row justify-center flex-wrap">
//         {cakes.map((cake) => (
//           <div key={cake.id} className="mr-4">
//             <Card card={cake} />
//           </div>
//         ))}
//       </div>
//       <div className="flex flex-row flex-wrap">
//         {cookies.map((cookie) => (
//           <div key={cookie.id} className="mr-4">
//             <Card card={cookie} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CookiesItem;

// import { useState } from "react";
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
//   const { imageSrc, name, price, rating } = card;

//   return (
//     <div className="border border-solid w-64 h-[400px] mb-6  rounded-xl bg-pink-200 m-5 md:w-80 md:h-[450px] md:mb-8 md:ml-8">
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
//         <button className="bg-blue-300 p-3 mb-8 w-32 rounded-full hover:bg-gray-400">
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
   

//     <div className="justify-center items-center  ">
//       <div className="flex flex-col">
//         <div className="flex flex-row flex-wrap">
//           {cakes.map((cake) => (
//             <div key={cake.id} className="mr-2">
//               <Card card={cake} />
//             </div>
//           ))}
//         </div>
//         <div className="flex flex-row flex-wrap">
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







// import { useState } from "react";
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
//   const { imageSrc, name, price, rating } = card;

//   return (
//     <div className="border border-solid w-64 h-[400px] mb-6  rounded-xl bg-pink-200  md:w-80 md:h-[450px] md:mb-8 md:ml-8">
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
//         <button className="bg-blue-300 p-3 mb-8 w-32 rounded-full hover:bg-gray-400">
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
//       <div className="flex flex-col ">
//         <div className="flex flex-row md:flex-wrap flex-nowrap">
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
    <div className="border border-solid w-full md:w-64 h-auto mb-6  rounded-xl bg-pink-200  md:w-80 md:h-[450px] md:mb-8 md:ml-8">
      <img src={imageSrc} alt="img" className="w-full h-42 md:h-52" />

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
        <button className="bg-blue-300 p-3 mb-8 w-32 rounded-full hover:bg-gray-400">
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
      name: "Cake 1",
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
   




 











    <div className="  ">
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-row  flex-nowrap">
          {cakes.map((cake) => (
            <div key={cake.id} className="mr-2">
              <Card card={cake} />
            </div>
          ))}
        </div>
        <div className="flex flex-row  flex-wrap">
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
