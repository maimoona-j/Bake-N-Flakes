export default function contact() {
  return (
    <>
      <h1>contact Us</h1>
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
        <button className="bg-blue-400 p-3 mt-12 w-36  ml-60  hover:bg-gray-40">Send</button>
      </div>
    </>
  );
}
