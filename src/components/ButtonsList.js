import React from 'react';
import Button from './Button';

const ButtonsList = () => {
  const genereList = ["All", "Cricket", "News", "Cooking", "Gardening", "Football", "Mixes", "Thrillers", "Live", "Baking", "Stages"  ]
  return (
    <div className='flex'>
      {genereList.map((genere, index)=>(
        <Button key={index} genere={genere}></Button>
      ))}
      
    </div>
  );
};

export default ButtonsList; 