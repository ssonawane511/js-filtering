/** @format */

const searchTerms = ["jamner", "maharashtra"];
// searchterms array 
const selectedRestaurants = [
  {
    city: "Orlando",
    name: "Dons Food Place",
    state: "FL",
    id: 1,
  },
  {
    city: "Sarasota",
    name: "Rons World",
    state: "FL",
    id: 2,
  },
  {
    city: "jamner",
    name: "parcel buddy",
    state: "maharashtra",
    id: 3,
  },
];
// here we have given the array of multiple objects from 
// which we need to fetch only the object whose
// city and state is sarasota and fl respectively 

let result = selectedRestaurants.filter( // we  will use filter function 
  (r) => // where r such that 
    searchTerms.includes(r.city.toLowerCase()) &&
    searchTerms.includes(r.state.toLowerCase())

    // which inculdes both city and state
);

console.log(result);
// simply consoling out 