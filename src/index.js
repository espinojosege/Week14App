import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./components/Navbar";
import reportWebVitals from "./reportWebVitals";
import MovieList from "./components/MovieList.js";
import AssignmentVideo from "./components/Video.js";

const navbar = ReactDOM.createRoot(document.getElementById("Navbar"));

function handleVideoRender() {
  root.render(<AssignmentVideo />);
}

function handleAssignmentRender() {
  root.render(<MovieList />);
}

//navbar.render(<Navbar />);
navbar.render(
  <Navbar
    handleVideo={handleVideoRender}
    handleAssignment={handleAssignmentRender}
  />
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root
  .render
  /*<React.StrictMode>
    <App />
  </React.StrictMode>*/
  //<Stars />
  //<StarsContainer />
  //<MovieList />
  ();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
