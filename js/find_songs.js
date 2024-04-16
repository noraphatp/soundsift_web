const availableKeys = [
  { songName: "", artistName: "ABBA", albumName: "", type: "artist", link: "ABBA.html" },
  { songName: "", artistName: "ABBA", albumName: "Super Trouper", type: "album", link: "album.html" },
  { songName: "Super Trouper", artistName: "ABBA", albumName: "Super Trouper", type: "song", link: "song.html" },
  { songName: "B", artistName: "B", albumName: "B", type: "song", link: "song.html" },
];

const navSearchResults = document.querySelector(".nav-search-results");
const inputBox = document.getElementById(".input-box");

document.addEventListener("DOMContentLoaded", (event) => {
  const inputBox = document.getElementById("input-box");

  function clearResults() {
    navSearchResults.innerHTML = "";
  }

  inputBox.onkeyup = function () {
    let result = [];
    let input = inputBox.value.toLowerCase();
    if (input.length) {
      // only check by type e.g. if type is artist then only check artist name
      availableKeys.forEach((key) => {
        if (key.type === "artist" && key.artistName.toLowerCase().includes(input)) {
          result.push(key);
        } else if (key.type === "album" && key.albumName.toLowerCase().includes(input)) {
          result.push(key);
        } else if (key.type === "song" && key.songName.toLowerCase().includes(input)) {
          result.push(key);
        }
      });
      console.log(result);
      navSearchResults.innerHTML = "";
      displayResults(result);
    } else {
      clearResults();
    }
  };
});

function displayResults(result) {
  navSearchResults.innerHTML = "";
  result.forEach((key) => {
    let a = document.createElement("a");
    // this is where the link will go, change the array as needed
    a.href = key.link;
    if (key.type === "artist") {
      a.innerHTML = `Artist: ${key.artistName}`;
    } else if (key.type === "album") {
      a.innerHTML = `Album: ${key.albumName}`;
    } else {
      a.innerHTML = `Song: ${key.songName}`;
    }
    navSearchResults.appendChild(a);
  });
}

// ---------------------------- //

// This will be the song keys that will be used to search for songs
const song_keys = [
  { name: "Super Trouper", artist: "ABBA" },
  { name: "Back in Black", artist: "ACDC" },
];

// results of the search
const songs = [
  // add image cover
  { name: "Song 1", artist: "Artist A", similarity: 0.93, duration: "2:00", image: "./demo_song_covers/acoustic_1.jpg", album: "Album 1" },
  { name: "Song 2", artist: "Artist B", similarity: 0.87, duration: "3:28", image: "./demo_song_covers/acoustic_2.jpg", album: "Album 2" },
  { name: "Song 3", artist: "Artist C", similarity: 0.86, duration: "4:00", image: "./demo_song_covers/night_street_1.jpg", album: "Album 3" },
  { name: "Song 4", artist: "Artist D", similarity: 0.85, duration: "2:33", image: "./demo_song_covers/night_street_2.jpg", album: "Album 2" },
];

// Function to search for songs
document.addEventListener("DOMContentLoaded", function () {
  const searchBar = document.getElementById("searchBar");

  searchBar.addEventListener("input", function () {
    const searchQuery = searchBar.value.trim();
    const dropdown = document.getElementById("searchDropdown");

    // evwent listener for when user types in the search bar, if empty hide dropdown

    // Function to filter songs based on input and update dropdown
    const updateDropdown = () => {
      const searchQuery = searchBar.value.trim().toLowerCase();
      const filteredSongs = song_keys.filter((song) => {
        return song.name.toLowerCase().includes(searchQuery) || song.artist.toLowerCase().includes(searchQuery);
      });

      if (!searchQuery) {
        dropdown.style.display = "none";
        return;
      }

      // Clear current dropdown contents
      dropdown.innerHTML = "";

      // Create new dropdown items from filtered songs
      filteredSongs.forEach((song) => {
        const dropdownItem = document.createElement("div");
        dropdownItem.textContent = `${song.name} by ${song.artist}`;
        dropdownItem.classList.add("dropdown-item");
        dropdownItem.onclick = () => {
          searchBar.value = song.name; // set search bar text to the song name
          searchSong(); // call the search function
          dropdown.style.display = "none"; // hide the dropdown
        };
        dropdown.appendChild(dropdownItem);
      });

      // Show dropdown if there are results
      dropdown.style.display = filteredSongs.length > 0 ? "flex" : "none";
    };

    // Event listener for input on search bar
    searchBar.addEventListener("input", updateDropdown);

    // Event listener for clicking outside of the dropdown to hide it
    // document.addEventListener("click", (event) => {
    //   if (!dropdown.contains(event.target) && !searchBar.contains(event.target)) {
    //     dropdown.style.display = "none";
    //   }
    // });
  });
});

function searchSong() {
  const dropdown = document.getElementById("searchDropdown");
  // clear dropdown
  dropdown.innerHTML = "";

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

      // Thumbs up and down buttons wrapped inside a div tag
      const thumbsUpDownDiv = document.createElement("div");
      thumbsUpDownDiv.classList.add("thumbs-up-down-container");

      const thumbsUpButton = document.createElement("button");
      thumbsUpButton.classList.add("thumbs-button");
      thumbsUpButton.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
        </svg>
      `;

      const thumbsDownButton = document.createElement("button");
      thumbsDownButton.classList.add("thumbs-button");
      thumbsDownButton.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M7.498 15.25H4.372c-1.026 0-1.945-.694-2.054-1.715a12.137 12.137 0 0 1-.068-1.285c0-2.848.992-5.464 2.649-7.521C5.287 4.247 5.886 4 6.504 4h4.016a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23h1.294M7.498 15.25c.618 0 .991.724.725 1.282A7.471 7.471 0 0 0 7.5 19.75 2.25 2.25 0 0 0 9.75 22a.75.75 0 0 0 .75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 0 0 2.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384m-10.253 1.5H9.7m8.075-9.75c.01.05.027.1.05.148.593 1.2.925 2.55.925 3.977 0 1.487-.36 2.89-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398-.306.774-1.086 1.227-1.918 1.227h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 0 0 .303-.54" />
        </svg>
      `;

      thumbsUpDownDiv.appendChild(thumbsUpButton);
      thumbsUpDownDiv.appendChild(thumbsDownButton);
      songDiv.appendChild(thumbsUpDownDiv);

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
