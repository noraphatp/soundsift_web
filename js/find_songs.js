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
{ name: "Back in Black", artist: "ACDC" },
{ name: "Turning Tables", artist: "Adele" },
{ artist: "King", name: "Steps In Time" },
{ artist: "Harry Chapin", name: "Sniper and Other Love Songs" },
{ artist: "Jamiroquai", name: "Synkronized" },
{ artist: "Alton McClain & Destiny", name: "The Best Soul & Funk Collection: Extra" },
{ artist: "Donald Byrd", name: "A New Perspective (Remastered  Rudy Van Gelder Edition)" },
{ artist: "The Association", name: "Insight Out" },
{ artist: "Chicago", name: "Chicago 16 (Expanded & Remastered)" },
{ artist: "Elvis Costello", name: "My Aim Is True" },
{ artist: "Sting", name: "Brand New Day" },
{ artist: "Wang Chung", name: "Mosaic" },
{ artist: "CherrelleAlexander O'Neal", name: "Best Of" },
{ artist: "Chicago", name: "Chicago 18 (Expanded Edition)" },
{ artist: "Echo & the Bunnymen", name: "Porcupine (Expanded; 2004 Remaster)" },
{ artist: "The Honeydrippers", name: "The Honeydrippers, Vol. 1 (Expanded)" },
{ artist: "Clio", name: "80's Dance Story Original Italo Hits" },
{ artist: "a-ha", name: "East of the Sun, West of the Moon" },
{ artist: "Chicago", name: "Chicago V (Expanded & Remastered)" },
{ artist: "Led Zeppelin", name: "Led Zeppelin IV (Remaster)" },
{ artist: "Peter Gabriel", name: "Scratch My Back (Special Edition)" },
{ artist: "Taeko Onuki", name: "SUNSHOWER" },
{ artist: "James Gang", name: "Thirds" },
{ artist: "Frankie Goes To Hollywood", name: "Liverpool" },
{ artist: "Genesis", name: "The Lamb Lies Down On Broadway (Remastered 2008)" },
{ artist: "David Bowie", name: "Pinups (2015 Remaster)" },
{ artist: "R.E.M.", name: "Document - 25th Anniversary Edition" },
{ artist: "Hamilton, Joe Frank & Reynolds", name: "Fallin' In Love" },
{ artist: "The Doors", name: "Morrison Hotel" },
{ artist: "The Charlatans", name: "Some Friendly" },
{ artist: "Jamiroquai", name: "A funk odyssey" },
{ artist: "The O'Jays", name: "Ship Ahoy (Expanded Edition)" },
{ artist: "David Bowie", name: "Black Tie White Noise" },
{ artist: "The O'Jays", name: "Family Reunion (Expanded Edition)" },
{ artist: "Jackson Browne", name: "For Everyman" },
{ artist: "The Rolling Stones", name: "Tattoo You (2009 Re-Mastered)" },
{ artist: "Jamiroquai", name: "Emergency on Planet Earth (Remastered)" },
{ artist: "Utopia", name: "RA" },
{ artist: "Eagles", name: "Hotel California (2013 Remaster)" },
{ artist: "Jefferson Airplane", name: "Jefferson Airplane Takes Off" },
{ artist: "Deep Purple", name: "Perfect Strangers" },
{ artist: "Phil Collins", name: "Hello, I Must Be Going (2016 Remaster)" },
{ artist: "Four Tops", name: "Reach Out" },
{ artist: "David Bowie", name: "Station to Station (2016 Remaster)" },
{ artist: "The Rolling Stones", name: "Some Girls (Deluxe Version)" },
{ artist: "a-ha", name: "Hunting High and Low" },
{ artist: "Donald Fagen", name: "Morph the Cat" },
{ artist: "Cream", name: "Wheels Of Fire" },
{ artist: "The Rolling Stones", name: "Black And Blue (Remastered 2009)" },
{ artist: "The Alan Parsons Project", name: "I Robot (Legacy Edition)" },
{ artist: "Earth, Wind & FireThe Emotions", name: "I Am" },
{ artist: "Rasa", name: "Everything You See Is Me" },
{ artist: "Supertramp", name: "Famous Last Words (Remastered)" },
{ artist: "James Gang", name: "Rides Again" },
{ artist: "Triumvirat", name: "Spartacus" },
{ artist: "The Boomtown Rats", name: "The Fine Art Of Surfacing" },
{ artist: "Bill Withers", name: "Menagerie" },
{ artist: "Clio", name: "Eyes" },
{ artist: "Creedence Clearwater Revival", name: "Cosmo's Factory" },
{ artist: "Eric Clapton", name: "Unplugged (Deluxe Edition)" },
{ artist: "The Hollies", name: "Hollies" },
{ artist: "Billy Paul", name: "First Class" },
{ artist: "Robert PlantAlison Krauss", name: "Raise The Roof (Deluxe Edition)" },
{ artist: "Gerry Rafferty", name: "Night Owl" },
{ artist: "Triumvirat", name: "Illusions On A Double Dimple" },
{ artist: "Labi Siffre", name: "Remember My Song" },
{ artist: "Righeira", name: "Best of Righeira (Le meilleur des annees 80)" },
{ artist: "Bruce Cockburn", name: "Dancing In The Dragon's Jaws (Deluxe Edition)" },
{ artist: "Dwayne Ford", name: "Needless Freaking" },
{ artist: "The Blue Nile", name: "Hats (Deluxe Version)" },
{ artist: "Robin Trower", name: "Bridge Of Sighs (2007 Remaster)" },
{ artist: "Boston", name: "Boston" },
{ artist: "Ashford & Simpson", name: "I Wanna Be Selfish" },
{ artist: "Jamiroquai", name: "Travelling Without Moving (Remastered)" },
{ artist: "Eric Clapton", name: "461 Ocean Blvd. (Deluxe Edition)" },
{ artist: "The Alan Parsons Project", name: "The Turn Of A Friendly Card (Expanded Edition)" },
{ artist: "Julian Lennon", name: "Valotte" },
{ artist: "Frankie Goes To Hollywood", name: "Welcome To The Pleasuredome" },
{ artist: "The Brothers Johnson", name: "Light Up The Night" },
{ artist: "Level 42", name: "The Very Best Of Level 42" },
{ artist: "David Bowie", name: "Lodger (2017 Remaster)" },
{ artist: "Christopher Cross", name: "Christopher Cross" },
{ artist: "Chicago", name: "Chicago X" },
{ artist: "Peter Gabriel", name: "Us (Remastered)" },
{ artist: "Warren Zevon", name: "Excitable Boy" },
{ artist: "Cocteau Twins", name: "Heaven or Las Vegas" },
{ artist: "Joe Walsh", name: "There Goes The Neighborhood" },
{ artist: "David Bowie", name: "Hunky Dory (2015 Remaster)" },
{ artist: "The Ozark Mountain Daredevils", name: "Ozark Mountain Daredevils" },
{ artist: "Johnny Cash", name: "American IV: The Man Comes Around" },
{ artist: "Cocteau Twins", name: "Treasure Hiding: The Fontana Years" },
{ artist: "The Blue Nile", name: "A Walk Across the Rooftops (Deluxe Version)" },
{ artist: "38 Special", name: "Wild-Eyed Southern Boys" },
{ artist: "Jackson Browne", name: "Running on Empty (Remastered)" },
{ artist: "Robin Trower", name: "Long Misty Days" },
{ artist: "Kansas", name: "Leftoverture (Expanded Edition)" },
{ artist: "The S.O.S Band", name: "The UWF All-Stars (Live)" },
{ artist: "Donald Byrd", name: "Blackbyrd" },
{ artist: "Chicago", name: "Chicago IX: Chicago's Greatest Hits" },
{ artist: "Junior", name: "JI (Bonus Tracks Edition)" },
{ artist: "Simply Red", name: "Stars (Collector's Edition)" },
{ artist: "Jamiroquai", name: "Rock Dust Light Star" },
{ artist: "BreakbotIrfane", name: "Baby I'm Yours" },
{ artist: "Donald Fagen", name: "The Nightfly" },
{ artist: "ABBA", name: "Super Trouper" },
{ artist: "Badfinger", name: "No Dice (Remastered 2010  Deluxe Edition)" },
{ artist: "Yazoo", name: "Upstairs at Eric's (2008 Remastered Version)" },
{ artist: "Genesis", name: "Wind And Wuthering" },
{ artist: "Utopia", name: "Utopia" },
{ artist: "Ann Peebles", name: "I Can't Stand the Rain" },
{ artist: "Tommy Bolin", name: "The Ultimate Teaser" },
{ artist: "Humble Pie", name: "Rock On" },
{ artist: "Robin Trower", name: "Twice Removed from Yesterday" },
{ artist: "Harry Chapin", name: "Greatest Stories Live" },
{ artist: "Santana", name: "Moonflower" },
{ artist: "The O'Jays", name: "Message In The Music" },
{ artist: "George Benson", name: "The Ultimate Collection" },
{ artist: "Steely Dan", name: "Aja" },
{ artist: "The Brothers Johnson", name: "Winners (Expanded Edition)" },
{ artist: "David Bowie", name: "The Next Day" },
{ artist: "Joe Walsh", name: "But Seriously, Folks..." },
{ artist: "Robert PlantAlison Krauss", name: "Raising Sand" },
{ artist: "Wham!", name: "Fantastic" },
{ artist: "The Style Council", name: "Our Favourite Shop" },
{ artist: "Paul McCartneyWings", name: "All The Best" },
{ artist: "Robert Plant", name: "Now and Zen" },
{ artist: "George Michael", name: "Ladies And Gentlemen... The Best Of George Michael" },
{ artist: "Simply Red", name: "Men and Women (Expanded Version)" },
{ artist: "Joe Walsh", name: "Analog Man" },
{ artist: "Chicago", name: "Chicago II" },
{ artist: "Rick Astley", name: "Whenever You Need Somebody" },
{ artist: "Red Rider", name: "Neruda" },
{ artist: "Santana", name: "Santana" },
{ artist: "David Bowie", name: "Diamond Dogs (2016 Remaster)" },
{ artist: "The Rolling Stones", name: "Jumpin' Jack Flash  Child Of The Moon" },
{ artist: "Pages", name: "Future Street" },
{ artist: "Badfinger", name: "Straight Up (Remastered 2010  Deluxe Edition)" },
{ artist: "Cactus", name: "Cactus" },
{ artist: "The Style Council", name: "Cafe Bleu" },
{ artist: "Paul Weller", name: "True Meanings" },
{ artist: "ACDC", name: "Back In Black" },
{ artist: "The Police", name: "Zenyatta Mondatta (Remastered 2003)" },
{ artist: "Family", name: "It's Only A Movie (2024 Expanded & Remastered Edition)" },
{ artist: "Labi SiffreKevin W. Smith", name: "So Strong" },
{ artist: "Creedence Clearwater Revival", name: "Creedence Clearwater Revival - Best Of" },
{ artist: "Utopia", name: "Another Live" },
{ artist: "Peter Gabriel", name: "Scratch My Back" },
{ artist: "KC & The Sunshine Band", name: "KC & the Sunshine Band" },
{ artist: "Deep Purple", name: "Shades of Deep Purple" },
{ artist: "Tears For Fears", name: "The Seeds Of Love" },
{ artist: "Jefferson Airplane", name: "Volunteers" },
{ artist: "Cream", name: "Disraeli Gears" },
{ artist: "Blue Öyster Cult", name: "Blue Oyster Cult" },
{ artist: "David Bowie", name: "Low (2017 Remaster)" },
{ artist: "Phil Collins", name: "Face Value (2016 Remaster)" },
{ artist: "Jackson Browne", name: "Jackson Browne (Saturate Before Using)" },
{ artist: "Crosby, Stills & Nash", name: "CSN" },
{ artist: "The O'Jays", name: "Back Stabbers" },
{ artist: "The Police", name: "Ghost In The Machine (Remastered 2003)" },
{ artist: "Teddy Pendergrass", name: "Teddy (Expanded Edition)" },
{ artist: "Kenny Loggins", name: "Keep The Fire" },
{ artist: "Ambrosia", name: "One Eighty" },
{ artist: "Delegation", name: "The Best of Delegation" },
{ artist: "Supertramp", name: "Even In The Quietest Moments" },
{ artist: "Danny Wilson", name: "Bebop Moptop" },
{ artist: "David Bowie", name: "Heroes (2017 Remaster)" },
{ artist: "Athlete", name: "Vehicles & Animals" },
{ artist: "The Cars", name: "Heartbeat City" },
{ artist: "Blodwyn Pig", name: "Getting to This (2009 Remaster)" },
{ artist: "Badfinger", name: "Magic Christian Music (Remastered 2010  Deluxe Edition)" },
{ artist: "Triumvirat", name: "À La Carte" },
{ artist: "Utopia", name: "Todd Rundgren's Utopia" },
{ artist: "The Boomtown Rats", name: "Mondo Bongo" },
{ artist: "Chicago", name: "Chicago VII (Expanded & Remastered)" },
{ artist: "Crosby, Stills & Nash", name: "Crosby, Stills & Nash" },
{ artist: "Deep Purple", name: "Machine Head" },
{ artist: "Billy Squier", name: "Signs Of Life" },
{ artist: "Duran Duran", name: "Rio (Collector's Edition)" },
{ artist: "The Smiths", name: "The Smiths" },
{ artist: "The Jacksons", name: "Blame It On The Boogie" },
{ artist: "Sugarloaf", name: "Green-Eyed Lady" },
{ artist: "R.E.M.", name: "Out Of Time (25th Anniversary Edition)" },
{ artist: "The Rolling Stones", name: "Beggars Banquet (50th Anniversary Edition)" },
{ artist: "The Police", name: "Reggatta De Blanc (Remastered 2003)" },
{ artist: "Kim Wilde", name: "Kim Wilde" },
{ artist: "Earth, Wind & Fire", name: "The Best Of Earth, Wind & Fire Vol. 1" },
{ artist: "Simply Red", name: "Picture Book (Expanded Version)" },
{ artist: "Santana", name: "Supernatural (Remastered)" },
{ artist: "Ashford & Simpson", name: "So So Satisfied (Expanded Version)" },
{ artist: "David Bowie", name: "Blackstar" },
{ artist: "Randy Crawford", name: "Windsong" },
{ artist: "Jamiroquai", name: "Automaton" },
{ artist: "Kool & The Gang", name: "The Very Best Of Kool & The Gang (Reissue)" },
{ artist: "Band of Horses", name: "Cease To Begin" },
{ artist: "Teddy Pendergrass", name: "Teddy Pendergrass" },
{ artist: "Triumvirat", name: "Old Loves Die Hard" },
{ artist: "Kate Bush", name: "Never for Ever (2018 Remaster)" },
{ artist: "Joe Walsh", name: "So What (Reissue)" },
{ artist: "David Bowie", name: "David Bowie (aka Space Oddity) [2015 Remaster]" },
{ artist: "ABBA", name: "Voulez-Vous" },
{ artist: "Joe Jackson", name: "Look Sharp!" },
{ artist: "The Rolling Stones", name: "Let It Bleed" },
{ artist: "Supertramp", name: "Breakfast In America (Deluxe Edition)" },
{ artist: "CHIC", name: "Risqué (2018 Remaster)" },
{ artist: "The Rolling StonesJimmy Page", name: "Scarlet" },
{ artist: "Wham!", name: "Make It Big" },
{ artist: "The O'Jays", name: "Identify Yourself" },
{ artist: "James Gang", name: "Yer' Album" },
{ artist: "Steely Dan", name: "Can't Buy A Thrill" },
{ artist: "Echo & the Bunnymen", name: "Echo & The Bunnymen (Expanded; 2008 Remaster)" },
{ artist: "Bobby Womack", name: "The Poet II" },
{ artist: "Santana", name: "Santana's Greatest Hits" },
{ artist: "Creedence Clearwater Revival", name: "Bayou Country (40th Anniversary Edition)" },
{ artist: "Propaganda", name: "A Secret Wish (Analogue Sequence)" },
{ artist: "Robert Plant", name: "Mighty Rearranger" },
{ artist: "America", name: "View From The Ground" },
{ artist: "Paul McCartney", name: "McCartney (Archive Collection)" },
{ artist: "Utopia", name: "Adventures In Utopia" },
{ artist: "David Bowie", name: "Young Americans (2016 Remaster)" },
{ artist: "Steely Dan", name: "Katy Lied" },
{ artist: "Kenny Loggins", name: "Yesterday, Today, Tomorrow - The Greatest Hits Of Kenny Loggins" },
{ artist: "Robert Plant", name: "Fate of Nations" },
{ artist: "Sweet", name: "Hits" },
{ artist: "Kate Bush", name: "Lionheart (2018 Remaster)" },
{ artist: "The Style Council", name: "Confessions Of A Pop Group" },
{ artist: "Joe Jackson", name: "Body And Soul" },
{ artist: "Donald Byrd", name: "Love Has Come Around - Finest Moments" },
{ artist: "Philip Bailey", name: "Chinese Wall" },
{ artist: "Coldplay", name: "Mylo Xyloto" },
{ artist: "Jackson Browne", name: "Late for the Sky (Remastered)" },
{ artist: "Athlete", name: "Tourist" },
{ artist: "Eugene Record", name: "The Eugene Record" },
{ artist: "Mary Clark", name: "Take Me I'm Yours" },
{ artist: "Bobby Womack", name: "The Womack “Live”" },
{ artist: "Steely Dan", name: "Gaucho" },
{ artist: "Roachford", name: "Permanent Shade Of Blue" },
{ artist: "Prince", name: "Purple Rain" },
{ artist: "Joe Walsh", name: "Ordinary Average Guy" },
{ artist: "The Rolling Stones", name: "Aftermath (Remastered)" },
{ artist: "Delegation", name: "Delegation - Collection" },
{ artist: "The Alan Parsons Project", name: "Ammonia Avenue (Expanded Edition)" },
{ artist: "Deep Purple", name: "Deep Purple in Rock" },
{ artist: "Robin Trower", name: "Caravan to Midnight" },
{ artist: "ABC", name: "The Lexicon Of Love" },
{ artist: "The Police", name: "Outlandos D'Amour (Remastered 2003)" },
{ artist: "Yazoo", name: "You and Me Both (Remastered)" },
{ artist: "Genesis", name: "Genesis" },
{ artist: "Fat Larry's Band", name: "Fat Larry's Band: 12 Inch Classics - EP" },
{ artist: "Foreigner", name: "4 (Expanded)" },
{ artist: "Kate Bush", name: "The Sensual World" },
{ artist: "Hamilton, Joe Frank & Reynolds", name: "Greatest Hits" },
{ artist: "The Doors", name: "Strange Days" },
{ artist: "Level 42", name: "World Machine" },
{ artist: "Deep Purple", name: "Stormbringer" },
{ artist: "Utopia", name: "Deface The Music" },
{ artist: "The Rolling Stones", name: "Some Girls" },
{ artist: "Genesis", name: "Foxtrot" },
{ artist: "Sting", name: "...Nothing Like The Sun" },
{ artist: "Michael Jackson", name: "Dangerous" },
{ artist: "Utopia", name: "Oops! Wrong Planet" },
{ artist: "Kansas", name: "Two For The Show (30th Anniversary Edition)" },
{ artist: "Robert Plant", name: "The Principle of Moments" },
{ artist: "Cactus", name: "Restrictions" },
{ artist: "Parliament", name: "Funkentelechy Vs. The Placebo Syndrome" },
{ artist: "Peter Gabriel", name: "So (25th Anniversary Deluxe Edition)" },
{ artist: "Bill Withers", name: "Just As I Am" },
{ artist: "Joe SampleRandy Crawford", name: "Feeling Good" },
{ artist: "The Jam", name: "The Gift" },
{ artist: "Robert Palmer", name: "Don't Explain" },
{ artist: "The Hollies", name: "Distant Light (1999 Remaster)" },
{ artist: "TOTO", name: "Toto IV" },
{ artist: "Echo & the Bunnymen", name: "Songs to Learn & Sing" },
{ artist: "The Alan Parsons Project", name: "Eye In The Sky (Expanded Edition)" },
{ artist: "The Police", name: "Synchronicity (Remastered 2003)" },
{ artist: "Randy Crawford", name: "Now We May Begin" },
{ artist: "Paul McCartneyLinda McCartney", name: "Ram (Archive Collection)" },
{ artist: "The Kane Gang", name: "The Bad and Lowdown World of the Kane Gang" },
{ artist: "T. Rex", name: "Electric Warrior" },
{ artist: "a-ha", name: "Stay on These Roads" },
{ artist: "The Human League", name: "Fascination!" },
{ artist: "The Kane Gang", name: "Sunday in Bed, Vol. 4 (Sexy Sounds for Lazy Lovers)" },
{ artist: "Blue Öyster Cult", name: "Fire of Unknown Origin" },
{ artist: "David Bowie", name: "The Rise and Fall of Ziggy Stardust and the Spiders from Mars (2012 Remaster)" },
{ artist: "Bobby Womack", name: "Facts Of Life" },
{ artist: "Bob Dylan", name: "Desire" },
{ artist: "The Ozark Mountain Daredevils", name: "Men From Earth (Expanded Edition)" },
{ artist: "Barry White", name: "Barry White's Greatest Hits" },
{ artist: "Barry White", name: "Can't Get Enough" },
{ artist: "Traffic", name: "Traffic" },
{ artist: "Teddy Pendergrass", name: "Life Is A Song Worth Singing (Expanded Edition)" },
{ artist: "Eric ClaptonB.B. King", name: "Riding With The King" },
{ artist: "Paul Weller", name: "Stanley Road" },
{ artist: "Cactus", name: "One Way...Or Another" },
{ artist: "The Style Council", name: "Introducing The Style Council" },
{ artist: "Kate Bush", name: "The Kick Inside" },
{ artist: "Womack & Womack", name: "Love Wars" },
{ artist: "The Style Council", name: "The Cost Of Loving" },
{ artist: "Donald Byrd", name: "Places And Spaces" },
{ artist: "Level 42", name: "Running In The Family" },
{ artist: "Aztec Camera", name: "High Land, Hard Rain" },
{ artist: "Athlete", name: "Beyond the Neighbourhood" },
{ artist: "ABBA", name: "Waterloo" },
{ artist: "Def Leppard", name: "Pyromania" },
{ artist: "The Isley Brothers", name: "3+3" },
{ artist: "The Doors", name: "L.A. Woman" },
{ artist: "Chris Farlowe", name: "Slade Remade - A Tribute to Slade" },
{ artist: "Level 42", name: "True Colours (Expanded Version)" },
{ artist: "Kool & The Gang", name: "Wild And Peaceful" },
{ artist: "The Cars", name: "The Cars" },
{ artist: "Patrice Rushen", name: "Patrice (Remastered)" },
{ artist: "America", name: "Homecoming" },
{ artist: "The Doobie Brothers", name: "The Captain and Me" },
{ artist: "David Bowie", name: "Tonight (2018 Remaster)" },
{ artist: "Lenny Kravitz", name: "Are You Gonna Go My Way" },
{ artist: "Ann Peebles", name: "Tellin' It" },
{ artist: "Family", name: "Fearless (2023 Expanded & Remastered Edition)" },
{ artist: "Duran Duran", name: "Duran Duran (Deluxe Edition)" },
{ artist: "Duran Duran", name: "Duran Duran" },
{ artist: "Joe Walsh", name: "The Confessor" },
{ artist: "Peter Gabriel", name: "Peter Gabriel 1: Car (Remastered)" },
{ artist: "Johnny 'Guitar' Watson", name: "Ain't That A Bitch" },
{ artist: "Wild Cherry", name: "Wild Cherry" },
{ artist: "Tears For Fears", name: "The Hurting" },
{ artist: "The Jackson 5", name: "The Ultimate Collection: Jackson 5" },
{ artist: "Genesis", name: "Trespass" },
{ artist: "Robert Plant", name: "Pictures at Eleven" },
{ artist: "Bobby Womack", name: "Someday We'll All Be Free" },
{ artist: "Jefferson Airplane", name: "Crown Of Creation" },
{ artist: "David Bowie", name: "Never Let Me Down (2018 Remaster)" },
{ artist: "The Boomtown Rats", name: "A Tonic For The Troops" },
{ artist: "Sister Sledge", name: "We Are Family" },
{ artist: "John Mayer Trio", name: "TRY! - Live In Concert" },
{ artist: "Sting", name: "The Soul Cages" },
{ artist: "TOTO", name: "Hydra" },
{ artist: "Hamilton, Joe Frank & Reynolds", name: "Hallway Symphony" },
{ artist: "Genesis", name: "And Then There Were Three" },
{ artist: "Electric Light Orchestra", name: "Discovery" },
{ artist: "Supertramp", name: "Brother Where You Bound (Remastered)" },
{ artist: "LarsenFeiten Band", name: "Full Moon featuring Neil Larsen and Buzz Feiten" },
{ artist: "Willie Hutch", name: "Soul Portrait" },
{ artist: "a-ha", name: "Scoundrel Days" },
{ artist: "Echo & the Bunnymen", name: "Ocean Rain (Expanded; 2007 Remaster)" },
{ artist: "Gerry Rafferty", name: "On A Wing & A Prayer" },
{ artist: "Humble Pie", name: "Humble Pie" },
{ artist: "TOTO", name: "Toto" },
{ artist: "Patrice Rushen", name: "Straight From The Heart" },
{ artist: "The O'Jays", name: "So Full Of Love" },
{ artist: "The Human League", name: "Dare!" },
{ artist: "10cc", name: "The Original Soundtrack" },
{ artist: "Eric Clapton", name: "Slowhand 35th Anniversary" },
{ artist: "Jackson Browne", name: "The Next Voice You Hear - The Best Of Jackson Browne" },
{ artist: "Bobby Womack", name: "The Poet" },
{ artist: "xPropaganda", name: "The Heart Is Strange" },
{ artist: "Duran Duran", name: "Seven and the Ragged Tiger (Deluxe Edition)" },
{ artist: "The Cars", name: "Complete Greatest Hits" },
{ artist: "Simply Red", name: "A New Flame (Expanded Version)" },
{ artist: "Supertramp", name: "Crime Of The Century (Remastered)" },
{ artist: "Eric Clapton", name: "Eric Clapton" },
{ artist: "The Rolling Stones", name: "12 X 5" },
{ artist: "Gerry Rafferty", name: "City to City" },
{ artist: "Creedence Clearwater Revival", name: "Green River (40th Anniversary Edition)" },
{ artist: "Labi Siffre", name: "The Singer & The Song" },
{ artist: "The Doors", name: "Waiting for the Sun" },
{ artist: "Anthony Robustelli", name: "The Steely Dan Sessions: Interpretations of Unrealized Classics (A Tribute to Walter Becker and Donald Fagen)" },
{ artist: "Genesis", name: "Invisible Touch" },
{ artist: "The Brothers Johnson", name: "Out Of Control" },
{ artist: "Blue Öyster Cult", name: "The Revolution By Night" },
{ artist: "Joe Walsh", name: "The Warriors Original Motion Picture Soundtrack" },
{ artist: "Simply Red", name: "Life (Expanded Version)" },
{ artist: "Duran Duran", name: "Notorious (Deluxe Edition)" },
{ artist: "Eagles", name: "Hell Freezes Over (Remaster 2018)" },
{ artist: "Marvin Gaye", name: "Let's Get It On (Expanded Edition)" },
{ artist: "Donald Fagen", name: "Kamakiriad" },
{ artist: "David Bowie", name: "Scary Monsters (And Super Creeps) [2017 Remaster]" },
{ artist: "Tears For Fears", name: "The Tipping Point" },
{ artist: "Procol Harum", name: "Hits'n'Flips" },
{ artist: "David Bowie", name: "David Bowie" },
{ artist: "Genesis", name: "Duke" },
{ artist: "Bad English", name: "Bad English" },
{ artist: "Journey", name: "Escape" },
{ artist: "TOTO", name: "Fahrenheit" },
{ artist: "The O'Jays", name: "Let Me Touch You" },
{ artist: "Michael Jackson", name: "Bad 25th Anniversary" },
{ artist: "Al Wilson", name: "Show and Tell: The Best of Al Wilson" },
{ artist: "Creedence Clearwater Revival", name: "Creedence Clearwater Revival (40th Anniversary Edition)" },
{ artist: "Kool & The Gang", name: "Light Of Worlds" },
{ artist: "Marvin HamlischCarly Simon", name: "The Spy Who Loved Me" },
{ artist: "The Charlatans", name: "The Charlatans" },
{ artist: "Tears For Fears", name: "Songs From The Big Chair" },
{ artist: "Rare Earth", name: "Fill Your Head: The Studio Albums 1969-1974" },
{ artist: "Kate Bush", name: "The Red Shoes" },
{ artist: "Patrice Rushen", name: "Straight from the Heart (Remastered)" },
{ artist: "Steely Dan", name: "The Royal Scam" },
{ artist: "Bill LaBounty", name: "Bill LaBounty" },
{ artist: "Sting", name: "Ten Summoner's Tales" },
{ artist: "The Spinners", name: "Spinners" },
{ artist: "Coldplay", name: "Parachutes" },
{ artist: "Ronnie Laws", name: "Friends & Strangers" },
{ artist: "Genesis", name: "We Can't Dance" },
{ artist: "The Rolling Stones", name: "Tattoo You (Super Deluxe)" },
{ artist: "Danny Wilson", name: "Meet Danny Wilson" },
{ artist: "Labi Siffre", name: "Crying, Laughing, Loving, Lying" },
{ artist: "Joe Walsh", name: "The Smoker You Drink, The Player You Get" },
{ artist: "China Crisis", name: "Diary: A Collection" },
{ artist: "Marty Balin", name: "Balin" },
{ artist: "Peter Gabriel", name: "Peter Gabriel 3: Melt (Remastered)" },
{ artist: "Tommy Bolin", name: "Private Eyes" },
{ artist: "Humble Pie", name: "Smokin'" },
{ artist: "George Michael", name: "Listen Without Prejudice  MTV Unplugged (Deluxe)" },
{ artist: "Steely Dan", name: "Pretzel Logic" },
{ artist: "Peter Gabriel", name: "So (Special Edition)" },
{ artist: "Michael Jackson", name: "Off the Wall" },
{ artist: "The Charlatans", name: "Tellin' Stories" },
{ artist: "Paul Weller", name: "Heavy Soul" },
{ artist: "Ann Peebles", name: "Part Time Love" },
{ artist: "Ronnie Laws", name: "Every Generation (Remastered)" },
{ artist: "Queen", name: "A Kind Of Magic (2011 Remaster)" },
{ artist: "Pages", name: "Pages" },
{ artist: "Randy Crawford", name: "Secret Combination" },
{ artist: "Fever the Ghost", name: "Crab in Honey" },
{ artist: "Harry Chapin", name: "Heads & Tales" },
{ artist: "Billy Joel", name: "Piano Man (Legacy Edition)" },
{ artist: "The S.O.S Band", name: "On The Rise" },
{ artist: "Wham!", name: "The Final" },
{ artist: "Led Zeppelin", name: "Led Zeppelin" },
{ artist: "Vin MorganThe 18th Parallel", name: "I'll Rise Again" },
{ artist: "Kansas", name: "Vinyl Confessions" },
{ artist: "Ambrosia", name: "Ambrosia" },
{ artist: "Randy Crawford", name: "Every Kind Of Mood (Randy, Randi, Randee)" },
{ artist: "Bobby Womack", name: "Fly Me To The Moon" },
{ artist: "Ann Peebles", name: "Straight from the Heart" },
{ artist: "Kate Bush", name: "Hounds Of Love" },
{ artist: "LarsenFeiten Band", name: "LarsenFeiten Band" },
{ artist: "The O'Jays", name: "Survival" },
{ artist: "Kansas", name: "Point Of Know Return (Expanded Edition)" },
{ artist: "Jackson Browne", name: "Hold Out" },
{ artist: "Matt Monro", name: "Essential" },
{ artist: "Ambrosia", name: "Life Beyond L.A." },
{ artist: "Phil Collins", name: "No Jacket Required (2016 Remaster)" },
{ artist: "Genesis", name: "Selling England By The Pound" },
{ artist: "The Doors", name: "The Doors (50th Anniversary Deluxe Edition)" },
{ artist: "Valerie Carter", name: "Wild Child" },
{ artist: "James Taylor", name: "Gorilla (2019 Remaster)" },
{ artist: "EurythmicsAnnie LennoxDave Stewart", name: "Sweet Dreams (Are Made Of This)" },
{ artist: "Athlete", name: "Black Swan" },
{ artist: "David Bowie", name: "Let's Dance (2018 Remaster)" },
{ artist: "Chicago", name: "Chicago 17 (Expanded & Remastered)" },
{ artist: "Propaganda", name: "1234" },
{ artist: "Eric Clapton", name: "Clapton Chronicles: The Best of Eric Clapton" },
{ artist: "Creedence Clearwater Revival", name: "Pendulum (40th Anniversary Edition)" },
{ artist: "Humble Pie", name: "Eat It" },
{ artist: "Boz Scaggs", name: "Silk Degrees" },
{ artist: "Harry Chapin", name: "Verities & Balderdash" },
{ artist: "Delegation", name: "Oh Honey" },
{ artist: "ABC", name: "Alphabet City" },
{ artist: "Sting", name: "Mercury Falling" },
{ artist: "Coldplay", name: "A Rush of Blood to the Head" },
{ artist: "Michael Jackson", name: "Thriller 25 Super Deluxe Edition" },
{ artist: "Terence Boylan", name: "Terence Boylan" },
{ artist: "Barry White", name: "Let The Music Play (Expanded Edition)" },
{ artist: "Blodwyn Pig", name: "Ahead Rings Out (2006 Remaster)" },
{ artist: "America", name: "Holiday" },
{ artist: "Led Zeppelin", name: "Led Zeppelin II (Remaster)" },
{ artist: "Terence Boylan", name: "Suzy" },
{ artist: "Genesis", name: "A Trick Of The Tail" },
{ artist: "Alexander O'Neal", name: "Hearsay" },
{ artist: "Steely Dan", name: "Alive In America" },
{ artist: "The S.O.S Band", name: "Just The Way You Like It" },
{ artist: "Family", name: "Bandstand (2023 Remastered & Expanded Edition)" },
{ artist: "Eric Clapton", name: "Slowhand 35th Anniversary (Super Deluxe)" },
{ artist: "Foreigner", name: "Agent Provocateur" },
{ artist: "Hamilton, Joe Frank & Reynolds", name: "Hamilton, Joe Frank & Reynolds" },
{ artist: "Keni Burke", name: "Changes (Expanded Edition)" },
];

