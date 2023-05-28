// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { fas } from "@fortawesome/free-solid-svg-icons";
// import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
// import {
//   faInstagram,
//   faFacebook,
//   faTwitter,
// } from "@fortawesome/free-brands-svg-icons";

// library.add(fas);

// export default function Footer() {
//   return (
//     <div className="bg-black text-white flex space-x-11">
//       <div className="flex items-center justify-center flex-col w-96">
//         <h3 className="pl-2 text-left">About us</h3>
//         <p className="pl-2 text-center">
//           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur
//           ea vero maxime. Consequuntur ducimus saepe doloribus soluta. Amet
//           iusto aspernatur et error iure suscipit qui, non alias cum vero
//           repellendus fugit voluptatibus minus pariatur quos? Soluta, quisquam
//           nam corrupti animi cumque minus
//         </p>
//         <a href="#" className="pl-2 text-center text-blue-500">
//           read more
//         </a>
//       </div>
//       <div className="flex items-center justify-center flex-grow flex-col">
//         <h3 className="pl-2 text-left">Help</h3>
//         <ul className="pl-2 text-center">
//           <li>Delivery Information</li>
//           <li>Privacy Policy</li>
//           <li>Terms and conditions</li>
//           <li>Shipping details</li>
//         </ul>
//       </div>
//       <div className="flex items-center justify-end flex-col mb-16">
//         <h3 className="pr-2 pl-2 text-right">Contact us</h3>
//         <ul className="pl-2 text-center">
//           <li>Address: XYZ street</li>
//           <li>
//             <FontAwesomeIcon icon={faPhone} /> Phone no: 015267683
//           </li>
//           <li>
//             <FontAwesomeIcon icon={faEnvelope} /> Mail: bakenflakes@mail.com
//           </li>
//         </ul>
//       </div>
//       <div className="flex items-center justify-center">
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
//     </div>
//   );
// }

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

library.add(fas);

export default function Footer() {
  return (
    <div className="bg-black text-white flex flex-col space-y-4">
      <div  className="flex items-center justify-center flex-col w-96">
        <h3 className="pl-2 text-left">About us</h3>
        <p className="pl-2 text-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur
          ea vero maxime. Consequuntur ducimus saepe doloribus soluta. Amet
          iusto aspernatur et error iure suscipit qui, non alias cum vero
          repellendus fugit voluptatibus minus pariatur quos? Soluta, quisquam
          nam corrupti animi cumque minus
        </p>
        <a href="#" className="pl-2 text-center text-blue-500">
          read more
        </a>
      </div>
      <div className="flex items-center justify-center flex-grow flex-col">
        <h3 className="pl-2 text-left">Help</h3>
        <ul className="pl-2 text-center">
          <li>Delivery Information</li>
          <li>Privacy Policy</li>
          <li>Terms and conditions</li>
          <li>Shipping details</li>
        </ul>
      </div>
      <div className="flex items-center justify-end flex-col mb-16">
        <h3 className="pr-2 pl-2 text-right">Contact us</h3>
        <ul className="pl-2 text-center">
          <li>Address: XYZ street</li>
          <li>
            <FontAwesomeIcon icon={faPhone} /> Phone no: 015267683
          </li>
          <li>
            <FontAwesomeIcon icon={faEnvelope} /> Mail: bakenflakes@mail.com
          </li>
        </ul>
      </div>
      <div  className="flex items-center justify-center mt-auto">
        <FontAwesomeIcon icon={faInstagram} className="text-white text-xl mx-2" />
        <FontAwesomeIcon icon={faFacebook} className="text-white text-xl mx-2" />
        <FontAwesomeIcon icon={faTwitter} className="text-white text-xl mx-2" />
      </div>
    </div>
  );
}
