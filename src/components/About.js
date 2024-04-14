import UserContext from "../utils/UserContext";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div className="mx-10">
        <h2 className="font-bold">Welcome to our Food App</h2>
        <div className="bg-gray-100 shadow-lg flex flex-col w-2/12 my-3">
          <div>
            <UserContext.Consumer>
              {({ loggedInUser }) => (
                <h1 className="text-xl font-bold">{loggedInUser}</h1>
              )}
            </UserContext.Consumer>
          </div>
          <UserClass
            name={"Juned (Class) "}
            location={"Dehradun Class"}
          />
        </div>
      </div>
    );
  }
}

export default About;
