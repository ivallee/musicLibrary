// I DID IT!!!! Refactor/lint later!

var library = {
  tracks: { t01: { id: "t01",
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
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },
// // prints a list of all playlists, in the form:
// // p01: Coding Music - 2 tracks
// // p02: Other Playlist - 1 tracks
  printPlaylists: function () {
   var output = '';
   for (var keys in this.playlists) {
    var list = this.playlists[keys];
    output += list.id + ': ' + list.name + ' - ' + list.tracks.length + '\n';
    }
   return output;
  },
// // prints a list of all tracks, in the form:
// // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// // t02: Model View Controller by James Dempsey (WWDC 2003)
// // t03: Four Thirty-Three by John Cage (Woodstock 1952)
  printTracks: function() {
    var output = '';
    for (var keys in this.tracks) {
      var list = this.tracks[keys];
      output += list.id + ': ' + list.name + ' by ' + list.artist + ' (' + list.album + ')' + '\n';
    }
    return output;
  },
  // // prints a list of tracks for a given playlist, in the form:
  // // p01: Coding Music - 2 tracks
  // // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
  // // t02: Model View Controller by James Dempsey (WWDC 2003)
  printPlaylist: function (playlistId) {
    var output = '';
    var pl = this.playlists[playlistId];
    var self = this;
        output += pl.id + ': ' + pl.name + ' - ' + pl.tracks.length + '\n';
    pl.tracks.forEach(function(track){
      var list = self.tracks[track];
      output += list.id + ': ' + list.name + ' by ' + list.artist + ' (' + list.album + ')' + '\n';
    })
    return output;
  },
  addTrackToPlaylist: function (trackId, playlistId) {
    var pl = this.playlists[playlistId].tracks;
    pl.push(trackId);
  },
  uid: function () {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },
  addTrack: function (name, artist, album) {
    var newId = this.uid();
    this.tracks[newId] = {id: newId, name: name, artist: artist, album: album};
  },
  addPlaylist: function (name) {
    var newId = this.uid();
    library.playlists[newId] = {id: newId, name: name, tracks: []};
  }
};
console.log(library.printPlaylists());
console.log(library.printTracks());
console.log(library.printPlaylist('p01'));
library.addTrackToPlaylist('t01', 'p02');
console.log(library.playlists);
library.addTrack('Flowers are Dope', 'The Stoked Landscapers', 'Songs About Plants');
console.log(library.tracks);
library.addPlaylist('Sleepytime');
console.log(library.playlists);

// // STRETCH:
// // given a query string string, prints a list of tracks
// // where the name, artist or album contains the query string (case insensitive)
// // tip: use "string".search("tri")
// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

// var printSearchResults = function(query) {

// }