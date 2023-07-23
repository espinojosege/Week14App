import React from "react";

export default function Navbar(props) {
  return (
    <form className="container-fluid justify-content-start">
      <button
        className="btn btn-outline-success me-2"
        type="button"
        onClick={props.handleVideo}
      >
        Assignment Video
      </button>
      <button
        className="btn btn-outline btn-outline-primary"
        type="button"
        onClick={props.handleAssignment}
      >
        Coding Assignment
      </button>
    </form>
  );
}
