const songs = [
  { name: "Song 1", artist: "Artist A", similarity: 0.93 },
  { name: "Song 2", artist: "Artist B", similarity: 0.87 },
  { name: "Song 3", artist: "Artist C", similarity: 0.86 },
  { name: "Song 4", artist: "Artist D", similarity: 0.85 },
  { name: "Song 5", artist: "Artist E", similarity: 0.84 },
  // You can still list songs here to show when search is not empty
];

function searchSong() {
  const searchQuery = document.getElementById("searchBar").value.trim(); // Trim the search query
  const resultsContainer = document.getElementById("results");
  resultsContainer.innerHTML = ""; // Clear previous results

  if (searchQuery) {
    // Proceed only if searchQuery is not empty
    songs.forEach((song) => {
      // Display all songs as this is a prototype
      const songDiv = document.createElement("div");
      songDiv.classList.add("result-box");
      songDiv.classList.add("song-result");
      songDiv.innerHTML = `<p>${song.name} - ${song.artist}</p><p>Similarity: ${song.similarity}</p>`;
      // add button
      const button = document.createElement("button");
      button.classList.add("result-button");
      button.innerText = "Add";
      songDiv.appendChild(button);
      resultsContainer.appendChild(songDiv);
    });
  }
}

function clearResults() {
  document.getElementById("results").innerHTML = ""; // Clear results
  document.getElementById("searchBar").value = ""; // Clear search bar
}
