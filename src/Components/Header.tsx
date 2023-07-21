// import { Link, Navigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { fas } from "@fortawesome/free-solid-svg-icons";
// import {
//   faInstagram,
//   faFacebook,
//   faTwitter,
// } from "@fortawesome/free-brands-svg-icons";
// import { faBars } from "@fortawesome/free-solid-svg-icons";

// library.add(fas);

// export default function Header() {
//   const navigate = useNavigate();
//   const handleCart = () => {
//     navigate("/cart");
//   };

//   return (
//     <div className="sticky top-0 z-50">
//       <div className="flex items-center justify-end bg-black">
//         <FontAwesomeIcon
//           icon={faInstagram}
//           className="text-white text-xl mx-2"
//         />
//         <FontAwesomeIcon
//           icon={faFacebook}
//           className="text-white text-xl mx-2"
//         />
//         <FontAwesomeIcon icon={faTwitter} className="text-white text-xl mx-2" />
//       </div>

//       <div className="bg-pink-200 h-24 flex items-center justify-between cursor-pointer">
//         <div className="mx-auto flex items-center">
//           <FontAwesomeIcon icon="search" className="text-2xl mr-2 sm:mr-12" />
//           <FontAwesomeIcon icon="user" className="text-2xl mr-2 sm:mr-12" />
//           <h1 className="text-xl whitespace-nowrap">Bake n' Flakes</h1>
//           <FontAwesomeIcon icon="heart" className="text-2xl ml-2 sm:ml-12" />
//           <FontAwesomeIcon
//             icon="shopping-cart"
//             className="text-2xl ml-2 sm:ml-12"
//             onClick={handleCart}
//           />
//         </div>
//       </div>
//       {/* <FontAwesomeIcon icon={faBars} /> */}
//       <div className="h-16 flex justify-center items-center bg-blue-200">
//         <ul className="flex space-x-2 sm:space-x-12 cursor-pointer">
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/cookies">Cookies</Link>
//           </li>
//           <li>
//             <Link to="/cakes">Cakes</Link>
//           </li>
//           <li>
//             <Link to="/blog">Blog</Link>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// }


// trial


// import React, { useState } from "react";
// import { Link, Navigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { fas } from "@fortawesome/free-solid-svg-icons";
// import {
//   faInstagram,
//   faFacebook,
//   faTwitter,
// } from "@fortawesome/free-brands-svg-icons";
// import { faBars } from "@fortawesome/free-solid-svg-icons";

// library.add(fas);

// const Header = () => {
//   const navigate = useNavigate();
//   const handleCart = () => {
//     navigate("/cart");
//   };

//   const [showMenu, setShowMenu] = useState(false);

//   const handleMenuToggle = () => {
//     setShowMenu(!showMenu);
//   };

//   return (
//     <div className="sticky top-0 z-50">
//       <div className="flex items-center justify-end bg-black">
//         <FontAwesomeIcon
//           icon={faInstagram}
//           className="text-white text-xl mx-2"
//         />
//         <FontAwesomeIcon
//           icon={faFacebook}
//           className="text-white text-xl mx-2"
//         />
//         <FontAwesomeIcon icon={faTwitter} className="text-white text-xl mx-2" />
//       </div>

//       {/* The blue navigation bar */}
//       <div className="bg-pink-200 h-24 flex items-center justify-between hidden sm:flex">
//         <div className="mx-auto flex items-center">
//           <FontAwesomeIcon icon="search" className="text-2xl mr-2 sm:mr-12" />
//           <FontAwesomeIcon icon="user" className="text-2xl mr-2 sm:mr-12" />
//           <h1 className="text-xl whitespace-nowrap">Bake n' Flakes</h1>
//           <FontAwesomeIcon icon="heart" className="text-2xl ml-2 sm:ml-12" />
//           <FontAwesomeIcon
//             icon="shopping-cart"
//             className="text-2xl ml-2 sm:ml-12"
//             onClick={handleCart}
//           />
//         </div>
//       </div>

//       {/* Hamburger menu for smaller screens */}
//       <div className="bg-pink-200 h-16 flex justify-between items-center sm:hidden">
//         <FontAwesomeIcon
//           icon={faBars}
//           className="text-2xl ml-2 cursor-pointer"
//           onClick={handleMenuToggle}
//         />
//       </div>

