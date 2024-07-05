import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideosContainer = () => {
  const [videoList, setVideoList] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    //console.log(json)
    setVideoList(json.items);
  };

  return (
    <div className="flex flex-wrap">
      {videoList.map((videoInfo) => (
        <Link to={"/watch?v="+videoInfo.id} ><VideoCard key={videoInfo.id} videoInfo={videoInfo} /></Link>
      ))}
    </div>
  );
};

export default VideosContainer;
