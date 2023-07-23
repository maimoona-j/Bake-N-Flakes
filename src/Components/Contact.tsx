export default function contact() {
  return (
    <>
   
      <div className="h-96 ">
      <h1 className="text-xl font-bold mt-4">Contact Us</h1>
      <div className="flex">
        <div className=" mt-24 ml-56">
          <h1 className="text-4xl font-bold text-red-500">Newsletter</h1>
          <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className=" ml-24 mt-[120px]">
          <input type=" email" placeholder="Enter your email " className="border border-gray-300 h-8 w-96 rounded-full pl-4 py-5" />
          <button className="bg-red-500 text-white px-5 py-2 rounded-full ml-2 hover:bg-gray-300 hover:text-black">Send</button>
        </div>
      </div>
      </div>
    </>
  );
}



// trial
 



// export default function Contact() {
//   return (
//     <div className="h-96">
//       <h1 className="text-xl font-bold mt-4 text-center">Contact Us</h1>
//       <div className="flex flex-col items-center md:flex-row md:justify-center">
//         <div className=" ml-6 md:mt-24 md:ml-4 md:w-2/5">
//           <h1 className="text-2xl md:text-4xl font-bold text-red-500">Newsletter</h1>
//           <p className="mt-3 text-center md:text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
//         </div>
//         <div className="mt-36 md:ml-4 md:w-3/5">
//           <input type="email" placeholder="Enter your email" className="border border-gray-300 h-8 w-full md:w-96 rounded-full pl-2 md:pl-4 py-2 md:py-5" />
//           <button className="bg-red-500 text-white px-2 md:px-5 py-2 rounded-full ml-2 mt-2 md:mt-0 md:px-5 md:py-2 hover:bg-gray-300 hover:text-black">Send</button>
//         </div>
//       </div>
//     </div>
//   );
// }
