var library = {
  tracks: {
    t01: { id: "t01",
      name: "Code Monkey",
      artist: "Jonathan Coulton",
      album: "Thing a Week Three" },
    t02: { id: "t02",
      name: "Model View Controller",
      artist: "James Dempsey",
      album: "WWDC 2003"},
    t03: { id: "t03",
      name: "Four Thirty-Three",
      artist: "John Cage",
      album: "Woodstock 1952"}
  },
  playlists: {
    p01: { id: "p01",
      name: "Coding Music",
      tracks: ["t01", "t02"]
    },
    p02: { id: "p02",
      name: "Other Playlist",
      tracks: ["t03"]
    }
  }
};

var playlist = library.playlists;
var songs = library.tracks;

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks


var printPlaylists = function (lib) {
  var output = '';
  for (var keys in playlist) {
    var list = playlist[keys];
    output += list.id + ': ' + list.name + ' - ' + list.tracks.length + '\n';
  }
  return output;
};
console.log(printPlaylists(library));

// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function(lib) {
  var output = '';
  for (var keys in songs) {
    var list = songs[keys];
    output += list.id + ': ' + list.name + ' by ' + list.artist + ' (' + list.album + ')' + '\n';
  }
  return output;
};
console.log(printTracks(library));

// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylist = function (playlistId) {
  var output = '';
  var pl = playlist[playlistId];
  output += pl.id + ': ' + pl.name + ' - ' + pl.tracks.length + '\n';
  pl.tracks.forEach(function(track){
    var list = songs[track];
    output += list.id + ': ' + list.name + ' by ' + list.artist + ' (' + list.album + ')' + '\n';
  });
  return output;
};
console.log(printPlaylist('p01'));

// adds an existing track to an existing playlist

var addTrackToPlaylist = function (trackId, playlistId) {
  var pl = playlist[playlistId].tracks;
  pl.push(trackId);
};
addTrackToPlaylist('t01', 'p02');

// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
};

// adds a track to the library

var addTrack = function (name, artist, album) {
  var newId = uid();
  songs[newId] = {id: newId, name: name, artist: artist, album: album};
};
addTrack('Flowers are Dope', 'The Stoked Landscapers', 'Songs About Plants');

// adds a playlist to the library

var addPlaylist = function (name) {
  var newId = uid();
  playlist[newId] = {id: newId, name: name, tracks: []};
  console.log(library);
};

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

// var printSearchResults = function(query) {

// }