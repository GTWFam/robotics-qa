import React from "../_snowpack/pkg/react.js";
import Profile from "./Profile.js";
import Questions from "./Questions.js";
class Dashboard extends React.Component {
  render() {
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
      className: "columns"
    }, /* @__PURE__ */ React.createElement("div", {
      className: "column profile is-one-third"
    }, /* @__PURE__ */ React.createElement(Profile, null)), /* @__PURE__ */ React.createElement("div", {
      className: "column questions is-two-thirds"
    }, /* @__PURE__ */ React.createElement(Questions, null))));
  }
}
export default Dashboard;
