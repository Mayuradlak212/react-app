import React, { useState, useEffect } from "react";
const About = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  console.log("Data of API ", data);

  return (
    <div>
      <h1>About Page</h1>
      <h3> Users Data </h3>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent:"center", alignItems: "center" }}>
        {data?.map((event, index) => {
          return (
            <div
              key={event.id}
              style={{
                backgroundColor: "cyan",
                width: "300px",
                margin: "10px",
                padding: "10px", display: "flex", flexDirection: "column", justifyContent:"center", alignItems: "center"
              }}
            >
              <h3>{event.name}</h3>
              <p>{event.email}</p>
              <p>{event.phone}</p>
              <p>{event.address.street}</p>
              <p>{event.address.city}</p>
              <p>{event.address.zipcode}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default About;
