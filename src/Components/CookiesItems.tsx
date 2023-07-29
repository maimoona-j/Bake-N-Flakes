// import { useState } from "react";
// import Spinner from "../Components/Spinner";
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
//   const { imageSrc, name, price, rating } = card;
//   const navigate = useNavigate();
//   const [isAddingToCart, setIsAddingToCart] = useState(false);

//   const handleCart = () => {
//     setIsAddingToCart(true);
//     setTimeout(() => {
//       navigate("/cart");
//     }, 1000); // Navigate after 1 second (you can adjust the time as needed)
//   };

//   return (
//     <div className="border border-solid w-64 h-[400px] mb-2 rounded-xl bg-pink-200">
//       <img src={imageSrc} alt="img" className="w-64 h-42" />

//       <div className="flex items-center justify-center mt-2">
//         <div className="flex">
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
//       <div className="m-2 mt-3">
//         <h3 className="text-lg mb-1">{name}</h3>
//         <p className="mb-1">{price}</p>
//         <div className="flex">
//           <div className="mt-4">
//             <label htmlFor="input">Items: </label>
//             <input type="number" className="border border-gray-300 w-16 h-6" />
//           </div>

//           <button
//             className="bg-blue-300 p-2 w-36 mt-7 rounded hover:bg-gray-400"
//             onClick={handleCart}
//           >
//             {isAddingToCart ? <Spinner /> : "Add to Cart"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };
// const Items: React.FC = () => {
//   const [bestSellers, setBestSellers] = useState([
//     {
//       id: 1,
//       imageSrc: cake1,
//       name: "Cookies 1",
//       price: "$10",
//       rating: 4.5,
//     },
//     {
//       id: 2,
//       imageSrc: cake2,
//       name: "Cookies 2",
//       price: "$15",
//       rating: 4.2,
//     },
//     {
//       id: 3,
//       imageSrc: cake3,
//       name: "Cookies 3",
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
//     {
//       id: 7,
//       imageSrc: cake1,
//       name: "Cookies 7",
//       price: "$10",
//       rating: 4.5,
//     },
//     {
//       id: 8,
//       imageSrc: cake2,
//       name: "Cookies 8",
//       price: "$15",
//       rating: 4.2,
//     },
//     {
//       id: 9,
//       imageSrc: cake3,
//       name: "Cookies 9",
//       price: "$12",
//       rating: 4.2,
//     },
//     {
//       id: 10,
//       imageSrc: cookies1,
//       name: "Cookie 12",
//       price: "$18",
//       rating: 4.4,
//     },
//     {
//       id: 11,
//       imageSrc: cookies2,
//       name: "Cookies 13",
//       price: "$15",
//       rating: 4.5,
//     },
//     {
//       id: 12,
//       imageSrc: cookies3,
//       name: "Cookies 14",
//       price: "$10",
//       rating: 4.3,
//     },
//   ]);

//   const limitedBestSellers = bestSellers.slice(0, 12);

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-3 w-[950px]   pl-4 mr-56 mt-12 ">
//       {limitedBestSellers.map((item) => (
//         <div key={item.id} className="p-2">
//           <Card card={item} />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Items;






import { useState } from "react";
import Spinner from "../Components/Spinner";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  const handleCart = () => {
    setIsAddingToCart(true);
    setTimeout(() => {
      navigate("/cart");
    }, 1000); // Navigate after 1 second (you can adjust the time as needed)
  };

  return (
    <div className="rounded-xl bg-pink-200 cursor-pointer shadow-lg">
      <img src={imageSrc} alt="img" className="rounded-t-xl transition-all duration-500 hover:scale-90 hover:brightness-50" />

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
        <div className="flex   justify-between gap-2 items-center py-2">
          <div className="inline-flex items-center gap-1">
            <label htmlFor="input" className="font-semibold">Items: </label>
            <input type="number" className="border border-pink-500 rounded-lg w-12 sm:w-16 xl:w-24 py-2 bg-white px-2" />
          </div>

          <button
            className="bg-pink-500 font-semibold text-pink-200 hover:text-pink-500 hover:bg-pink-200 border border-pink-400 transition-all whitespace-nowrap duration-300 px-2 sm:px-5 lg:px-4 xl:px-6 py-2 rounded "
            onClick={handleCart}
          >
            {isAddingToCart ? <Spinner /> : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};
const Items: React.FC = () => {
  const [bestSellers, setBestSellers] = useState([
    {
      id: 1,
      imageSrc: cake1,
      name: "Cookies 1",
      price: "$10",
      rating: 4.5,
    },
    {
      id: 2,
      imageSrc: cake2,
      name: "Cookies 2",
      price: "$15",
      rating: 4.2,
    },
    {
      id: 3,
      imageSrc: cake3,
      name: "Cookies 3",
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
    {
      id: 7,
      imageSrc: cake1,
      name: "Cookies 7",
      price: "$10",
      rating: 4.5,
    },
    {
      id: 8,
      imageSrc: cake2,
      name: "Cookies 8",
      price: "$15",
      rating: 4.2,
    },
    {
      id: 9,
      imageSrc: cake3,
      name: "Cookies 9",
      price: "$12",
      rating: 4.2,
    },
    {
      id: 10,
      imageSrc: cookies1,
      name: "Cookie 12",
      price: "$18",
      rating: 4.4,
    },
    {
      id: 11,
      imageSrc: cookies2,
      name: "Cookies 13",
      price: "$15",
      rating: 4.5,
    },
    {
      id: 12,
      imageSrc: cookies3,
      name: "Cookies 14",
      price: "$10",
      rating: 4.3,
    },
  ]);

  const limitedBestSellers = bestSellers.slice(0, 12);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {limitedBestSellers.map((item) => (
        <div key={item.id}>
          <Card card={item} />
        </div>
      ))}
    </div>
  );
};

export default Items;






