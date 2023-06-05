export default function Sort() {
  return (
    <>
      <div className="flex justify-center items-center">
        <div>
          <label htmlFor="">Category:</label>
          <input
            type="search"
            className="border-2 p-2 mt-3"
            placeholder="search by category"
          />
        </div>
        <div className="ml-3">
          <label htmlFor="">Sort by:</label>
          <input
            type="search"
            className="border-2 p-2 mt-3"
            placeholder="sort by... "
          />
        </div>
      </div>
    </>
  );
}
