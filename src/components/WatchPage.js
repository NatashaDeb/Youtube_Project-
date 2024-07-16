import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";

const WatchPage = () => {
  const [video, setVideo] = useState(null);
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  const dispatch = useDispatch();
  const VIDEO_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=AIzaSyALlmcjIgFL17IukS3dFqnwIEs8QcAHQRI`;

  useEffect(() => {
    getVideos(); 
    dispatch(closeMenu());
  }, [dispatch, videoId]);

  const getVideos = async () => {
    try {
    const response = await fetch(VIDEO_API);
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    const data = await response.json();
    setVideo(data.items[0]);
  } catch (error) {
    console.error('Fetch error: ', error);
  }
  };

  if (!video) {
    return <div>Wait video is getting fetched!</div>;
  }

  const {
    snippet: {
      title,
      description,
      channelTitle,
    },
    statistics: {
      viewCount,
      likeCount,
      commentCount
    }
  } = video;

  return (
    <div className="flex flex-col">
     <div className="px-10 py-5">
      <iframe
        width="825"
        height="472"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      
        <ul className="mt-5">
        <div className="flex">
          <li className="mx-3 text-sm"><strong>Views:</strong> {viewCount}</li>
          <li className="mx-3 text-sm"><strong>👍</strong> {likeCount}</li>
          <li className="mx-3 text-sm"><strong>💬</strong> {commentCount}</li>
          </div>
        </ul>
        
      <div className="mt-5">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="text-lg">{channelTitle}</p>
        <p className="mt-3">{description}</p>
      </div>
    </div>
    <CommentsContainer/>
    </div>
   
  );
};

export default WatchPage;