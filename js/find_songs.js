let availableKeys = [
  {songName: "", artistName: "ABBA", albumName: "", type: "artist",  link: "artist.html"},
  {songName: "", artistName: "ABBA", albumName: "Super Trouper", type: "album", link: "album.html"},
  {songName: "Super Trouper", artistName: "ABBA", albumName: "Super Trouper", type: "song", link: "song.html"},
  {songName: "B", artistName: "B", albumName: "B", type: "song", link: "song.html"},
]

const navSearchResults = document.querySelector('.nav-search-results');
const inputBox = document.getElementById('.input-box');

document.addEventListener('DOMContentLoaded', (event) => {
  const inputBox = document.getElementById('input-box');

  function clearResults() {
      navSearchResults.innerHTML = '';
  }


  inputBox.onkeyup = function(){
      let result = [];
      let input = inputBox.value.toLowerCase();
      if (input.length) {
          // only check by type e.g. if type is artist then only check artist name
          availableKeys.forEach((key) => {
              if (key.type === 'artist' && key.artistName.toLowerCase().includes(input)) {
                  result.push(key);
              } else if (key.type === 'album' && key.albumName.toLowerCase().includes(input)) {
                  result.push(key);
              } else if (key.type === 'song' && key.songName.toLowerCase().includes(input)) {
                  result.push(key);
              }
          });    
      console.log(result)
      navSearchResults.innerHTML = '';
      dispalyResults(result);

  } else {
      clearResults();
  }
  
}});


function dispalyResults (result) {
  navSearchResults.innerHTML = '';
  result.forEach((key) => {
      let a = document.createElement('a');
      a.href = key.link;
      if (key.type === 'artist') {
          a.innerHTML = `Artist: ${key.artistName}`;
      } else if (key.type === 'album') {
          a.innerHTML = `Album: ${key.albumName}`;
      } else {
          a.innerHTML = `Song: ${key.songName}`;
      }
      navSearchResults.appendChild(a);
  });
}

// ---------------------------- //

// search songs functionality
const songs = [
  // add image cover
  { name: "Song 1", artist: "Artist A", similarity: 0.93, duration: "2:00", image: "/demo_song_covers/acoustic_1.jpg", album: "Album 1" },
  { name: "Song 2", artist: "Artist B", similarity: 0.87, duration: "3:28", image: "/demo_song_covers/acoustic_2.jpg", album: "Album 2" },
  { name: "Song 3", artist: "Artist C", similarity: 0.86, duration: "4:00", image: "/demo_song_covers/night_street_1.jpg", album: "Album 3" },
  { name: "Song 4", artist: "Artist D", similarity: 0.85, duration: "2:33", image: "/demo_song_covers/night_street_2.jpg", album: "Album 2" },
];

