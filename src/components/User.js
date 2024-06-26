import { useState } from "react";

const User = (props) => {
  const [count] = useState(0);
  const [count2] = useState(1);

  return (
    <div className="user-card m-4 p-4 bg-gray-50 rounded-lg">
      <h1>Count = {count}</h1>
      <h1>Count2 = {count2}</h1>
      <h2>Name: {props.name}</h2>
      <h3>Location: Dehradun</h3>
      <h4>Contact: @juned2459</h4>
    </div>
  );
};

export default User;
