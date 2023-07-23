import React, { useState } from "react";
import "../../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import ReviewForm from "./ReviewForm";
import Review from "./Review";

//export default function CountryTableRow(props) {
//  let country = props.country;
//  return (
//    <tr key={ country.country_code }>
//      <td>{ country.country_code }</td>
//      <td>{ country.country_name }</td>
//    </tr>
//  );
//}

export default function Movie(props) {
  let imgSrc = props.imgSrc || "https://picsum.photos/250/250";
  let movieName = props.movieName || "Movie Name";
  let movieSyn = props.movieSyn || "Movie Synopsis";

  const [review, setReview] = useState([]);

  const [inputValue, setInputValue] = useState("");

  const [selectedValue, setSelectedValue] = useState("1");

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  function handleButtonClick() {
    setReview([...review, `${inputValue} ${selectedValue} Stars`]);
    setInputValue("");
  }

  function handleSelectedChange(event) {
    setSelectedValue(event.target.value);
    //console.log(selectedValue);
  }

  return (
    <div className="col-sm-4 p-0">
      <div className="card" style={{ width: "100%" }}>
        <img src={imgSrc} className="card-img-top" alt="..." width="100%"></img>
        <div className="card-body">
          <h5 className="card-title overflow-auto" style={{ height: "75px" }}>
            {movieName}
          </h5>
          <p className="card-text overflow-auto" style={{ height: "100px" }}>
            {movieSyn}
          </p>
          <ReviewForm
            inputValue={inputValue}
            onInputChange={handleInputChange}
            onSelectChange={handleSelectedChange}
          />
          <button className="btn btn-success" onClick={handleButtonClick}>
            Submit Review
          </button>
          <Review reviews={review} />
        </div>
      </div>
    </div>
  );
}