// results of the search
const songs = [
  // add image cover
  { name: "The Void", artist: "Andy Black", similarity: 0.93, duration: "4:51", image: "./covers/Andy Black — The Shadow Side — The Void.jpg", album: "The Shadow Side" },
  { name: "One Desire", artist: "Kari Jobe", similarity: 0.87, duration: "4:45", image: "./covers/Kari Jobe — Where I Find You — One Desire.jpg", album: "Where I Find You" },
  { name: "If Everything Is Worth It", artist: "TIAGO IORC", similarity: 0.86, duration: "3:39", image: "./covers/TIAGO IORC — Umbilical — If Everything Is Worth It.jpg", album: "Umbilical" },
  { name: "Hell, Yeah", artist: "Nothing But Thieves", similarity: 0.85, duration: "3:07", image: "./covers/Nothing But Thieves — Broken Machine — Hell, Yeah.jpg", album: "Broken Machine" },
  { name: "The Arena", artist: "Lindsey Stirling", similarity: 0.83, duration: "4:07", image: "./covers/Lindsey Stirling — Brave Enough — The Arena.jpg", album: "Brave Enough" },
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
          // Artist 
          searchBar.value = `${song.artist} — ${song.name}`;
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

  });
});

// Create element playButton
const playButton = document.createElement("button");
playButton.classList.add("play-button");

