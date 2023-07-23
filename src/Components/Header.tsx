 

// import { Link, Navigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";
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

//   const [isNavOpen, setIsNavOpen] = useState(false);

//   const toggleNav = () => {
//     setIsNavOpen(!isNavOpen);
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

//       {/* Show the original header layout */}
//       <div className="bg-pink-200 h-24 flex items-center justify-between cursor-pointer">
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
//         {/* Show the hamburger icon on smaller screens */}
//         <FontAwesomeIcon
//           icon={faBars}
//           className="text-2xl sm:hidden mb-2 mr-4"
//           onClick={toggleNav}
//         />
//       </div>

//       {/* Conditionally render the navigation links based on the isNavOpen state */}
//       <div
//         className={`h-16 flex justify-center items-center bg-blue-200 ${
//           isNavOpen ? "block" : "hidden"
//         } sm:flex`}
//       >
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









// import { Link, Navigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";
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

//   const [isNavOpen, setIsNavOpen] = useState(false);

//   const toggleNav = () => {
//     setIsNavOpen(!isNavOpen);
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

//       {/* Show the original header layout */}
//       <div className="bg-pink-200 h-24 flex items-center justify-between cursor-pointer">
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
//         {/* Show the hamburger icon on smaller screens */}
//         <FontAwesomeIcon
//           icon={faBars}
//           className="text-2xl sm:hidden mb-2 mr-4"
//           onClick={toggleNav}
//         />
//       </div>

//       {/* Conditionally render the navigation links based on the isNavOpen state */}
//       <div
//         className={`h-16 flex justify-center items-center bg-blue-200 ${
//           isNavOpen ? "block" : "hidden"
//         } sm:flex`}
//       >
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





 

// import { Link, Navigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";
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

//   const [isNavOpen, setIsNavOpen] = useState(false);

//   const toggleNav = () => {
//     setIsNavOpen(!isNavOpen);
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

//       {/* Show the original header layout */}
//       <div className="bg-pink-200 h-24 flex items-center justify-between cursor-pointer">
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
//         {/* Show the hamburger icon on smaller screens */}
//         <FontAwesomeIcon
//           icon={faBars}
//           className="text-2xl sm:hidden mb-2 mr-4"
//           onClick={toggleNav}
//         />
//       </div>

//       {/* Conditionally render the navigation links based on the isNavOpen state */}
//       <div
//         className={`h-16 flex justify-center items-center bg-blue-200 ${
//           isNavOpen ? "block" : "hidden"
//         } sm:flex`}
//       >
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





// import { Link, Navigate } from "react-router-dom";
// import Spinner from "../Components/Spinner";
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";
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

//   const [isNavOpen, setIsNavOpen] = useState(false);

//   const toggleNav = () => {
//     setIsNavOpen(!isNavOpen);
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

//       {/* Show the original header layout */}
//       <div className="bg-pink-200  h-24 flex items-center justify-between cursor-pointer">
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
//         {/* Show the hamburger icon on smaller screens */}
//         <FontAwesomeIcon
//           icon={faBars}
//           className="text-2xl sm:hidden mb-2 mr-4"
//           onClick={toggleNav}
//         />
//       </div>

//       {/* Conditionally render the navigation links based on the isNavOpen state */}
//       <div
//         className={`h-16 flex justify-center items-center bg-blue-200 ${
//           isNavOpen ? "block" : "hidden"
//         } sm:flex`}
//       >
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
//             <Link to="/blog">Recipe</Link>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// }






// import { Link, Navigate } from "react-router-dom";
// import Spinner from "../Components/Spinner";
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";
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

//   const [isNavOpen, setIsNavOpen] = useState(false);

//   const toggleNav = () => {
//     setIsNavOpen(!isNavOpen);
//   };

//   return (
//     <div className="sticky top-0 z-50">
      // <div className="flex items-center justify-end bg-black">
      //   <FontAwesomeIcon
      //     icon={faInstagram}
      //     className="text-white text-xl mx-2"
      //   />
      //   <FontAwesomeIcon
      //     icon={faFacebook}
      //     className="text-white text-xl mx-2"
      //   />
      //   <FontAwesomeIcon icon={faTwitter} className="text-white text-xl mx-2" />
//       </div>

//       {/* Show the original header layout */}
//       <div className="bg-pink-200  h-24 flex items-center justify-between cursor-pointer">
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
//         {/* Show the hamburger icon on smaller screens */}
//         <FontAwesomeIcon
//           icon={faBars}
//           className="text-2xl sm:hidden mb-2 mr-4"
//           onClick={toggleNav}
//         />
//       </div>

