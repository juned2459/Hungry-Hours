import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
        avatar_url: "https://dummy-photo.com",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/juned2459");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {}

  componentWillUnmount() {}

  render() {
    const { name, location } = this.state.userInfo;

    return (
      <div className="user-card">
        <h3>Location: {location}</h3>
        <h4>Contact: @juned2459</h4>
      </div>
    );
  }
}

export default UserClass;