const playButtonSvg = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
</svg>
`;

const pauseButtonSvg = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
</svg>
`;



// Function to search for songs

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

      // Play button
      var play_state = 0;

      const playButton = document.createElement("button");
      playButton.classList.add("play-button");
      playButton.innerHTML = playButtonSvg;

      playButton.onclick = function () {
        console.log("Play button clicked")
        if (play_state === 1) {
          playButton.innerHTML = playButtonSvg;
          play_state = 0;
        } else {
          playButton.innerHTML = pauseButtonSvg;
          play_state = 1;
        }
      }

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

      var thumbsup_state = 0;

      thumbsUpButton.onclick = function () {
        if (thumbsup_state === 1) {
          console.log("filled");
          console.log(thumbsup_state);
          thumbsUpButton.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
            </svg>
          `;
          thumbsup_state = 0;
        } else {
          console.log("empty");
          console.log(thumbsup_state);
          thumbsUpButton.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
              <path d="M7.493 18.5c-.425 0-.82-.236-.975-.632A7.48 7.48 0 0 1 6 15.125c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75A.75.75 0 0 1 15 2a2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23h-.777ZM2.331 10.727a11.969 11.969 0 0 0-.831 4.398 12 12 0 0 0 .52 3.507C2.28 19.482 3.105 20 3.994 20H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 0 1-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227Z" />
            </svg>
          `;
          thumbsup_state = 1;
        }
      }

      const thumbsDownButton = document.createElement("button");
      thumbsDownButton.classList.add("thumbs-button");
      thumbsDownButton.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M7.498 15.25H4.372c-1.026 0-1.945-.694-2.054-1.715a12.137 12.137 0 0 1-.068-1.285c0-2.848.992-5.464 2.649-7.521C5.287 4.247 5.886 4 6.504 4h4.016a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23h1.294M7.498 15.25c.618 0 .991.724.725 1.282A7.471 7.471 0 0 0 7.5 19.75 2.25 2.25 0 0 0 9.75 22a.75.75 0 0 0 .75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 0 0 2.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384m-10.253 1.5H9.7m8.075-9.75c.01.05.027.1.05.148.593 1.2.925 2.55.925 3.977 0 1.487-.36 2.89-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398-.306.774-1.086 1.227-1.918 1.227h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 0 0 .303-.54" />
        </svg>
      `;

      var thumbsdown_state = 0;
      
  
      thumbsDownButton.onclick = function () {
        if (thumbsdown_state === 1) {
          thumbsDownButton.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M7.498 15.25H4.372c-1.026 0-1.945-.694-2.054-1.715a12.137 12.137 0 0 1-.068-1.285c0-2.848.992-5.464 2.649-7.521C5.287 4.247 5.886 4 6.504 4h4.016a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23h1.294M7.498 15.25c.618 0 .991.724.725 1.282A7.471 7.471 0 0 0 7.5 19.75 2.25 2.25 0 0 0 9.75 22a.75.75 0 0 0 .75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 0 0 2.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384m-10.253 1.5H9.7m8.075-9.75c.01.05.027.1.05.148.593 1.2.925 2.55.925 3.977 0 1.487-.36 2.89-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398-.306.774-1.086 1.227-1.918 1.227h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 0 0 .303-.54" />
        </svg>
        
          `;
          thumbsdown_state = 0;
        } else {
          thumbsDownButton.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
              <path d="M15.73 5.5h1.035A7.465 7.465 0 0 1 18 9.625a7.465 7.465 0 0 1-1.235 4.125h-.148c-.806 0-1.534.446-2.031 1.08a9.04 9.04 0 0 1-2.861 2.4c-.723.384-1.35.956-1.653 1.715a4.499 4.499 0 0 0-.322 1.672v.633A.75.75 0 0 1 9 22a2.25 2.25 0 0 1-2.25-2.25c0-1.152.26-2.243.723-3.218.266-.558-.107-1.282-.725-1.282H3.622c-1.026 0-1.945-.694-2.054-1.715A12.137 12.137 0 0 1 1.5 12.25c0-2.848.992-5.464 2.649-7.521C4.537 4.247 5.136 4 5.754 4H9.77a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23ZM21.669 14.023c.536-1.362.831-2.845.831-4.398 0-1.22-.182-2.398-.52-3.507-.26-.85-1.084-1.368-1.973-1.368H19.1c-.445 0-.72.498-.523.898.591 1.2.924 2.55.924 3.977a8.958 8.958 0 0 1-1.302 4.666c-.245.403.028.959.5.959h1.053c.832 0 1.612-.453 1.918-1.227Z" />
            </svg>
          `;
        
          thumbsdown_state = 1;
        }
      }

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

      // dropdown content container
      const dropdownContainer = document.createElement("div");
      dropdownContainer.classList.add("dropdown-container");

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
      // resultsContainer.appendChild(songDiv);
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
