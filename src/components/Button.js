import React from 'react';

const Button = ({genere}) => {
  return (
    <div>
        <button className='px-5 py-2 m-2 bg-slate-200 rounded-lg w-22 h-8 text-sm text-center'>{genere}</button>
    </div>
  );
};

export default Button;