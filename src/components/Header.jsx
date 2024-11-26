import React from "react";

const Header = () => {
    let count=0;
    const handleClick = () => {
        count++;
        console.log("Count Value  : ",count);
    };
    const handleClick2 = () => {
        count--;
        console.log("Count Value  : ",count);

    } 
  return (
    <React.Fragment>
      <div>
        <h1> Header Components</h1>
        <h1>  I am Updated </h1>
   <h2>  Current Count : {count}</h2>
        <button  onClick={handleClick}>Increase</button>
        <button onClick={handleClick2}>Decrease</button>
      </div>
      <div></div>

    </React.Fragment>
  );
};

export default Header;
