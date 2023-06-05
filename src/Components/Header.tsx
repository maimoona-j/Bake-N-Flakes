// import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { fas } from "@fortawesome/free-solid-svg-icons";
// import {
//   faInstagram,
//   faFacebook,
//   faTwitter,
// } from "@fortawesome/free-brands-svg-icons";

// library.add(fas);

// export default function Header() {
//   return (
//     <div>
//       <div className="flex items-center justify-end   ">
//         <FontAwesomeIcon
//           icon={faInstagram}
//           className="text-black text-xl mx-2"
//         />
//         <FontAwesomeIcon
//           icon={faFacebook}
//           className="text-black text-xl mx-2"
//         />
//         <FontAwesomeIcon icon={faTwitter} className="text-black text-xl mx-2" />
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
//           />
//         </div>
//       </div>

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


import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

library.add(fas);

export default function Header() {
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
   
      <div className="bg-pink-200 h-24 flex items-center justify-between cursor-pointer">
        <div className="mx-auto flex items-center">
          <FontAwesomeIcon icon="search" className="text-2xl mr-2 sm:mr-12" />
          <FontAwesomeIcon icon="user" className="text-2xl mr-2 sm:mr-12" />
          <h1 className="text-xl whitespace-nowrap">Bake n' Flakes</h1>
          <FontAwesomeIcon icon="heart" className="text-2xl ml-2 sm:ml-12" />
          <FontAwesomeIcon
            icon="shopping-cart"
            className="text-2xl ml-2 sm:ml-12"
          />
        </div>
      </div>

      <div className="h-16 flex justify-center items-center bg-blue-200">
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



