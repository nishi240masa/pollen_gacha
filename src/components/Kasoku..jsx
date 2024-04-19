import { useState,useEffect } from "react";
export const Kasoku = () => {
    const [accelerationX, setAccelerationX] = useState(0);
    const [accelerationY, setAccelerationY] = useState(0);
    const [accelerationZ, setAccelerationZ] = useState(0);
  
    useEffect(() => {
        //"devicemotion"は一定期間ごとに行う
      window.addEventListener("devicemotion", (event) => {
        setAccelerationX(event.acceleration.x)
        setAccelerationY(event.acceleration.y)
        setAccelerationZ(event.acceleration.z)
      })
    })
  
    return (
      <div>
        <div>x: {accelerationX}</div>
        <div>y: {accelerationY}</div>
        <div>z: {accelerationZ}</div>
      </div>
    )
  }
