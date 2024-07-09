import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard, { AdVideoCard } from "./VideoCard";
import { Link } from "react-router-dom";

const VideosContainer = () => {
  const [videoList, setVideoList] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    try {
    const response = await fetch(YOUTUBE_VIDEOS_API);
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    const data = await response.json();
    //console.log(json)
    setVideoList(data.items);
  } catch (error) {
    console.error('Fetch error: ', error);
  }
  };

  return (
    <div className="flex flex-wrap">
      {videoList[0] && <AdVideoCard videoInfo={videoList[16]}/>}
      {videoList.map((videoInfo) => (
        <Link key={videoInfo.id} to={"/watch?v="+videoInfo.id} ><VideoCard  videoInfo={videoInfo} /></Link> 
      ))}
    </div>
  );
};

export default VideosContainer;
