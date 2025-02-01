document.addEventListener('DOMContentLoaded', () => {
    const playlistBtn = document.getElementById('playlistBtn');
    const likedSongsBtn = document.getElementById('likedSongsBtn');
    const playlistContainer = document.getElementById('playlistContainer');
    const sharePlaylist = document.getElementById('sharePlaylist');

    const playlistSongs = [
        { title: "Blinding Lights", artist: "The Weeknd", liked: true },
        { title: "Shape of You", artist: "Ed Sheeran", liked: false },
        { title: "Levitating", artist: "Dua Lipa", liked: true },
        { title: "Uptown Funk", artist: "Mark Ronson ft. Bruno Mars", liked: false },
        { title: "Bad Habits", artist: "Ed Sheeran", liked: true }
    ];

    const likedSongs = [
        { title: "Someone Like You", artist: "Adele" },
        { title: "Can't Stop the Feeling!", artist: "Justin Timberlake" },
        { title: "Stay", artist: "The Kid LAROI & Justin Bieber" },
        { title: "Sunflower", artist: "Post Malone & Swae Lee" }
    ];

    function renderSongs(songs, showShare) {
        playlistContainer.innerHTML = '';
        playlistContainer.style.display = 'block';

        songs.forEach(song => {
            const songItem = document.createElement('div');
            songItem.classList.add('song-item');
            songItem.innerHTML = `
                <span>${song.title} by ${song.artist}</span>
                <div>${song.liked ? '❤️' : '♡'}</div>
            `;
            playlistContainer.appendChild(songItem);
        });

        sharePlaylist.style.display = showShare ? 'block' : 'none';
    }

    playlistBtn.addEventListener('click', () => renderSongs(playlistSongs, true));
    likedSongsBtn.addEventListener('click', () => renderSongs(likedSongs, false));

    sharePlaylist.addEventListener('click', () => alert('Playlist Shared!'));
});
