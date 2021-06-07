import { useRef } from "react";
import House from "./components/House";
import Sun from "./components/Sun";
import "./styles.css";

export default function App() {
  const ref = useRef(null);

  const setBackgroundColor = (time) => {
      if(time >=1 && time<=13){
        ref.current.style.backgroundColor = "yellow"
      } else {
        ref.current.style.backgroundColor = "blue"

      }
  }


  return (
    <div className="App">
      <div ref={ref} className="sky">
        <Sun bgf={setBackgroundColor}/>
        <House/>
      </div>
    </div>
  );
}
