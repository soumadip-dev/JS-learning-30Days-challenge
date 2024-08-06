// API key for OMDb API
let APIKey = "17f8307a";

// Get references to the search input and button elements
let searchInput = document.getElementById("searchInput");
let searchBtn = document.getElementById("searchBtn");

// Function to fetch and display movie data
const getData = async (movie) => {
  try {
    // Fetch data from OMDb API
    let fetchData = await fetch(
      `http://www.omdbapi.com/?apikey=${APIKey}&t=${movie}`
    );
    let jsonData = await fetchData.json();

    // Clear previous results and input field
    document.querySelector(".card").innerHTML = "";
    searchInput.value = "";

    // Create and populate a new movie card element
    let div = document.createElement("div");
    div.classList.add("movieCard");
    div.innerHTML = `
    <img src=${jsonData.Poster} alt="">
    <div class="cardText">
        <h1>${jsonData.Title}</h1>
        <p class="rating">Rating : <span>${jsonData.Ratings[0].Value}</span></p>
        <a href="#">${jsonData.Genre}</a>
        <p>Release : <span>${jsonData.Released}</span></p>
        <p>Duration : <span>${jsonData.Runtime}</span></p>
        <p>Description : <span>${jsonData.Plot}</span></p>
    </div>
    `;
    document.querySelector(".card").appendChild(div);
  } catch (error) {
    // Display error message if the movie is not found
    document.querySelector(".card").innerHTML =
      "<h1>Enter Valid Movie Name</h1>";
  }
};

// Event listener for the search button
searchBtn.addEventListener("click", function () {
  let movieName = searchInput.value;
  if (movieName !== "") {
    getData(movieName);
  } else {
    // Prompt user to enter a movie name if input is empty
    document.querySelector(".card").innerHTML =
      "<h1>First Search Movie Name</h1>";
  }
});
