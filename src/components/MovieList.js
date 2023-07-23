import React from "react";
import Movie from "./Movie";

//export default function CountryTableRow(props) {
//  let country = props.country;
//  return (
//    <tr key={ country.country_code }>
//      <td>{ country.country_code }</td>
//      <td>{ country.country_name }</td>
//    </tr>
//  );
//}

export default function MovieList() {
  let titles = [
    "Harry Potter and the Sorcerer's/Philosopher's Stone (2001)",
    "Harry Potter and the Chamber of Secrets (2002)",
    "Harry Potter and the Prisoner of Azkaban (2004)",
    "Harry Potter and the Goblet of Fire (2005)",
    "Harry Potter and the Order of the Phoenix (2007)",
    "Harry Potter and the Half-Blood Prince (2009)",
    "Harry Potter and the Deathly Hallows: Part 1 (2010)",
    "Harry Potter and the Deathly Hallows: Part 2 (2011)",
  ];
  let imgs = [
    "https://m.media-amazon.com/images/M/MV5BNmQ0ODBhMjUtNDRhOC00MGQzLTk5MTAtZDliODg5NmU5MjZhXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_UY209_CR1,0,140,209_AL_.jpg",
    "https://m.media-amazon.com/images/M/MV5BMjE0YjUzNDUtMjc5OS00MTU3LTgxMmUtODhkOThkMzdjNWI4XkEyXkFqcGdeQXVyMTA3MzQ4MTc0._V1_UY209_CR2,0,140,209_AL_.jpg",
    "https://m.media-amazon.com/images/M/MV5BMTY4NTIwODg0N15BMl5BanBnXkFtZTcwOTc0MjEzMw@@._V1_UY209_CR0,0,140,209_AL_.jpg",
    "https://m.media-amazon.com/images/M/MV5BMTI1NDMyMjExOF5BMl5BanBnXkFtZTcwOTc4MjQzMQ@@._V1_UY209_CR1,0,140,209_AL_.jpg",
    "https://m.media-amazon.com/images/M/MV5BOTA3MmRmZDgtOWU1Ny00ZDc5LWFkN2YtNzNlY2UxZmY0N2IyXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_UX140_CR0,0,140,209_AL_.jpg",
    "https://m.media-amazon.com/images/M/MV5BNzU3NDg4NTAyNV5BMl5BanBnXkFtZTcwOTg2ODg1Mg@@._V1_UX140_CR0,0,140,209_AL_.jpg",
    "https://m.media-amazon.com/images/M/MV5BMTQ2OTE1Mjk0N15BMl5BanBnXkFtZTcwODE3MDAwNA@@._V1_UY209_CR0,0,140,209_AL_.jpg",
    "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_UX140_CR0,0,140,209_AL_.jpg",
  ];
  let syn = [
    "An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world.",
    "An ancient prophecy seems to be coming true when a mysterious presence begins stalking the corridors of a school of magic and leaving its victims paralyzed.",
    "Harry Potter, Ron and Hermione return to Hogwarts School of Witchcraft and Wizardry for their third year of study, where they delve into the mystery surrounding an escaped prisoner who poses a dangerous threat to the young wizard.",
    "Harry Potter finds himself competing in a hazardous tournament between rival schools of magic, but he is distracted by recurring nightmares.",
    "With their warning about Lord Voldemort's return scoffed at, Harry and Dumbledore are targeted by the Wizard authorities as an authoritarian bureaucrat slowly seizes power at Hogwarts.",
    `As Harry Potter begins his sixth year at Hogwarts, he discovers an old book marked as "the property of the Half-Blood Prince" and begins to learn more about Lord Voldemort's dark past.`,
    "As Harry, Ron and Hermione race against time and evil to destroy the Horcruxes, they uncover the existence of the three most powerful objects in the wizarding world: the Deathly Hallows.",
    "Harry, Ron, and Hermione search for Voldemort's remaining Horcruxes in their effort to destroy the Dark Lord as the final battle rages on at Hogwarts.",
  ];

  let movies = [];
  for (let i = 0; i < titles.length; i++) {
    let newMovie = (
      <Movie
        imgSrc={imgs[i]}
        movieName={titles[i]}
        movieSyn={syn[i]}
        key={syn[i].length + titles[i].length}
      />
    );

    movies.push(newMovie);
  }

  return <div className="row">{movies}</div>;
}
