import React from 'react';
import Comment from './Comment';
const commentsData = [
    {
        name: "Natasha Deb",
        text: "Woaahhh!! Great work",
        replies: [
            {
                name: "Natasha Deb",
                text: "Woaahhh!! Great work",
                replies: [
                    {
                        name: "Natasha Deb",
                        text: "Woaahhh!! Great work",
                        replies: [
                            {
                                name: "Natasha Deb",
                                text: "Woaahhh!! Great work",
                                replies: [
                                    
                                ]
                            },
                        ]
                    },
                ]
            },
            {
                name: "Natasha Deb",
                text: "Woaahhh!! Great work",
                replies: [
                    {
                        name: "Natasha Deb",
                        text: "Woaahhh!! Great work",
                        replies: [
                            {
                                name: "Natasha Deb",
                                text: "Woaahhh!! Great work",
                                replies: [
                                    
                                ]
                            },
                        ]
                    },
                ]
            },
            {
                name: "Natasha Deb",
                text: "Woaahhh!! Great work",
                replies: [
                    {
                        name: "Natasha Deb",
                        text: "Woaahhh!! Great work",
                        replies: [
                            
                        ]
                    },
                ]
            },
        ]
    },
    {
        name: "Natasha Deb",
        text: "Woaahhh!! Great work",
        replies: [
            {
                name: "Natasha Deb",
                text: "Woaahhh!! Great work",
                replies: [
                    
                ]
            },
            {
                name: "Natasha Deb",
                text: "Woaahhh!! Great work",
                replies: [
                    
                ]
            },
        ]
    },
    {
        name: "Natasha Deb",
        text: "Woaahhh!! Great work",
        replies: [
            {
                name: "Natasha Deb",
                text: "Woaahhh!! Great work",
                replies: [
                    
                ]
            },
            {
                name: "Natasha Deb",
                text: "Woaahhh!! Great work",
                replies: [
                    
                ]
            },
            {
                name: "Natasha Deb",
                text: "Woaahhh!! Great work",
                replies: [
                    
                ]
            },
            {
                name: "Natasha Deb",
                text: "Woaahhh!! Great work",
                replies: [
                    
                ]
            },
        ]
    },
    {
        name: "Natasha Deb",
        text: "Woaahhh!! Great work",
        replies: [
            {
                name: "Natasha Deb",
                text: "Woaahhh!! Great work",
                replies: [
                    
                ]
            },
        ]
    },
    
]

const CommentList = ({comments}) =>{
    return comments.map((comment, index)=>(
        <div  key={index}>
             <Comment data={comment}></Comment>
             <div className='p-5 ml-5 border border-l-black'>
             <CommentList comments={comment.replies}></CommentList>
             </div>
        </div>
   )
)
}

const CommentsContainer = () => {
  return (
    <div className='m-5 p-2'>
        <h1 className='text-xl font-bold'>Comments:</h1>
        <CommentList comments={commentsData}></CommentList>
    </div>
  );
};

export default CommentsContainer;