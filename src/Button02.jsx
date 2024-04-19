import imgtree from "./images/miki.png";
import imgreef from "./images/reaf.png";

export const Button2 = () =>{
    // const imgtag = <img src = {imgreef} className="reaf"/>
    // const img = [imgtag];

    const level = [1,2,3,4,5];

    //const num = level.length;

    //const imgtag2 = <img src = {imgtree} className="tree" />

    const addimgs = level.map((index) =>{
        if(index == 1){
            return <img src = {imgreef} className = "reaf"/>
        }
        else{
            return <img src = {imgtree} className = "tree"/>
        }

    })

    return(
        <div>
            {addimgs}
        </div>
        
    );

    
}