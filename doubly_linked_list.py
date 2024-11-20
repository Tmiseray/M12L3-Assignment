# Playlist Manager

class Song:
    def __init__(self, title, artist, duration, genre):
        self.title = title
        self.artist = artist
        self.duration = duration
        self.genre = genre

class Node:
    def __init__(self, song):
        self.song = song
        self.next = None
        self.prev = None

class PlaylistManager:
    def __init__(self):
        self.head = None
        self.tail = None

    def add_song(self, title, artist, duration, genre):
        new_song = Song(title, artist, duration, genre)
        new_node = Node(new_song)
        if not self.head:
            self.head = new_node
            self.tail = new_node
        else:
            self.tail.next = new_node
            new_node.prev = self.tail
            self.tail = new_node

    def delete_song(self, title):
        current = self.head
        while current:
            if current.song.title == title:
                if current == self.head:
                    self.head = current.next
                if current == self.tail:
                    self.tail = current.prev
                if current.prev:
                    current.prev.next = current.next
                if current.next:
                    current.next.prev = current.prev
                return True
            current = current.next
        return False
    
    def display_playlist(self):
        if not self.head:
            print("Playlist is empty.")
            return
        current = self.head
        print('\n Playlist: \n')
        while current:
            print(f'Title: {current.song.title}')
            print(f'Artist: {current.song.artist}')
            print(f'Duration: {current.song.duration}')
            print(f'Genre: {current.song.genre}')
            print(f'----------------------------')
            current = current.next

    def display_history(self):
        if not self.tail:
            print("Playlist is empty.")
            return
        current = self.tail
        print('\n Playlist History: \n')
        while current:
            print(f'Title: {current.song.title}')
            print(f'Artist: {current.song.artist}')
            print(f'Duration: {current.song.duration}')
            print(f'Genre: {current.song.genre}')
            print(f'----------------------------')
            current = current.prev
    

playlist_manager = PlaylistManager()

playlist_manager.add_song('Lost Without You', 'Robin Thicke', 4.15, 'R&B')
playlist_manager.add_song('Awnaw (All Hooks Up Version) ft. Jazze Pha', 'Nappy Roots', 4.00, 'Hip-Hop')
playlist_manager.add_song('Que Le Gusta el Flow', 'Snow Tha Product', 2.57, 'Latin Rap/Hip-Hop')
playlist_manager.add_song('Imported (Spanglish Version)', 'Jessie Reyez & 6LACK', 2.57, 'Latin R&B/Rap')
playlist_manager.add_song('Long Hair and Some Tattoos', 'Bryce Savage', 2.20, 'Alternative Rock')
playlist_manager.add_song('Passenger', 'Deftones', 6.09, 'Rock')
    
playlist_manager.display_playlist()
playlist_manager.display_history()

playlist_manager.delete_song('Lost Without You')
playlist_manager.delete_song('Imported (Spanglish Version)')
playlist_manager.display_playlist()