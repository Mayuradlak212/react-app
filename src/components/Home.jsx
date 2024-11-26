import React, { useState, useEffect, useMemo , useCallback, useRef  } from "react";
function Home() {
      // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  const [name,setName]=useState("")
//   let count=0;
// useState, useEffect, useMemo , useCallback, useRef 
  const countIncrement = () => {
    setCount(count + 1);
    // count=count+1;
  };
  const countDecrement = () => {
    setCount(count - 1);
    // count=count-1;

  };
  const onChange=(e)=>{
    setName(e.target.value)
  }
  return (
    <div>
        {/* <h1>  Count Value :   {count} </h1>

      <h1>Hii Guys Weolcome to Hooks </h1>

   <button  onClick={countIncrement}>  + </button>
   <button onClick={countDecrement}>   - </button> */}

  <h2>  My name is : {name}</h2>
    <input type="text" onChange={onChange}  placeholder="Enter your name " />

    </div>
  );
}

export default Home;
