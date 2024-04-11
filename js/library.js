let availableKeys = [
    {songName: "", artistName: "ABBA", albumName: "", type: "artist",  link: "ABBA.html"},
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