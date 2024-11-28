import React, { useState  } from "react";
import Child from "./Child";
function Home() {
      // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  // const [name,setName]=useState("")
//   let count=0;
// useState, useEffect, useMemo , useCallback, useRef 
  // const countIncrement = () => {
  //   setCount(count + 1);
  //   // count=count+1;
  // };
  // const countDecrement = () => {
  //   setCount(count - 1);
  //   // count=count-1;

  // };
  // const onChange=(e)=>{
  //   setName(e.target.value)
  // }

const arr=[1,2,4,5,6];
const person={
  name:"Mayur",
  age:25,
  city:"Pune",
  position:"Senior Software Engineer"
}

const status=true;
  return (
    <React.Fragment>
       {/* <h1> Hii Weolcome TO Props </h1>
       <Child  arr={arr}   person={person} /> */}

       <h1>  Hello Welcome to Home Page Guys </h1>
    </React.Fragment>
  );
}

export default Home;
