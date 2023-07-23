import React from "react";

export default function Stars(props) {
  return (
    <div className="form-floating col-sm-6">
      <select
        className="form-select"
        id="floatingSelect"
        aria-label="Floating label select example"
        onChange={props.handleChange}
      >
        <option value="1" key="1">
          One
        </option>
        <option value="2" key="2">
          Two
        </option>
        <option value="3" key="3">
          Three
        </option>
        <option value="4" key="4">
          Four
        </option>
        <option value="5" key="5">
          Five
        </option>
      </select>
      <label htmlFor="floatingSelect">Stars</label>
    </div>
  );
}
