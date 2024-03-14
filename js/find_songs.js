// can add corresponding image and such later on
const songs = [
  // add image cover
  { name: "Song 1", artist: "Artist A", similarity: 0.93 },
  { name: "Song 2", artist: "Artist B", similarity: 0.87 },
  { name: "Song 3", artist: "Artist C", similarity: 0.86 },
  { name: "Song 4", artist: "Artist D", similarity: 0.85 },
];

function searchSong() {
  const searchQuery = document.getElementById("searchBar").value.trim();
  const resultsContainer = document.getElementById("results");
  resultsContainer.innerHTML = "";

  if (searchQuery) {
    // display songs if search query is not empty
    songs.forEach((song) => {
      const songDiv = document.createElement("div");
      songDiv.classList.add("result-box");
      songDiv.classList.add("song-result");
      songDiv.innerHTML = `<p>${song.name} - ${song.artist}</p><p>Similarity: ${song.similarity}</p>`;
      const button = document.createElement("button");
      button.classList.add("result-button");
      button.innerText = "Add";
      songDiv.appendChild(button);
      resultsContainer.appendChild(songDiv);
    });
  }
}

function clearResults() {
  document.getElementById("results").innerHTML = ""; // clear results
  document.getElementById("searchBar").value = ""; // clear search bar
}

// modal

var modal = document.getElementById("myModal");
var btn = document.getElementById("filter-button");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// genre buttons

function toggleButton(selectedId) {
  // Get all buttons
  const buttons = document.querySelectorAll("genre-button");

  // Loop through each button
  buttons.forEach((btn) => {
    // If it's the button that was clicked, toggle its 'active' state
    if (btn.id === selectedId) {
      btn.classList.toggle("is-selected");
    } else {
      // Otherwise, ensure it is not marked as 'active'
      btn.classList.remove("is-selected");
    }
  });
}

function toggleButton(selectedId) {
  // Get the clicked button by its ID
  const button = document.getElementById(selectedId);
  // Toggle the 'is-selected' class on the clicked button
  button.classList.toggle("is-selected");
}

var slider = document.getElementById("release-year-slider");
var output = document.getElementById("value");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
  output.innerHTML = this.value;
};

function updateMoodValue(value, outputId) {
  document.getElementById(outputId).textContent = value;
}