//       {/* Menu items for smaller screens */}
//       {showMenu && (
//         <div className="bg-pink-200 h-24 flex flex-col justify-center items-center sm:hidden">
//           <Link to="/">Home</Link>
//           <Link to="/cookies">Cookies</Link>
//           <Link to="/cakes">Cakes</Link>
//           <Link to="/blog">Blog</Link>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Header;


// import { Link, Navigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { fas } from "@fortawesome/free-solid-svg-icons";
// import {
//   faInstagram,
//   faFacebook,
//   faTwitter,
// } from "@fortawesome/free-brands-svg-icons";
// import { faBars } from "@fortawesome/free-solid-svg-icons";

// library.add(fas);

// export default function Header() {
//   const navigate = useNavigate();
//   const handleCart = () => {
//     navigate("/cart");
//   };

//   return (
//     <div className="sticky top-0 z-50">
//       <div className="flex items-center justify-end bg-black">
//         <FontAwesomeIcon
//           icon={faInstagram}
//           className="text-white text-xl mx-2"
//         />
//         <FontAwesomeIcon
//           icon={faFacebook}
//           className="text-white text-xl mx-2"
//         />
//         <FontAwesomeIcon icon={faTwitter} className="text-white text-xl mx-2" />
//       </div>

//       <div className="bg-pink-200 h-24 flex flex-wrap sm:flex-nowrap items-center justify-between cursor-pointer">
//         <div className="mx-auto flex items-center">
//           <FontAwesomeIcon icon="search" className="text-2xl mr-2 sm:mr-12" />
//           <FontAwesomeIcon icon="user" className="text-2xl mr-2 sm:mr-12" />
//           <h1 className="text-xl whitespace-nowrap sm:whitespace-normal">Bake n' Flakes</h1>
//           <FontAwesomeIcon icon="heart" className="text-2xl ml-2 sm:ml-12" />
//           <FontAwesomeIcon
//             icon="shopping-cart"
//             className="text-2xl ml-2 sm:ml-12"
//             onClick={handleCart}
//           />
//         </div>
//         <FontAwesomeIcon icon={faBars} className="text-2xl sm:hidden mt-4 mr-4" />
//       </div>

//       <div className="h-16 flex justify-center items-center bg-blue-200">
//         <ul className="hidden sm:flex space-x-2 sm:space-x-12 cursor-pointer">
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/cookies">Cookies</Link>
//           </li>
//           <li>
//             <Link to="/cakes">Cakes</Link>
//           </li>
//           <li>
//             <Link to="/blog">Blog</Link>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// }


import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

export default function Header() {
  const navigate = useNavigate();
  const handleCart = () => {
    navigate("/cart");
  };

  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="sticky top-0 z-50">
      <div className="flex items-center justify-end bg-black">
        <FontAwesomeIcon
          icon={faInstagram}
          className="text-white text-xl mx-2"
        />
        <FontAwesomeIcon
          icon={faFacebook}
          className="text-white text-xl mx-2"
        />
        <FontAwesomeIcon icon={faTwitter} className="text-white text-xl mx-2" />
      </div>

      {/* Show the original header layout */}
      <div className="bg-pink-200 h-24 flex items-center justify-between cursor-pointer">
        <div className="mx-auto flex items-center">
          <FontAwesomeIcon icon="search" className="text-2xl mr-2 sm:mr-12" />
          <FontAwesomeIcon icon="user" className="text-2xl mr-2 sm:mr-12" />
          <h1 className="text-xl whitespace-nowrap sm:whitespace-normal">Bake n' Flakes</h1>
          <FontAwesomeIcon icon="heart" className="text-2xl ml-2 sm:ml-12" />
          <FontAwesomeIcon
            icon="shopping-cart"
            className="text-2xl ml-2 sm:ml-12"
            onClick={handleCart}
          />
        </div>
        {/* Show the hamburger icon on smaller screens */}
        <FontAwesomeIcon
          icon={faBars}
          className="text-2xl sm:hidden mb-2 mr-4"
          onClick={toggleNav}
        />
      </div>

      {/* Conditionally render the navigation links based on the isNavOpen state */}
      <div
        className={`h-16 flex justify-center items-center bg-blue-200 ${
          isNavOpen ? "block" : "hidden"
        } sm:flex`}
      >
        <ul className="flex space-x-2 sm:space-x-12 cursor-pointer">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cookies">Cookies</Link>
          </li>
          <li>
            <Link to="/cakes">Cakes</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
