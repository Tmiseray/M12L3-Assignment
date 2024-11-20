// Playlist Manager

class Song {
    constructor(title, artist, duration, genre) {
        this.title = title;
        this.artist = artist;
        this.duration = duration;
        this.genre = genre;
    }
}

class Node {
    constructor(song) {
        this.song = song;
        this.next = null;
        this.prev = null;
    }
}

class PlaylistManager {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    addSong(title, artist, duration, genre) {
        const newSong = new Song(title, artist, duration, genre);
        const newNode = new Node(newSong);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
    }

    delSong(title) {
        let current = this.head;
        while (current) {
            if (current.song.title === title) {
                if (current === this.head) {
                    this.head = current.next;
                }
                if (current === this.tail) {
                    this.tail = current.prev;
                }
                if (current.prev) {
                    current.prev.next = current.next;
                }
                if (current.next) {
                    current.next.prev = current.prev;
                }
                return true;
            }
            current = current.next;
        }
        return false;
    }

    travPlaylist() {
        if (!this.head) {
            console.log('Playlist is empty.');
            return;
        }
        let current = this.head;
        console.log(`\n Playlist: \n`);
        while (current) {
            console.log(`Title: ${current.song.title}`);
            console.log(`Artist: ${current.song.artist}`);
            console.log(`Duration: ${current.song.duration}`);
            console.log(`Genre: ${current.song.genre}`);
            console.log(`--------------------`);
            current = current.next;
        }
    }

    travHistory() {
        if (!this.tail) {
            console.log('Playlist is empty.');
            return;
        }
        let current = this.tail;
        console.log(`\n Playlist History: \n`);
        while (current) {
            console.log(`Title: ${current.song.title}`);
            console.log(`Artist: ${current.song.artist}`);
            console.log(`Duration: ${current.song.duration}`);
            console.log(`Genre: ${current.song.genre}`);
            console.log(`--------------------`);
            current = current.prev;
        }
    }
}


const playlistManager = new PlaylistManager();

playlistManager.addSong('Lost Without You', 'Robin Thicke', 4.15, 'R&B');
playlistManager.addSong('Awnaw (All Hooks Up Version) ft. Jazze Pha', 'Nappy Roots', 4.00, 'Hip-Hop');
playlistManager.addSong('Que Le Gusta el Flow', 'Snow Tha Product', 2.57, 'Latin Rap/Hip-Hop');
playlistManager.addSong('Imported (Spanglish Version)', 'Jessie Reyez & 6LACK', 2.57, 'Latin R&B/Rap');
playlistManager.addSong('Long Hair and Some Tattoos', 'Bryce Savage', 2.20, 'Alternative Rock');
playlistManager.addSong('Passenger', 'Deftones', 6.09, 'Rock');

playlistManager.travPlaylist();
playlistManager.travHistory();

playlistManager.delSong();
playlistManager.delSong();
playlistManager.travPlaylist();