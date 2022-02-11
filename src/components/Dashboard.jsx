import React from "react";
import Profile from "./Profile";
import Questions from "./Questions";

class Dashboard extends React.Component {
  render() {
    return (
      <>
        <div className="columns">
          <div className="column profile is-one-third">
            <Profile />
          </div>
          <div className="column questions is-two-thirds">
            <Questions />
          </div>
        </div>
      </>
    );
  }
}

export default Dashboard;
