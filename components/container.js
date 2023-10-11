import React from "react";

const Container = (props) => {
  return (
    <div
      className={`container p-8 mx-auto lg:min-l-40 lg:min-r-40 ${
        props.className ? props.className : ""
      }`}>
      {props.children}
    </div>
  );
}

export default Container;