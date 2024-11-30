import React, { useState } from "react";

const Service = () => {
  // React.memo() is a higher-order component that memoizes the output of a function component.
  // useMemo() is a React hook that caches the result of a function call and returns the cached result when called again with the same inputs.
  // useCallback() is a React hook that returns a memoized callback function.
  // useMemo() and useCallback() are useful when you want to optimize performance by avoiding unnecessary re-renders.
  const [age, setAge] = useState(0);
  const [status, setStatus] = useState(true);
  const onChange = (event) => {
    setAge(event.target.value);
  };


  const statusHandler =(e)=>{
   setStatus(e.target.value);
  }
  console.log("Status ", status)
  return (
    <div>
      <h1>Service Page</h1>
      <h3> Your Age is : {age} </h3>
      <h2>Status : {status}</h2>
     {status=='true'&&<div style={{width:"30px",height:"30px",backgroundColor:"green",marginLeft:"10px"}}></div>}

      {age >= 18 ? (
        <div>
          <h3 style={{ color: "green" }}> Eligible For Vote </h3>
        </div>
      ) : (
        <div>
          <h3 style={{ color: "red" }}> Not Eligible For Vote </h3>
        </div>
      )}

      <input type="number" onChange={onChange} name="age" id="" />
      <label htmlFor=""> True </label>
      <input type="radio"  onChange={statusHandler}  value={true} name="status" placeholder="True" />
      <label htmlFor=""> False </label>

      <input type="radio" onChange={statusHandler}   value={false} name="status" placeholder="False" />
    </div>
  );
};
export default Service;
