import React from "react";

const Media = (props) => {
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <h2>Age: {props.age}</h2>
      <h2>Email: {props.email}</h2>
      <h2>Phone Number: {props.numb}</h2>
      <h2>Location: {props.location}</h2>
      <hr />
    </div>
  );
};

export default Media;