//       {/* Conditionally render the navigation links based on the isNavOpen state */}
//       <div
//         className={`h-16 flex justify-center items-center bg-blue-200 ${
//           isNavOpen ? "block" : "hidden"
//         } sm:flex`}
//       >
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
//             <Link to="/blog">Recipe</Link>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// }


// import { Link } from "react-router-dom";
// import { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { fas } from "@fortawesome/free-solid-svg-icons";
// import { faInstagram, faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
// import { faBars } from "@fortawesome/free-solid-svg-icons";
// import Spinner from "../Components/Spinner";

// library.add(fas);

// export default function Header() {
//   const [isLoading, setIsLoading] = useState(false);
//   const [isNavOpen, setIsNavOpen] = useState(false);

//   const toggleNav = () => {
//     setIsNavOpen(!isNavOpen);
//   };

//   const handleNavigate = (path:any) => {
//     setIsLoading(true);
//     setTimeout(() => {
//       setIsLoading(false);
//       window.location.href = path; // Using window.location.href to simulate navigation
//     }, 1000); // Delay for 1 second to simulate loading
//   };

//   return (
//     <div className="sticky top-0 z-50">
//       <div className="flex items-center justify-end bg-black">
//         <FontAwesomeIcon icon={faInstagram} className="text-white text-xl mx-2" />
//         <FontAwesomeIcon icon={faFacebook} className="text-white text-xl mx-2" />
//         <FontAwesomeIcon icon={faTwitter} className="text-white text-xl mx-2" />
//       </div>

//       {/* Show the original header layout */}
//       <div className="bg-pink-200  h-24 flex items-center justify-between cursor-pointer">
//         <div className="mx-auto flex items-center">
//           <FontAwesomeIcon icon="search" className="text-2xl mr-2 sm:mr-12" />
//           <FontAwesomeIcon icon="user" className="text-2xl mr-2 sm:mr-12" />
//           <h1 className="text-xl whitespace-nowrap sm:whitespace-normal">Bake n' Flakes</h1>
//           <FontAwesomeIcon icon="heart" className="text-2xl ml-2 sm:ml-12" />
//           <FontAwesomeIcon
//             icon="shopping-cart"
//             className="text-2xl ml-2 sm:ml-12"
//             onClick={() => handleNavigate("/cart")}
//           />
//         </div>
//         {/* Show the hamburger icon on smaller screens */}
//         <FontAwesomeIcon
//           icon={faBars}
//           className="text-2xl sm:hidden mb-2 mr-4"
//           onClick={toggleNav}
//         />
//       </div>

//       {/* Conditionally render the navigation links based on the isNavOpen state */}
//       <div
//         className={`h-16 flex justify-center items-center bg-blue-200 ${
//           isNavOpen ? "block" : "hidden"
//         } sm:flex`}
//       >
//         <ul className="flex space-x-2 sm:space-x-12 cursor-pointer">
//           <li onClick={() => handleNavigate("/")}>
//             {isLoading && <Spinner />} {/* Show spinner if isLoading is true */}
//             <Link to="/">Home</Link>
//           </li>
//           <li onClick={() => handleNavigate("/cookies")}>
//             {isLoading && <Spinner />} {/* Show spinner if isLoading is true */}
//             <Link to="/cookies">Cookies</Link>
//           </li>
//           <li onClick={() => handleNavigate("/cakes")}>
//             {isLoading && <Spinner />} {/* Show spinner if isLoading is true */}
//             <Link to="/cakes">Cakes</Link>
//           </li>
//           <li onClick={() => handleNavigate("/blog")}>
//             {isLoading && <Spinner />} {/* Show spinner if isLoading is true */}
//             <Link to="/blog">Recipe</Link>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// }

// import { Link } from "react-router-dom";

// import { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { fas } from "@fortawesome/free-solid-svg-icons";
// import { faInstagram, faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
// import { faBars } from "@fortawesome/free-solid-svg-icons";
// import Spinner from "../Components/Spinner";
// import Search from "../Components/Search";

// library.add(fas);

// export default function Header() {
//   const [isLoading, setIsLoading] = useState(false);
//   const [isNavOpen, setIsNavOpen] = useState(false);

//   const toggleNav = () => {
//     setIsNavOpen(!isNavOpen);
//   };

//   const handleNavigate = (path: string) => {
//     setIsLoading(true);
//     setTimeout(() => {
//       setIsLoading(false);
//       window.location.href = path; // Using window.location.href to simulate navigation
//     }, 1000); // Delay for 1 second to simulate loading
//   };

//   return (
//     <div className="sticky top-0 z-50">
//       <div className="flex items-center justify-end bg-black">
//         <FontAwesomeIcon icon={faInstagram} className="text-white text-xl mx-2" />
//         <FontAwesomeIcon icon={faFacebook} className="text-white text-xl mx-2" />
//         <FontAwesomeIcon icon={faTwitter} className="text-white text-xl mx-2" />
//       </div>

