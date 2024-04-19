import React from 'react';

export const LevelButton = (props) => {
    const { children } = props;
    const LevelButton = {
        position:'fixed',  /*ポジションを固定*/
        display:'flex',
        textAlign:'center',
        transform:'scale(2)',     /*ボタンを5倍に*/
        left:'80%',
        top:'70px',
        backgroundColor: 'antiquewhite',
    };
  
    return <h1 style={LevelButton}>{children}</h1>;

   };
  