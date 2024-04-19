// import { ColofulMessages } from "./Colofulmessages.jsx";
import React, { useState } from 'react';
import { BookButton } from "./BookButton.jsx";

import { Transport } from './Transport.jsx';
import { Button } from './Button.jsx';


//import { Transport } from "./Transport";

export const PracticeHome01 = () => {
  //   function handClick() {
  //     alert("ボタン");
  //   }
  // const handClick = () => {
  //   alert("ボタン");
  // };

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
    
    
    </div>
      
  );
};
