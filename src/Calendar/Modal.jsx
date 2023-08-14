import "./Modal.css";

export const Modal = () => {
  return (
    <div className="bg-slate-200 w-fit rounded-md">
      <form className="w-96">
        <div className="flex flex-col">
          <div className="flex">
            <div className="flex-1"></div>
            <button className="w-6 h-fit mr-2 mt-2 rounded-full bg-purple-900 text-white hover:bg-black transition:all">
              X
            </button>
          </div>
          <input
            className="input rounded-md pl-2"
            type="text"
            placeholder="Title"
          />
          <input
            className="input rounded-md pl-2"
            type="text"
            placeholder="Description"
          />

          <input className="input rounded-md pl-2" type="datetime-local" />
          <input
            className="input rounded-md pl-2"
            type="text"
            placeholder="location"
          />
          <input
            className="input rounded-md pl-2 bg-purple-900 text-white hover:cursor-pointer hover:bg-black transition:all"
            type="submit"
          />
        </div>
      </form>
    </div>
  );
};
