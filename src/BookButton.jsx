import React from 'react';

export const BookButton = (props) => {
    const { children } = props;
    const BookButton = {
      
      zIndex:'20',  /*重ねじゅん１番*/
      position:'fixed',  /*ポジションを固定*/
      display:'flex',
      textAlign:'center',
      transform:'scale(2)',   /*ボタンを5倍に*/
      left:'50%',
      bottom:'70px',
      backgroundColor: 'antiquewhite',
      
    };
  
    return <h1 style={BookButton}>{children}</h1>;

  //   const LevelButton = {
  //     position:'fixed',  /*ポジションを固定*/
  //     display:'flex',
  //     textAlign:'center',
  //     transform:'scale(3)',     /*ボタンを5倍に*/
  //     left:'80%',
  //     top:'70px',

  //   };
  //   return <h1 style={LevelButton}>{children}</h1>;
   };
  

//    import { useState } from 'react';

// import {BookButton} from "./BookButton.jsx";
// import { LevelButton } from "./LevelButton.jsx";
// import { NameButton } from "./NameButton.jsx";

// export default function ButtonArea () {
//   const [showMore, setShowMore] = useState(false);

//   function handleClick ()  {
//     setShowMore(!showMore);
//   }
//   return(
//     <div>
//         <BookButton><button onClick = {handleClick}>図鑑</button></BookButton>
//         <LevelButton><button>レベル</button></LevelButton>
//         <NameButton><button>名前</button></NameButton>
//     </div>
//   );
    
// }
