import React from "react";

class Login extends React.Component {
  render() {
    return (
      <>
        <div className="card">
          <div className="card-content">
            <a href="#" className="button is-Danger">
              Google
            </a>
            <a href="#" className="button is-Success">
              GitHub
            </a>
            <a href="#" className="button is-Link">
              Facebook
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
