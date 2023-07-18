export default function contact() {
  return (
    <>
    <div>

    </div>


      <div>
        <h1 className="text-xl font-bold">contact Us</h1>
        <div className="border-2 flex flex-col  w-2/4 p-8  ml-96 h-96 mb-7 mt-11">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="border-2 mt-5 p-2"
            placeholder="Enter your name...."
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="border-2  mt-5 p-2"
            placeholder="Enter your email...."
          />
          <label htmlFor="name">Message</label>
          <textarea
            className="border-2  mt-5 p-5 "
            placeholder="Enter your feedback.."
          >
            {" "}
          </textarea>
          <button className="bg-blue-400 p-3 mt-12 w-36  ml-60  hover:bg-gray-40">
            Send
          </button>
        </div>
      </div>
    </>
  );
}


// trial

// import React, { useEffect } from "react";
// import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";

// export default function Contact() {
//   const initMap = async () => {
//     // The location of Uluru
//     const position = { lat: -25.344, lng: 131.031 };

//     // The map, centered at Uluru
//     const mapElement = document.getElementById("map");
//     if (!mapElement) {
//       return; // Exit early if the map element is not found
//     }

//     new GoogleMap(mapElement, {
//       zoom: 4,
//       center: position,
//       mapId: "DEMO_MAP_ID",
//     });

//     // The marker, positioned at Uluru
//     new Marker({ position, title: "Uluru" });
//   };

//   useEffect(() => {
//     initMap();
//   }, []);

//   return (
//     <>
//       <div>
//         <h3>My Google Maps Demo</h3>

//         <div id="map" style={{ height: "400px", width: "100%" }}></div>
//       </div>

//       <div>
//         <h1 className="text-xl font-bold">Contact Us</h1>
//         <div className="border-2 flex flex-col w-2/4 p-8 ml-96 h-96 mb-7 mt-11">
//           <label htmlFor="name">Name</label>
//           <input
//             type="text"
//             className="border-2 mt-5 p-2"
//             placeholder="Enter your name...."
//           />
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             className="border-2 mt-5 p-2"
//             placeholder="Enter your email...."
//           />
//           <label htmlFor="name">Message</label>
//           <textarea
//             className="border-2 mt-5 p-5"
//             placeholder="Enter your feedback.."
//           >
//             {" "}
//           </textarea>
//           <button className="bg-blue-400 p-3 mt-12 w-36 ml-60 hover:bg-gray-40">
//             Send
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }
