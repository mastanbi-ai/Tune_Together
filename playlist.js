document.addEventListener('DOMContentLoaded', () => {
    const playlistBtn = document.getElementById('playlistBtn');
    const likedSongsBtn = document.getElementById('likedSongsBtn');
    const playlistContainer = document.getElementById('playlistContainer');
    const sharePlaylist = document.getElementById('sharePlaylist');

    // Get the shared audio player elements
    const audioPlayer = document.getElementById("audioPlayer");
    const songTitle = document.getElementById("songTitle");
    const coverImage = document.getElementById("coverImage");
    const playPauseBtn = document.getElementById("playPauseBtn");
    const volumeControl = document.getElementById("volumeControl");
    const progressBar = document.getElementById("progressBar");
    const currentTimeDisplay = document.getElementById("currentTime");
    const durationDisplay = document.getElementById("duration");

    // Function to load song
    function loadSong(song) {
        audioPlayer.src = song.file;
        songTitle.textContent = song.title;
        coverImage.src = song.image;
        audioPlayer.play();
    }

    // Existing playlist songs
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
                <span class="song-title">${song.title} by ${song.artist}</span>
                <span class="heart ${song.liked ? 'liked' : ''}">${song.liked ? '❤️' : '🤍'}</span>
            `;
            playlistContainer.appendChild(songItem);
        });

        sharePlaylist.style.display = showShare ? 'block' : 'none';
    }

    playlistBtn.addEventListener('click', () => renderSongs(playlistSongs, true));
    likedSongsBtn.addEventListener('click', () => renderSongs(likedSongs, false));

    sharePlaylist.addEventListener('click', () => alert('Playlist Shared!'));
<<<<<<< HEAD
});
=======

    // Sync play/pause button
    playPauseBtn.addEventListener("click", () => {
        if (audioPlayer.paused) {
            audioPlayer.play();
            playPauseBtn.innerHTML = "<i class='fa-solid fa-pause'></i>"; // Change to pause icon
        } else {
            audioPlayer.pause();
            playPauseBtn.innerHTML = "<i class='fa-solid fa-play'></i>"; // Change to play icon
        }
    });

    // Volume control
    volumeControl.addEventListener("input", () => {
        audioPlayer.volume = volumeControl.value;
    });

    // Update progress bar and time display
    audioPlayer.addEventListener("timeupdate", () => {
        const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        progressBar.value = progress;
        currentTimeDisplay.textContent = formatTime(audioPlayer.currentTime);
    });

    // Format time function
    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`; // Format as mm:ss
    }
});
>>>>>>> 4e693b1 (updated like and playlist features)
