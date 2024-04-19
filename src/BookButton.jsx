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

  
   };
  


