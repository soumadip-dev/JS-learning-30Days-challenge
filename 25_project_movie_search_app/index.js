// Get references to input and button elements
let searchInput = document.getElementById("searchInput");
let searchBtn = document.getElementById("searchBtn");

// API key for OMDb API
let APIKey = "17f8307a";

// Function to fetch and display movie data
const getData = async (movie) => {
  try {
    // Fetch data from OMDb API
    let data = await fetch(
      `http://www.omdbapi.com/?apikey=${APIKey}&t=${movie}`
    );
    let jsonData = await data.json();

    // Clear previous content and input field
    document.querySelector(".card").innerHTML = "";
    searchInput.value = "";

    // Check for errors and log movie rating
    if (jsonData.Error) {
      console.log(jsonData.Error);
    } else {
      console.log(jsonData.Ratings[0].Value);

      // Create and populate movie card
      let div = document.createElement("div");
      div.classList.add("movieCard");
      div.innerHTML = `
        <img src="${jsonData.Poster}" alt="Movie Poster">
        <div class="cardText">
            <h1>${jsonData.Title}</h1>
            <p class="rating">Rating: <span>${jsonData.Ratings[0].Value.slice(
              0,
              3
            )}</span></p>
            <a href="#" class="types">${jsonData.Genre}</a>
            <p>Released: <span>${jsonData.Released}</span></p>
            <p>Duration: <span>${jsonData.Runtime}</span></p>
            <p>Plot: <span>${jsonData.Plot}</span></p>
        </div>
      `;
      document.querySelector(".card").appendChild(div);
    }
  } catch (error) {
    // Handle errors by displaying a message
    document.querySelector(".card").innerHTML = "<h1>Movie Not Found</h1>";
    console.log(error);
  }
};

// Default message before search
document.querySelector(".card").innerHTML =
  "<h1>Search Movie Information Here.</h1>";

// Event listener for search button
searchBtn.addEventListener("click", function () {
  let movieName = searchInput.value;
  if (movieName) {
    getData(movieName);
  } else {
    document.querySelector(".card").innerHTML = "<h1>Search Movie Name</h1>";
  }
});
