 

export default function Category() {
  return (
    <>
    <div className="h-[600px]  w-56 mt-16 ml-8">
    <h2 className="text-xl font-bold">Categories</h2>
     <ul className="mt-5 text-lg ">
      <li>Cookies</li>
      <li>Cakes</li>
      <li>Best seller</li>
      <li>Shop</li>
     </ul>
    </div>
   
    </>
  );
}




// trial


// import React, { useState, useEffect } from 'react';

// export default function Category() {
//   const [isSmallScreen, setIsSmallScreen] = useState(false);
//   const [showDropdown, setShowDropdown] = useState(false);

//   // Function to toggle the dropdown visibility
//   const toggleDropdown = () => {
//     setShowDropdown(!showDropdown);
//   };

//   // Function to check if the screen size is small
//   const checkScreenSize = () => {
//     setIsSmallScreen(window.innerWidth <= 768);
//   };

//   // Add a resize event listener when the component mounts
//   useEffect(() => {
//     checkScreenSize(); // Check the initial screen size
//     window.addEventListener('resize', checkScreenSize);

//     // Remove the event listener when the component unmounts
//     return () => {
//       window.removeEventListener('resize', checkScreenSize);
//     };
//   }, []);

//   return (
//     <>
//       <div
//         className={`h-[600px] w-56 mt-16 ml-8 ${isSmallScreen ? 'relative' : ''}`}
//       >
//         {isSmallScreen && (
//           <div
//             className="absolute bg-white border rounded shadow-lg py-4 px-6"
//             style={{ top: 0, left: 0, display: showDropdown ? 'block' : 'none' }}
//           >
//             <h2 className="text-xl font-bold">Categories</h2>
//             <ul className="mt-5 text-lg">
//               <li>Cookies</li>
//               <li>Cakes</li>
//               <li>Best seller</li>
//               <li>Shop</li>
//             </ul>
//           </div>
//         )}

//         {!isSmallScreen && (
//           <>
//             <h2 className="text-xl font-bold">Categories</h2>
//             <ul className="mt-5 text-lg">
//               <li>Cookies</li>
//               <li>Cakes</li>
//               <li>Best seller</li>
//               <li>Shop</li>
//             </ul>
//           </>
//         )}

//         {/* Toggle button for the dropdown on smaller screens */}
//         {isSmallScreen && (
//           <button
//             className="absolute top-0 left-0 w-full h-full"
//             onClick={toggleDropdown}
//             style={{ background: 'transparent' }}
//           />
//         )}
//       </div>
//     </>
//   );
// }
