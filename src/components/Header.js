import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { SEARCH_SUGGESTION_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
import {setSearchText} from "../utils/searchTextSlice"
 

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sugesstions, setSugesstions] = useState([]);
  const [showSugesstions, setshowSugesstions] = useState(false);
  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    if (searchQuery) {
      const timer = setTimeout(() => {
        if (searchCache[searchQuery]) {
          setSugesstions(searchCache[searchQuery]);
        } else {
          getSearchSuggestions();
        } //200ms debouncing applied
      }, 200);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    try {
      const response = await fetch(SEARCH_SUGGESTION_API + searchQuery);
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      const data = await response.json();
      console.log(data[1]);
      setSugesstions(data[1]);
      dispatch(
        cacheResults({
          [searchQuery]: data[1],
        })
      );
    } catch (error) {
      console.error("Fetch error: ", error);
    }
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  
  const handleSearch = () => {
    dispatch(setSearchText(searchQuery));
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          src="https://tse4.mm.bing.net/th?id=OIP.9p-z5zqBkdA8t51iaBWo0wHaHa&pid=Api&P=0&h=180"
          alt="menu"
        ></img>
        <a className="cursor-pointer" href="http://localhost:3000/">
          <img
            className="h-8 mx-2"
            src="https://tse4.mm.bing.net/th?id=OIP.gdsYnuzqxcjHkrkFHhMYFAHaBw&pid=Api&P=0&h=180"
            alt="logo"
          ></img>
        </a>
      </div>
      <div className="col-span-10 px-15">
        <div>
          <input
            type="text"
            className="w-1/2 border p-1 border-gray-400 rounded-l-full"
            value={searchQuery}
            onFocus={() => setshowSugesstions(true)}
            onBlur={() => setshowSugesstions(false)}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            onKeyPress={handleKeyPress}
          ></input>
          <button 
            className="border border-black p-1 rounded-r-full bg-gray-100"
            onClick={handleSearch}
          >
            🔍
          </button>
        </div>
        {showSugesstions && (
          <div className="bg-white absolute pl-2 py-2 w-[37rem] rounded">
            <ul>
              {sugesstions.map((s) => (
                <li key={s} className="shadow-sm py-1 hover:bg-slate-100">
                  🔍 {s}
                </li>
              ))}
              ;
            </ul>
          </div>
        )}
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
//
