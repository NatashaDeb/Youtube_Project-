import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Header = () => {

    const dispatch = useDispatch();

    const toggleMenuHandler = () =>{
        dispatch(toggleMenu());
    }

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
           onClick={()=>toggleMenuHandler()} 
          className="h-8 cursor-pointer"
          src="https://tse4.mm.bing.net/th?id=OIP.9p-z5zqBkdA8t51iaBWo0wHaHa&pid=Api&P=0&h=180"
          alt="menu"
        ></img>
        <img
          className="h-8 mx-2"
          src="https://tse4.mm.bing.net/th?id=OIP.gdsYnuzqxcjHkrkFHhMYFAHaBw&pid=Api&P=0&h=180"
          alt="logo"
        ></img>
      </div>
      <div className="flex col-span-10 px-15">
        <input
          type="text"
          className="w-1/2 border p-1 border-gray-400 rounded-l-full"
        ></input>
        <button className="border border-black p-1 rounded-r-full bg-gray-100">
          🔍
        </button>
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          src="https://tse2.mm.bing.net/th?id=OIP.fqSvfYQB0rQ-6EG_oqvonQHaHa&pid=Api&P=0&h=180"
          alt="user-icon"
        ></img>
      </div>
    </div>
  );
};

export default Header;
