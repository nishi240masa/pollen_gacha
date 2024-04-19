//import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { BookButton } from "./BookButton.jsx";

import { Transport } from './Transport.jsx';
import { Button } from './Button.jsx';



export const  App = () =>{
  const [showMore, setShowMore] = useState(true);
    function handleClick(){
        setShowMore(!showMore);
    }

    const sculpture = Transport;
  

  return (
    <div>
        
      
    <BookButton>
        <button onClick = {handleClick} className='button' href="#">
            図鑑
        </button>
    </BookButton>
        {showMore ? <Button /> : <p>{sculpture.url}</p>}
    
    
    </div>>
  
  );
};

