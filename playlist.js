document.addEventListener("DOMContentLoaded", () => {
    const playlistBtn = document.getElementById("playlistBtn");
    const likedSongsBtn = document.getElementById("likedSongsBtn");
    const playlistContainer = document.getElementById("playlistContainer");
    const sharePlaylist = document.getElementById("sharePlaylist");

    const musicPlayer = document.getElementById("musicPlayer");
    const audioPlayer = new Audio();
    const songTitle = document.getElementById("songTitle");
    const coverImage = document.getElementById("coverImage");
    const playPauseBtn = document.getElementById("playPauseBtn");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const volumeControl = document.getElementById("volumeControl");
    const progressBar = document.getElementById("progressBar");
    const currentTimeDisplay = document.getElementById("currentTime");
    const durationDisplay = document.getElementById("duration");

    let currentSongIndex = null;
    let currentSongData = null;
    const allSongs = [
        { title: "Naatu Naatu", singer: "Rahul Sipligunj, Kaala Bhairava", movie: "RRR", file:"songs/naatunaatu.mp3",image:"cover_images/natunatu.jpeg" },
        { title: "Inkem Inkem", singer: "Sid Sriram", movie: "Geetha Govindam",file:"songs/inkem.mp3",image:"cover_images/geetha-govindam-2018.webp"},
        { title: "Samajavaragamna", singer: "Sid Sriram", movie: "Ala Vaikuntapuramulo",file:"songs/samaja.mp3",image:"cover_images/ala-vaikunthapurramuloo-2020.webp"},
        { title: "Why This Kolaveri Di", singer: "Dhanush", movie: "3", file:"songs/why.mp3 ",image:"cover_images/3.jpg"},
        { title: "Rowdy Baby", singer: "Dhanush, Dhee", movie: "Maari 2",file:"songs/rowdy.mp3",image:"cover_images/rowdy.jpg" },
        { title: "Tum Hi Ho", singer: "Arijit Singh", movie: "Aashiqui 2",file:"songs/tum.mp3",image:"cover_images/ashqui2.jpg" },
        { title: "Kesariya", singer: "Arijit Singh", movie: "Brahmastra",file:"songs/kesariya.mp3",image:"cover_images/kesariya.jpeg" },
        { title: "Blinding Lights", singer: "The Weeknd", movie: "Private Album", file:"songs/blind.mp3" ,image:"cover_images/blind.jpeg"},
        { title: "Shape of You", singer: "Ed Sheeran", movie: "Private Album",file:"songs/shape.mp3",image:"cover_images/shape.jpeg"},
        { title: "Butta Bomma", singer: "Armaan Malik", movie: "Ala Vaikunthapurramuloo",file:"songs/buttabomma.mp3",image:"cover_images/ala-vaikunthapurramuloo-2020.webp" },
        { title: "Oo Antava", singer: "Indravathi Chauhan", movie: "Pushpa",file:"songs/ooantava.mp3",image:"cover_images/oo.jpg" },
        { title: "Vaathi Coming", singer: "Anirudh Ravichander", movie: "Master",file:"songs/vaatai.mp3",image:"cover_images/master-tamil-2021.webp"},
        { title: "Enjoy Enjaami", singer: "Dhee, Arivu", movie: "Private Album",file:"songs/enjoy.mp3",image:"cover_images/enjoy.jpeg"},
        { title: "Apna Bana Le", singer: "Arijit Singh", movie: "Bhediya",file:"songs/apna.mp3",image:"cover_images/bhediya-hindi-2022.webp" },
        { title: "Channa Mereya", singer: "Arijit Singh", movie: "Ae Dil Hai Mushkil",file:"songs/channa.mp3",image:"cover_images/ae-dil-hai-mushkil-2016.webp" },
        { title: "Levitating", singer: "Dua Lipa", movie: "Private Album",file:"songs/lev.mp3",image:"cover_images/Dua.jpg" },
        { title: "Perfect", singer: "Ed Sheeran", movie: "Private Album",file:"songs/perfect.mp3",image:"cover_images/perfect.webp" },
        { title: "Khairiyat", singer: "Arjith Singh", movie: "Chhichhore",file:"songs/khe.mp3",image:"cover_images/chi.jpg"},
        { title: "Save Your Tears", singer: "The Weeknd", movie: "Private Album",file:"songs/save.mp3",image:"cover_images/save.jpeg" },
        { title: "Be Free", singer: "Vidhya Vox", movie: "Private Album",file:"songs/befree.mp3",image:"cover_images/befree.jpg"},
        { title: "Anuvanuvu", singer: "Sunny M.R Arjith singh", movie: "Oh Bheem Bush",file:"songs/Anuvanuvuu.mp3" ,image:"cover_images/anu.jpeg"},
        { title: "kissik", singer: "subhlashini,DSP", movie: "Pushpa-02",file:"songs/Kissik1.mp3",image:"cover_images/kissik.jpeg"},
        { title: "Stay", singer: "The Kid LAROI, Justin Bieber", movie: "Private Album",file:"songs/stay.mp3",image:"cover_images/stay.jpeg" },
        { title: "Adhento gaani vunnapatuga", singer: "Anirudh", movie: "Jersey",file:"songs/adi.mp3",image:"cover_images/adi.jpeg"},
        { title: "Dusk Till Down", singer: "Zyan", movie: "Private Album",file:"songs/dusk.mp3",image:"cover_images/dusk.jpeg"},
        { title: "Kutty story", singer: "Anirudh", movie: "MAster",file:"songs/kutty.mp3",image:"cover_images/master-tamil-2021.webp"},
        { title: "Maate vinadhuga", singer: "Sid sriram", movie: "Taxiwala",file:"songs/maate.mp3" ,image:"cover_images/maata.jpeg"},
        { title: "Em sandheham ledhu", singer: "kalyani maik,sunitha", movie: "Oohalu gusagusalade", file:"songs/em.mp3" ,image:"cover_images/em.jpeg"},
        { title: "Adiga", singer: "karthik", movie: "Hi nanna",file:"songs/Adigaa.mp3" ,image:"cover_images/adiga.jpeg"},
        { title: "Bewajah", singer: "himesh reshammiya", movie: "Sanam teri kasam",file:"songs/sanam.mp3",image:"cover_images/sanam.jpg"},
        { title: "Aaj ki Raat", singer: "Jigar", movie: "Stree2",file:"songs/aaj.mp3" ,image:"cover_images/aaj.jpeg"},
        { title: "Ishq hai", singer: "Anurag saika", movie: "Mismatched",file:"songs/ishq.mp3",image:"cover_images/ishq.jpg" },
        { title: "sajini", singer: "Ram sampth", movie: "Laaptha ladies",file:"songs/sajini.mp3",image:"cover_images/sajini.jpeg"},
        { title: "Pehle Bhi Main", singer: "Vishal Mishra", movie: "Animal",file:"songs/pehle.mp3",image:"cover_images/phl.jpeg"},
        { title: "Dabidi Dibidi", singer: "Thaman", movie: "Daku Maharaj",file:"songs/db.mp3",image:"cover_images/db.jpeg"},
        { title: "NaaNaa Hyrana", singer: "Thaman s", movie: "Game Changer",file:"songs/naanaa.mp3",image:"cover_images/naa.jpeg"},
        { title: "Chuttamalle", singer: "Shilpa Rao", movie: "Devara-01",file:"songs/Chuttamalle.mp3",image:"cover_images/chuttamalle.jpeg" },
        { title: "Hey Rangule'", singer: "G.V. prakash", movie: "Amaran",file:"songs/hey.mp3" ,image:"cover_images/hey.jpeg"},
        { title: "Bujji Thalli", singer: "DSP", movie: "Thandel",file:"songs/bujji.mp3",image:"cover_images/bujji.jpeg"},
        { title: "Yemito", singer: "Haricharan", movie: "Andhala Rakshasi",file:"songs/andhala.mp3",image:"cover_images/andhala.jpeg"},
        { title: "Chamka Chamka", singer: "Ranjith,Geetha madhuri", movie: "Chirutha",file:"songs/chamk.mp3",image:"cover_images/chamk.jpg"},
        { title: "Hoyna Hoyna", singer: "Anirudh Ravichandhran", movie: "Gang Leader",file:"songs/hoy.mp3",image:"cover_images/hoy.jpeg"}
    ];
    function loadSong(song) {
        currentSongData = song; // Store the current song data
        audioPlayer.src = song.file;
        songTitle.textContent = song.title;
        coverImage.src = song.image;
        audioPlayer.play();
        musicPlayer.style.display = "flex"; // Show the footer player
        updatePlayPauseIcon(true); // Set to play icon
        updateSongItemPlayButton(currentSongIndex, true); // Update play button style
    }

    function updatePlayPauseIcon(isPlaying) {
        playPauseBtn.innerHTML = isPlaying
            ? '<i class="fa-solid fa-pause"></i>'
            : '<i class="fa-solid fa-play"></i>';
    }

    function updateSongItemPlayButton(index, isPlaying) {
        const songItems = document.querySelectorAll(".song-item");
        const playButton = songItems[index].querySelector('.play-button');
        playButton.innerHTML = isPlaying ? '<i class="fa-solid fa-pause"></i>' : '<i class="fa-solid fa-play"></i>';
    }

    function resetButtonStyles() {
        [playlistBtn, likedSongsBtn].forEach(btn => btn.style.backgroundColor = "");
    }

    function getPlaylistSongsFromStorage() {
        const playlistTitles = JSON.parse(localStorage.getItem("playlist")) || [];
        return allSongs.filter(song => playlistTitles.includes(song.title));
    }

    function getLikedSongsFromStorage() {
        const likedTitles = JSON.parse(localStorage.getItem("likedSongs")) || [];
        return allSongs.filter(song => likedTitles.includes(song.title));
    }

    function renderSongs(songs, showShare) {
        playlistContainer.innerHTML = "";
        playlistContainer.style.display = "flex";
        playlistContainer.style.flexWrap = "wrap";

        songs.forEach((song, index) => {
            const songItem = document.createElement("div");
            songItem.classList.add("song-item");

            songItem.innerHTML = `
                <img src="${song.image}" alt="${song.title}" class="song-image">
                <div class="song-info">
                    <i class="fa-solid fa-play play-button" data-file="${song.file}" style='font-size:20px;margin:4px;cursor:pointer'></i>
                    <span class="song-title">${song.title} by ${song.singer}</span>
                </div>
            `;

            songItem.querySelector(".play-button").addEventListener("click", () => {
                if (currentSongIndex === index) {
                    if (audioPlayer.paused) {
                        audioPlayer.play();
                        updatePlayPauseIcon(true);
                    } else {
                        audioPlayer.pause();
                        updatePlayPauseIcon(false);
                    }
                } else {
                    if (currentSongIndex !== null) {
                        updateSongItemPlayButton(currentSongIndex, false);
                    }
                    loadSong(song);
                    currentSongIndex = index;
                    updateSongItemPlayButton(index, true);
                }
            });

            playlistContainer.appendChild(songItem);
        });

        sharePlaylist.style.display = showShare ? "block" : "none";
    }

    playlistBtn.addEventListener("click", () => {
        resetButtonStyles();
        playlistBtn.style.backgroundColor = "#6A0DAD";
        renderSongs(getPlaylistSongsFromStorage(), true);
    });

    likedSongsBtn.addEventListener("click", () => {
        resetButtonStyles();
        likedSongsBtn.style.backgroundColor = "#6A0DAD";
        renderSongs(getLikedSongsFromStorage(), false);
    });

    // Footer controls
    playPauseBtn.addEventListener('click', () => {
        if (audioPlayer.paused) {
            audioPlayer.play();
            updatePlayPauseIcon(true);
        } else {
            audioPlayer.pause();
            updatePlayPauseIcon(false);
        }
    });

    nextBtn.addEventListener("click", () => {
        if (currentSongIndex !== null) {
            currentSongIndex = (currentSongIndex + 1) % allSongs.length;
            loadSong(allSongs[currentSongIndex]);
        }
    });

    prevBtn.addEventListener("click", () => {
        if (currentSongIndex !== null) {
            currentSongIndex = (currentSongIndex - 1 + allSongs.length) % allSongs.length;
            loadSong(allSongs[currentSongIndex]);
        }
    });

    volumeControl.addEventListener("input", () => {
        audioPlayer.volume = volumeControl.value;
    });

    audioPlayer.addEventListener("timeupdate", () => {
        const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        progressBar.value = progress;
        currentTimeDisplay.textContent = formatTime(audioPlayer.currentTime);
    });

    audioPlayer.addEventListener("loadedmetadata", () => {
        durationDisplay.textContent = formatTime(audioPlayer.duration);
    });

    progressBar.addEventListener("input", () => {
        const seekTime = (progressBar.value / 100) * audioPlayer.duration;
        audioPlayer.currentTime = seekTime;
    });

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    }

    // Initial render of songs
    renderSongs(getPlaylistSongsFromStorage(), true);
});
