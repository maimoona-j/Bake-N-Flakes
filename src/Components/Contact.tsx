export default function contact() {
  return (
    <>
      <div className="flex items-center justify-center flex-col h-96 w-full">
        <h1 className="text-2xl font-bold mt-6 text-center">Contact Us</h1>
        <div className="flex flex-col md:flex-row items-center justify-between w-full md:px-24 gap-10 xl:px-36 2xl:px-44 py-10 md:py-16">
          <div className="">
            <h1 className="text-4xl font-bold text-red-500">Newsletter</h1>
            <p className="mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="flex flex-row">
            <input
              type=" email"
              placeholder="Enter your email "
              className="border border-gray-300 h-8 w-full rounded-full pl-4 py-5"
            />
            <button className="bg-red-500 text-white px-5 py-2 rounded-full ml-2 hover:bg-gray-300 hover:text-black">
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
