

const LiveChatComment = ({name, text}) => {
   
  return (
    <div className='m-2 p-2 flex items-center shadow-sm'>
         <img
          className="h-7"
          src="https://tse2.mm.bing.net/th?id=OIP.fqSvfYQB0rQ-6EG_oqvonQHaHa&pid=Api&P=0&h=180"
          alt="user-icon"
        ></img>
        <span className='font-bold text-sm px-1'>{name}:</span>
        <span className='text-sm'>{text}</span>
    </div>
  );
};

export default LiveChatComment;