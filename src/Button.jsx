

// import imagetree from "./images/miki.png"
// import imagereef from "./images/reaf.png"
import "./App.css";
//import { ButtonArea } from "./ButtonArea.jsx";
// import { ImagePosition } from "./ImagePosition.jsx";
//import { useHistory } from 'react-router-dom';

import { LevelButton } from "./LevelButton.jsx";
import { NameButton } from "./NameButton.jsx";
import { Button2 } from "./Button02.jsx";
import { ImagePosition } from "./ImagePosition.jsx";


export const Button = () => {
    

    return(
       

    <div>

    <div className="tree">
    {/* <ImagePosition>
        <img src={imagereef} alt="tree"></img>
        <div className="twig">
        <img src={imagetree} alt="twig"></img>
        <img src={imagetree} alt="twig"></img>
        </div>
    </ImagePosition> */}
    <ImagePosition><Button2 /></ImagePosition>
    
  
    <LevelButton><button>レベル</button></LevelButton>
    <NameButton><button>名前</button></NameButton>

    </div>


  
    </div>
    );
    
}