function searchSong() {
  const searchQuery = document.getElementById("searchBar").value.trim();
  const resultsContainer = document.getElementById("results");
  resultsContainer.innerHTML = "";

  // Function to close all dropdowns
  function closeAllDropdowns() {
    document.querySelectorAll(".dropdown-content").forEach(function (dropdown) {
      dropdown.style.display = "none";
    });
    // Also hide all nested dropdown contents
    document.querySelectorAll(".nested-dropdown-content").forEach(function (dropdown) {
      dropdown.style.display = "none";
    });
  }

  // Close all dropdowns when the user clicks anywhere on the window
  if (searchQuery) {
    // display songs if search query is not empty
    songs.forEach((song) => {
      const songDiv = document.createElement("div");
      songDiv.classList.add("result-box");

      const img = document.createElement("img");
      img.src = song.image;
      img.alt = "Song cover";
      songDiv.appendChild(img);

      const songDetails = document.createElement("div");
      songDetails.classList.add("song-details");

      const songName = document.createElement("p");
      songName.classList.add("song-name");
      songName.textContent = song.name;
      songDetails.appendChild(songName);

      const artistName = document.createElement("p");
      artistName.classList.add("song-artist");
      artistName.textContent = song.artist;
      songDetails.appendChild(artistName);

      const albumName = document.createElement("p");
      albumName.classList.add("song-album");
      albumName.textContent = song.album;
      songDetails.appendChild(albumName);

      songDiv.appendChild(songDetails);

      const otherDetails = document.createElement("div");
      otherDetails.classList.add("other-details");
      otherDetails.innerHTML = `
        <p>Similarity: ${song.similarity}</p>
        <p>Duration: ${song.duration}</p>
      `;

      songDiv.appendChild(otherDetails);

      const playButton = document.createElement("play-button");
      playButton.classList.add("play-button");
      playButton.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
        </svg>
      `;
      songDiv.appendChild(playButton);

      const dropdownButton = document.createElement("button");
      dropdownButton.classList.add("dropdown-button");
      dropdownButton.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
        </svg>
      `;

      // Primary Dropdown content container
      const dropdownContent = document.createElement("div");
      dropdownContent.classList.add("dropdown-content");
      dropdownContent.style.display = "none"; // Initially hidden

      // 'Add to Playlist' button inside the dropdown
      const addToPlaylistButton = document.createElement("button");
      addToPlaylistButton.textContent = "Add to Playlist";
      addToPlaylistButton.classList.add("nested-dropdown-button");

      const addToQueueButton = document.createElement("button");
      addToQueueButton.textContent = "Add to Queue";
      addToQueueButton.classList.add("nested-dropdown-button");

      const goToSongRadioButton = document.createElement("button");
      goToSongRadioButton.textContent = "Go to Song Radio";
      goToSongRadioButton.classList.add("nested-dropdown-button");

      const goToArtistRadioButton = document.createElement("button");
      goToArtistRadioButton.textContent = "Go to Artist Radio";
      goToArtistRadioButton.classList.add("nested-dropdown-button");

      // Nested dropdown for playlists
      const nestedDropdownContent = document.createElement("div");
      nestedDropdownContent.classList.add("nested-dropdown-content");
      nestedDropdownContent.style.display = "none"; // Initially hidden

      // Placeholder playlists array (replace with actual playlists)
      const playlists = ["Playlist 1", "Playlist 2", "Playlist 3"];

      // Populate nested dropdown with playlists
      playlists.forEach((playlist) => {
        const playlistOption = document.createElement("a");
        playlistOption.href = "#";
        playlistOption.textContent = playlist;
        playlistOption.addEventListener("click", function (event) {
          // close all dropdowns
          document.querySelectorAll(".dropdown-content").forEach(function (dropdown) {
            dropdown.style.display = "none";
          });
        });
        nestedDropdownContent.appendChild(playlistOption);
      });

      // Toggle nested dropdown content on click
      addToPlaylistButton.addEventListener("click", function (event) {
        event.stopPropagation(); // This stops the click from closing the primary dropdown
        nestedDropdownContent.style.display = nestedDropdownContent.style.display === "flex" ? "none" : "flex";
      });

      addToPlaylistButton.appendChild(nestedDropdownContent);
      dropdownContent.appendChild(addToPlaylistButton);
      dropdownContent.appendChild(addToQueueButton);
      dropdownContent.appendChild(goToSongRadioButton);
      dropdownContent.appendChild(goToArtistRadioButton);
      dropdownButton.appendChild(dropdownContent);

      // Toggle primary dropdown content on click
      dropdownButton.onclick = function (event) {
        event.stopPropagation(); // Prevents click from propagating to nested dropdowns
        closeAllDropdowns();
        dropdownContent.style.display = dropdownContent.style.display === "flex" ? "none" : "flex";
      };

      songDiv.appendChild(dropdownButton);
      resultsContainer.appendChild(songDiv);
      resultsContainer.appendChild(songDiv);
    });
  }
  window.onclick = function () {
    document.querySelectorAll(".dropdown-content").forEach(function (dropdown) {
      dropdown.style.display = "none";
    });
  };
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


