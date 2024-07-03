import React from "react";
import { useSelector } from "react-redux";

const SideBar = () =>{

    const isMenu = useSelector((store) => (store.app.isMenuOpen));
  // early return
     if(!isMenu) return null; 

    return(
        <div className="w-48 shadow-lg p-5">
              <h1 className="font-bold">You</h1>
            <ul>
                <li>Your Channel</li>
                <li>History</li>
                <li>PlayLists</li>
                <li>Your Videos</li>
                <li>Watch LAter</li>
                <li>Liked Videos</li>
            </ul>
            <h1 className="font-bold pt-5">Subscriptions</h1>
            <ul>
                <li>Music</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>Movies</li>
            </ul>
            <h1 className="font-bold pt-5">More From Youtube</h1>
            <ul>
                <li>Youtube Premium</li>
                <li>Youtube Shorts</li>
                <li>Youtube Music</li>
                <li>Youtube Kids</li>
            </ul>
            
        </div>
    )
}

export default SideBar;