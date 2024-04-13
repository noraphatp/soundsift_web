let availableKeys = [
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
      dispalyResults(result);
    } else {
      clearResults();
    }
  };
});

function dispalyResults(result) {
  navSearchResults.innerHTML = "";
  result.forEach((key) => {
    let a = document.createElement("a");
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

function createDropdownContent() {
  // Close all dropdowns
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
  window.onclick = function () {
    closeAllDropdowns();
  };

  // Stop propagation to prevent window click from closing the dropdown immediately
  document.querySelectorAll(".dropdown-button").forEach(function (button) {
    button.addEventListener("click", function (event) {
      event.stopPropagation();
      closeAllDropdowns();
      // Toggle the display of the associated dropdown content
      let dropdownContent = button.nextElementSibling;
      if (dropdownContent && dropdownContent.classList.contains("dropdown-content")) {
        dropdownContent.style.display = dropdownContent.style.display === "flex" ? "none" : "flex";
      }
    });
  });

  // Add event listeners to existing dropdown buttons
  document.querySelectorAll(".track").forEach(function (track) {
    // Check if dropdown content already exists
    let dropdownContent = track.querySelector(".dropdown-content");
    if (!dropdownContent) {
      // Create dropdown content here if it doesn't exist
      dropdownContent = document.createElement("div");
      dropdownContent.classList.add("dropdown-content");
      dropdownContent.innerHTML = `
          <button class="dropdown-content-button">
            <a href="#">Add to Playlist</a>
          </button>
          <button class="dropdown-content-button">
            <a href="#">Add to Queue</a>
          </button>
          <button class="dropdown-content-button">
            <a href="#">Go to Song Radio</a>
          </button>
          <button class="dropdown-content-button">
            <a href="#">Go to Artist Radio</a>
          </button>
        `;

      const addToPlaylistButton = dropdownContent.querySelector(".dropdown-content-button:nth-child(1)");

      playlists = ["Playlist 1", "Playlist 2", "Playlist 3"];

      // Create a dropdown content for adding to playlist
      const addToPlaylistDropdownContent = document.createElement("div");
      addToPlaylistDropdownContent.classList.add("nested-dropdown-content");

      playlists.forEach(function (playlist) {
        const playlistButton = document.createElement("button");
        playlistButton.classList.add("nested-dropdown-content-button");
        playlistButton.innerHTML = `
            <a href="#">${playlist}</a>
          `;
        addToPlaylistDropdownContent.appendChild(playlistButton);
      });

      addToPlaylistButton.addEventListener("click", function (event) {
        event.stopPropagation();
        addToPlaylistDropdownContent.style.display = addToPlaylistDropdownContent.style.display === "flex" ? "none" : "flex";
      });

      // Append the nested dropdown content to the dropdown content
      dropdownContent.appendChild(addToPlaylistDropdownContent);

      // Append the dropdown content to the track
      track.appendChild(dropdownContent);
    }
  });
}

// Initialize the dropdowns when the window loads
window.addEventListener("DOMContentLoaded", createDropdownContent);
