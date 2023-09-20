import { useState } from "react";
import UseEffectHooks from "./UseEffectHooks";

function Test() {

  const [visible,setVisible] = useState(false);

  const handleClick = () => {

  }
  
  return <>
    {visible && <UseEffectHooks />} 
    <button onClick={()=> {
      setVisible(!visible)
    }}>Visible</button>

{/* <button onClick={function () {
    alert('mesaj');
}}></button> */}
    
     {/* <button onClick={handleClick}></button> */}
  </>
}

export default Test;