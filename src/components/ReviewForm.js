import React from "react";
import Stars from "./Stars";

export default function ReviewForm(props) {
  return (
    <div className="row p-1 g-0">
      <div className="col-sm-6 form-floating">
        <input
          type="text"
          value={props.inputValue}
          onChange={props.onInputChange}
          className="form-control"
          id="floatingInput"
        />
        <label htmlFor="floatingInput">Review</label>
      </div>
      <Stars handleChange={props.onSelectChange} />
    </div>
  );
}
