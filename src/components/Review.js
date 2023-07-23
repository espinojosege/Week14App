import React from "react";
import ReviewList from "./ReviewList";

export default function Review(props) {
  return (
    <div>
      <ReviewList reviews={props.reviews} />
    </div>
  );
}
