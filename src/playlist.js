"use strict";
class Playlist {
    constructor() {
        this.songs = [];
    }
    addSong(song) {
        this.songs.push(song);
    }
    removeSong(title) {
        this.songs = this.songs.filter(song => song.title !== title);
    }
    getTotalDuration() {
        const totalSeconds = this.songs.reduce((acc, song) => acc + song.duration, 0);
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
    getSongsByArtist(artist) {
        return this.songs.filter(song => song.artist === artist);
    }
}
// Ejemplo de uso
const playlist = new Playlist();
playlist.addSong({ title: "Song 1", artist: "Artist 1", duration: 240 });
playlist.addSong({ title: "Song 2", artist: "Artist 2", duration: 300 });
console.log(playlist.getTotalDuration());
console.log(playlist.getSongsByArtist("Artist 1"));
