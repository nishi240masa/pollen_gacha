import React from 'react';

export const NameButton = (props) => {
    const { children } = props;
    const NameButton = {
        zIndex:'10',          /*重ねじゅん２番*/
        position:'absolute',  /*ポジションを固定*/
        display:'flex',
        textAlign:'center',
        transform:'scale(1)',     /*ボタンを5倍に*/
        left:'50%',
        top:'500px',
        backgroundColor: 'antiquewhite',
    };
  
    return <h1 style={NameButton}>{children}</h1>;

   };
  