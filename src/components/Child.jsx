import React, { Fragment } from "react";

const Child = (props) => {

      console.log("Array Props ",props.arr)

      console.log("Person  : ",props.person)      
  return (
    <React.Fragment>
      <h1> Hello I am Child My Name is : {props.person.name}  </h1>
      <h1>  Hii I am {props.person.age} years Old</h1>
      <h2>  Position : {props.person.position}</h2>
      <h1>  City : {props.person.city} </h1>
    </React.Fragment>
  );
};

export default Child;