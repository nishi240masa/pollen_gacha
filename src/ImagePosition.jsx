import React from 'react';

export const ImagePosition = (props) => {
    const { children } = props;
    const ImagePosition = {
        display:'flex',
        flexFlow:'column',
        textAlign:'center',
    };
  
    return <h1 style={ImagePosition}>{children}</h1>;

   };
  