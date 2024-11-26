import React, { useEffect, Fragment,useState, useRef, useCallback } from "react";

function Hooks() {
  const count = useRef(0);
  const [name, setName] = useState("");
  const callback = () => {
    console.log("My Name is   : ", name);

    // alert("Page is Rendered Successfully")
  };
  //   useEffect(callback, [name,count]);

  useCallback(callback, [name]);
  const onChange = (e) => {
    setName(e.target.value);
  };
//   {{cok}}

  return (
    <React.Fragment>
    <div  style={{width:"100vw",height:'100vh', backgroundColor:"cyan",padding:"10px",margin:"10px", display:"flex",alignItems:"center",justifyContent:"center"}}  className="container" id="" key="">
      <h1>Hii I am Learning Hooks </h1>

      <h2> My name is : {name}</h2>
      <input type="text" onChange={onChange} placeholder="Enter your name " />
    </div>
    </React.Fragment>
  );
}

export default Hooks;
