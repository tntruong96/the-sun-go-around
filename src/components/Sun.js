
import { useEffect, useRef, useState } from 'react';
import './sun.css'

const Sun = (prop) => {
const [time,setTime] = useState(0);
const sunRef = useRef(null);
// console.log(prop);
const runTime = () => {
  return setTimeout(() => {
    if(time < 23){
      setTime(prev => prev+1);
    } else {
      setTime(0)
    }
  }, 1000)
}

const turnAround = () => {
    // console.log(sunRef.current);
    sunRef.current.classList.add('animation-sun')
}



console.log(time);

useEffect(() => {
  turnAround();
  prop.bgf(time);
  const timeout = runTime();
  return () => {clearTimeout(timeout)}
},[time]);

  return (
    <div className="sun" ref={sunRef}>
      <div className="sun-ray-1"></div>
      <div className="sun-ray-2"></div>
      <div className="sun-ray-3"></div>
      <div className="sun-ray-4"></div>
      <div className="sun-body" >
      
      </div>
    </div>
  );
}

export default Sun;