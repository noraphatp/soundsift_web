let availableKeys = [
    {songName: "", artistName: "ABBA", albumName: "", type: "artist"},
    {songName: "", artistName: "ABBA", albumName: "Super Trouper", type: "artist"},
    {songName: "Super Trouper", artistName: "ABBA", albumName: "Super Trouper", type: "song"}
]

const navSearchResults = document.querySelector('nav-search-results');
const inputBox = document.querySelector('.input-box');

inputBox.onkeyup = function(){
    let result = [];
    let input = inputBox.value.toLowerCase();
    if (input.length) {
        result = availableKeys.filter((key) => {
            return key.artistName.toLowerCase().includes(input) || key.albumName.toLowerCase().includes(input) || key.songName.toLowerCase().includes(input);
        });
        console.log(result);
    }
}