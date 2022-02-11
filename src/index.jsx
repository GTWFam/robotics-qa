import React from "react";
import ReactDOM from "react-dom";
import Dashboard from "./components/Dashboard";
import "./styles.css";

var mountNode = document.getElementById("app");
ReactDOM.render(<Dashboard />, mountNode);
