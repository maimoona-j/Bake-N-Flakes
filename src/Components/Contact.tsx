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
