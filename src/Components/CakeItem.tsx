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
    <div className="border border-solid w-64 h-[400px] mb-2 rounded-xl bg-pink-200">
      <img src={imageSrc} alt="img" className="w-64 h-42" />

      <div className="flex items-center justify-center mt-2">
        <div className="flex">
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
      <div className="m-2">
        <h3 className="text-lg mb-1">{name}</h3>
        <p className="mb-1">{price}</p>
        <div className="flex">
          <div className="mt-4">
            <label htmlFor="input">Items: </label>
            <input type="number" className="border border-gray-300 w-16 h-6 " />
          </div>

          <button
            className="bg-blue-300 p-2 w-36 mt-7 rounded hover:bg-gray-400"
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
      name: "Cake 4",
      price: "$18",
      rating: 4.4,
    },
    {
      id: 5,
      imageSrc: cookies2,
      name: "Cake 5",
      price: "$15",
      rating: 4.5,
    },
    {
      id: 6,
      imageSrc: cookies3,
      name: "Cake 6",
      price: "$10",
      rating: 4.3,
    },
    {
      id: 7,
      imageSrc: cake1,
      name: "Cake 7",
      price: "$10",
      rating: 4.5,
    },
    {
      id: 8,
      imageSrc: cake2,
      name: "Cake 8",
      price: "$15",
      rating: 4.2,
    },
    {
      id: 9,
      imageSrc: cake3,
      name: "Cake 9",
      price: "$12",
      rating: 4.2,
    },
    {
      id: 10,
      imageSrc: cookies1,
      name: "Cake 10",
      price: "$18",
      rating: 4.4,
    },
    {
      id: 11,
      imageSrc: cookies2,
      name: "Cake 11",
      price: "$15",
      rating: 4.5,
    },
    {
      id: 12,
      imageSrc: cookies3,
      name: "Cake 12",
      price: "$10",
      rating: 4.3,
    },
  ]);

  const limitedBestSellers = bestSellers.slice(0, 12);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 w-[950px]   pl-4   mt-12 ">
      {limitedBestSellers.map((item) => (
        <div key={item.id} className="p-2">
          <Card card={item} />
        </div>
      ))}
    </div>
  );
};

export default Items;
