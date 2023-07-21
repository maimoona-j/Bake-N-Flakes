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
    <div className="border border-solid w-64 h-[400px] mb-6 ml-5 rounded-xl bg-pink-200 m-10">
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
    <div className="flex flex-col">
      <div className="flex flex-row">
        {cakes.map((cake) => (
          <div key={cake.id}>
            <Card card={cake} />
          </div>
        ))}
      </div>
      <div className="flex flex-row">
        {cookies.map((cookie) => (
          <div key={cookie.id}>
            <Card card={cookie} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CookiesItem;



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
  //   {
  //     id: 1,
  //     imageSrc: cake1,
  //     name: "Cake 1",
  //     price: "$10",
  //     rating: 4.5,
  //   },
  //   {
  //     id: 2,
  //     imageSrc: cake2,
  //     name: "Cake 2",
  //     price: "$15",
  //     rating: 4.2,
  //   },
  //   {
  //     id: 3,
  //     imageSrc: cake3,
  //     name: "Cake 3",
  //     price: "$12",
  //     rating: 4.2,
  //   },
  //   {
  //     id: 4,
  //     imageSrc: cookies1,
  //     name: "Cookie 1",
  //     price: "$18",
  //     rating: 4.4,
  //   },
  //   {
  //     id: 5,
  //     imageSrc: cookies2,
  //     name: "Cookie 2",
  //     price: "$15",
  //     rating: 4.5,
  //   },
  //   {
  //     id: 6,
  //     imageSrc: cookies3,
  //     name: "Cookie 3",
  //     price: "$10",
  //     rating: 4.3,
  //   },
  // ]);

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
//     <div className="border border-solid w-full md:w-64 h-[400px] mb-6 md:mb-0 md:ml-5 rounded-xl bg-pink-200 md:m-10">
//       <img src={imageSrc} alt="img" className="w-full h-42 md:h-[200px]" />

//       <div className="flex items-center text-center mt-5 md:mr-5">
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
    // {
    //   id: 1,
    //   imageSrc: cake1,
    //   name: "Cake 1",
    //   price: "$10",
    //   rating: 4.5,
    // },
    // {
    //   id: 2,
    //   imageSrc: cake2,
    //   name: "Cake 2",
    //   price: "$15",
    //   rating: 4.2,
    // },
    // {
    //   id: 3,
    //   imageSrc: cake3,
    //   name: "Cake 3",
    //   price: "$12",
    //   rating: 4.2,
    // },
    // {
    //   id: 4,
    //   imageSrc: cookies1,
    //   name: "Cookie 1",
    //   price: "$18",
    //   rating: 4.4,
    // },
    // {
    //   id: 5,
    //   imageSrc: cookies2,
    //   name: "Cookie 2",
    //   price: "$15",
    //   rating: 4.5,
    // },
    // {
    //   id: 6,
    //   imageSrc: cookies3,
    //   name: "Cookie 3",
    //   price: "$10",
    //   rating: 4.3,
    // },
//   ]);


//   const limitedBestSellers = bestSellers.slice(0, 6);
//   const cakes = limitedBestSellers.slice(0, 3); // First 3 items are cakes
//   const cookies = limitedBestSellers.slice(3, 6);

//   return (
//     <div className="flex flex-col md:flex-row">
//       <div className="flex flex-row flex-wrap md:w-3/4">
//         {cakes.map((cake) => (
//           <div key={cake.id} className="w-full md:w-1/3">
//             <Card card={cake} />
//           </div>
//         ))}
//       </div>
//       <div className="flex flex-row flex-wrap md:w-1/4">
//         {cookies.map((cookie) => (
//           <div key={cookie.id} className="w-full md:w-1/2">
//             <Card card={cookie} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CookiesItem;



// import { useState } from "react";
// import { Carousel } from "react-responsive-carousel";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
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
//     <div className="border border-solid w-full md:w-64 h-[400px] mb-6 md:mb-0 md:ml-5 rounded-xl bg-pink-200 md:m-10">
//       <img src={imageSrc} alt="img" className="w-full h-42 md:h-[200px]" />

//       <div className="flex items-center text-center mt-5 md:mr-5">
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
    // {
    //   id: 1,
    //   imageSrc: cake1,
    //   name: "Cake 1",
    //   price: "$10",
    //   rating: 4.5,
    // },
    // {
    //   id: 2,
    //   imageSrc: cake2,
    //   name: "Cake 2",
    //   price: "$15",
    //   rating: 4.2,
    // },
    // {
    //   id: 3,
    //   imageSrc: cake3,
    //   name: "Cake 3",
    //   price: "$12",
    //   rating: 4.2,
    // },
    // {
    //   id: 4,
    //   imageSrc: cookies1,
    //   name: "Cookie 1",
    //   price: "$18",
    //   rating: 4.4,
    // },
    // {
    //   id: 5,
    //   imageSrc: cookies2,
    //   name: "Cookie 2",
    //   price: "$15",
    //   rating: 4.5,
    // },
    // {
    //   id: 6,
    //   imageSrc: cookies3,
    //   name: "Cookie 3",
    //   price: "$10",
    //   rating: 4.3,
    // },
//   ]);

//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };

//   const limitedBestSellers = bestSellers.slice(0, 6);
//   const cakes = limitedBestSellers.slice(0, 3); // First 3 items are cakes
//   const cookies = limitedBestSellers.slice(3, 6);

//   return (
//     <div className="flex flex-col md:flex-row">
//       {/* Regular card layout for larger screens */}
//       <div className="hidden md:flex md:w-3/4">
//         <div className="flex flex-row flex-wrap">
//           {cakes.map((cake) => (
//             <div key={cake.id} className="w-full md:w-1/3">
//               <Card card={cake} />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Carousel for smaller screens */}
//       <div className="md:hidden w-full">
//         <Carousel showThumbs={false} infiniteLoop>
//           {cakes.map((cake) => (
//             <div key={cake.id}>
//               <Card card={cake} />
//             </div>
//           ))}
//         </Carousel>
//       </div>

//       {/* Regular card layout for larger screens */}
//       <div className="hidden md:flex md:w-1/4">
//         <div className="flex flex-row flex-wrap">
//           {cookies.map((cookie) => (
//             <div key={cookie.id} className="w-full md:w-1/2">
//               <Card card={cookie} />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Carousel for smaller screens */}
//       <div className="md:hidden w-full">
//         <Carousel showThumbs={false} infiniteLoop>
//           {cookies.map((cookie) => (
//             <div key={cookie.id}>
//               <Card card={cookie} />
//             </div>
//           ))}
//         </Carousel>
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
//     <div className="border border-solid w-64 h-[400px] mb-6 ml-5 rounded-xl bg-pink-200 m-10">
//     <img src={imageSrc} alt="img" className="w-64 h-42" />

//     <div className="flex items-center text-center mt-5 mr-5">
//       <div className="ml-auto">
//         <h6>reviews</h6>
//         {[...Array(Math.floor(rating))].map((_, index) => (
//           <FontAwesomeIcon
//             icon="star"
//             className="text-yellow-500"
//             key={index}
//           />
//         ))}
//       </div>
//     </div>
//     <div className="m-5">
//       <h3 className="text-lg mb-2">{name}</h3>
//       <p className="mb-2">{price}</p>
//       <button className="bg-blue-300 p-3 mb-8 w-32 rounded-full hover:bg-gray-400">
//         buy now
//       </button>
//     </div>
//   </div>
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
//     <div className="flex flex-col sm:flex-row">
//     <div className="w-full sm:w-3/4">
//       <div className="flex flex-row flex-wrap">
//         {cakes.map((cake) => (
//           <div key={cake.id} className="w-full sm:w-1/3">
//             <Card card={cake} />
//           </div>
//         ))}
//       </div>
//     </div>
//     <div className="w-full sm:w-1/4 mt-4 sm:mt-0">
//       <div className="flex flex-row flex-wrap">
//         {cookies.map((cookie) => (
//           <div key={cookie.id} className="w-full sm:w-1/2">
//             <Card card={cookie} />
//           </div>
//         ))}
//       </div>
//     </div>
//   </div>
//   );
// };

// export default CookiesItem;