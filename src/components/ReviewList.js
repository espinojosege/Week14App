import React from "react";

export default function ReviewList(props) {
  return (
    <div className="overflow-auto" style={{ height: "100px" }}>
      {props.reviews.map((string, index) => (
        <p key={index}>
          {index + 1}: {string}
        </p>
      ))}
    </div>
  );
}
