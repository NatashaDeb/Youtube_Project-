import React from 'react';

const VideoCard = ({ videoInfo }) => {

    if(!videoInfo){
        return(
            <div>wait for info to come!</div>
        )
    }
    const{snippet, statistics} = videoInfo;
    const{channelTitle, title, thumbnails} = snippet;
    const{viewCount} = statistics;
    return (
    <div className='p-4 m-4 w-80 shadow-lg'>
        <img className='rounded-lg' alt='thumbnail' src={thumbnails.medium.url} />
        <ul>
            <li className='font-bold'>{title}</li>
            <li className='font-medium'>{channelTitle}</li>
            <li className='mx-1 text-sm'>{viewCount} views</li>
            </ul>   
    </div>
  );
};

export const AdVideoCard = ({ videoInfo }) => {
    return(
        <div className='p-1 m-1 border border-red-800'>
            <VideoCard  videoInfo = {videoInfo}></VideoCard>
        </div>
    )
}

export default VideoCard;