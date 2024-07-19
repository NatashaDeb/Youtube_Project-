import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard, { AdVideoCard } from "./VideoCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


const VideosContainer = () => {
  const [videoList, setVideoList] = useState([]);
  const [tempVideoList, setTempVideoList] = useState([]);
  const searchQuery = useSelector((store) => store.searchText);

  useEffect(() => {
    getVideos();
  }, []);

  useEffect(() => {
    const filterVideos = () => {
      const filteredList = videoList.filter((v) =>
        v?.snippet?.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setTempVideoList(filteredList);
    };
    filterVideos();
  }, [searchQuery, videoList]);

  const getVideos = async () => {
    try {
      const response = await fetch(YOUTUBE_VIDEOS_API);
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      const data = await response.json();
      setVideoList(data.items);
    } catch (error) {
      console.error("Fetch error: ", error);
    }
  };

  return (
    <div className="flex flex-wrap">
      {videoList[0] && <AdVideoCard videoInfo={videoList[16]} />}
      {tempVideoList.map((videoInfo) => (
        <Link key={videoInfo.id} to={"/watch?v=" + videoInfo.id}>
          <VideoCard videoInfo={videoInfo} />
        </Link>
      ))}
    </div>
  );
};

export default VideosContainer;