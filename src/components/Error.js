import React from "react";
import { useRouteError } from "react-router";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>🧐🧐</h1>
      <h2>Some Error Occurs Stay Tuned😊😊😊</h2>
    </div>
  );
};

export default Error;