//       {/* Show the original header layout */}
//       <div className="bg-pink-200  h-24 flex items-center justify-between cursor-pointer">
//         <div className="mx-auto flex items-center">
//           <FontAwesomeIcon icon="search" className="text-2xl mr-2 sm:mr-12" />
//           <FontAwesomeIcon icon="user" className="text-2xl mr-2 sm:mr-12" />
//           <h1 className="text-xl whitespace-nowrap sm:whitespace-normal">Bake n' Flakes</h1>
//           <FontAwesomeIcon icon="heart" className="text-2xl ml-2 sm:ml-12" />
//           <FontAwesomeIcon
//             icon="shopping-cart"
//             className="text-2xl ml-2 sm:ml-12"
//             onClick={() => handleNavigate("/cart")}
//           />
//         </div>
//         {/* Show the hamburger icon on smaller screens */}
//         <FontAwesomeIcon
//           icon={faBars}
//           className="text-2xl sm:hidden mb-2 mr-4"
//           onClick={toggleNav}
//         />
//       </div>

//       {/* Conditionally render the navigation links based on the isNavOpen state */}
//       <div
//         className={`h-16 flex justify-center items-center bg-blue-200 ${
//           isNavOpen ? "block" : "hidden"
//         } sm:flex`}
//       >
//         <ul className="flex space-x-2 sm:space-x-12 cursor-pointer">
//           <li onClick={() => handleNavigate("/")}>
//             {isLoading ? <Spinner /> : null} {/* Show spinner if isLoading is true */}
//             <Link to="/">Home</Link>
//           </li>
//           <li onClick={() => handleNavigate("/cookies")}>
//             {isLoading ? <Spinner /> : null} {/* Show spinner if isLoading is true */}
//             <Link to="/cookies">Cookies</Link>
//           </li>
//           <li onClick={() => handleNavigate("/cakes")}>
//             {isLoading ? <Spinner /> : null} {/* Show spinner if isLoading is true */}
//             <Link to="/cakes">Cakes</Link>
//           </li>
//           <li onClick={() => handleNavigate("/blog")}>
//             {isLoading ? <Spinner /> : null} {/* Show spinner if isLoading is true */}
//             <Link to="/blog">Recipe</Link>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// }


import { Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import Spinner from "../Components/Spinner";
import Search from "../Components/Search";

library.add(fas);

export default function Header() {
  const [isLoading, setIsLoading] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleNavigate = (path: string) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      window.location.href = path; // Using window.location.href to simulate navigation
    }, 1000); // Delay for 1 second to simulate loading
  };

  return (
    <div className="sticky top-0 z-50">
      <div className="flex items-center justify-end bg-black">
        <FontAwesomeIcon icon={faInstagram} className="text-white text-xl mx-2" />
        <FontAwesomeIcon icon={faFacebook} className="text-white text-xl mx-2" />
        <FontAwesomeIcon icon={faTwitter} className="text-white text-xl mx-2" />
      </div>

      {/* Show the original header layout */}
      <div className="bg-pink-200  h-24 flex items-center justify-between cursor-pointer">
        <div className="mx-auto flex items-center">
          {isSearchOpen ? (
            <Search onClose={toggleSearch} />
          ) : (
            <FontAwesomeIcon
              icon={faSearch}
              className="text-2xl mr-2 sm:mr-12 cursor-pointer"
              onClick={toggleSearch}
            />
          )}
          <FontAwesomeIcon icon="user" className="text-2xl mr-2 sm:mr-12" />
          <h1 className="text-xl whitespace-nowrap sm:whitespace-normal">Bake n' Flakes</h1>
          <FontAwesomeIcon icon="heart" className="text-2xl ml-2 sm:ml-12" />
          <FontAwesomeIcon
            icon="shopping-cart"
            className="text-2xl ml-2 sm:ml-12"
            onClick={() => handleNavigate("/cart")}
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
          <li onClick={() => handleNavigate("/")}>
            {isLoading ? <Spinner /> : null} {/* Show spinner if isLoading is true */}
            <Link to="/">Home</Link>
          </li>
          <li onClick={() => handleNavigate("/cookies")}>
            {isLoading ? <Spinner /> : null} {/* Show spinner if isLoading is true */}
            <Link to="/cookies">Cookies</Link>
          </li>
          <li onClick={() => handleNavigate("/cakes")}>
            {isLoading ? <Spinner /> : null} {/* Show spinner if isLoading is true */}
            <Link to="/cakes">Cakes</Link>
          </li>
          <li onClick={() => handleNavigate("/blog")}>
            {isLoading ? <Spinner /> : null} {/* Show spinner if isLoading is true */}
            <Link to="/blog">Recipe</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
