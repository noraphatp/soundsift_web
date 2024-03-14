// can add corresponding image and such later on
const songs = [
  { name: "Song 1", artist: "Artist A", similarity: 0.93 },
  { name: "Song 2", artist: "Artist B", similarity: 0.87 },
  { name: "Song 3", artist: "Artist C", similarity: 0.86 },
  { name: "Song 4", artist: "Artist D", similarity: 0.85 },
];

function searchSong() {
  const searchQuery = document.getElementById("searchBar").value.trim(); 
  const resultsContainer = document.getElementById("results");
  resultsContainer.innerHTML = "";

  if (searchQuery) { // display songs if search query is not empty
    songs.forEach((song) => {
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
  document.getElementById("results").innerHTML = ""; // clear results
  document.getElementById("searchBar").value = ""; // clear search bar
}
