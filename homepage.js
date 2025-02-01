const searchInput = document.getElementById('search');
const recommendedList = document.getElementById('recommendedList');
const topChartsList = document.getElementById('topChartsList');

searchInput.addEventListener('input', function () {
    const searchValue = searchInput.value.toLowerCase();
    const filterSongs = (list) => {
        const songs = list.getElementsByClassName('song-item');
        Array.from(songs).forEach(song => {
            if (song.textContent.toLowerCase().includes(searchValue)) {
                song.style.display = '';
            } else {
                song.style.display = 'none';
            }
        });
    };

    filterSongs(recommendedList);
    filterSongs(topChartsList);
});

const songs = [
    { title: "Naatu Naatu", singer: "Rahul Sipligunj, Kaala Bhairava", movie: "RRR", file:"songs/naatunaatu.mp3",image:"cover_images/natunatu.jpeg" },
    { title: "Inkem Inkem", singer: "Sid Sriram", movie: "Geetha Govindam",file:"songs/inkem.mp3",image:"cover_images/geetha-govindam-2018.webp"},
    { title: "Samajavaragamana", singer: "Sid Sriram", movie: "Ala Vaikunthapurramuloo",file:"songs/samaja.mp3",image:"cover_images/ala-vaikunthapurramuloo-2020.webp"},
    { title: "Why This Kolaveri Di", singer: "Dhanush", movie: "3", file:"songs/why.mp3 ",image:"cover_images/3.jpg"},
    { title: "Rowdy Baby", singer: "Dhanush, Dhee", movie: "Maari 2",file:"songs/rowdy.mp3",image:"cover_images/rowdy.jpg" },
    { title: "Tum Hi Ho", singer: "Arijit Singh", movie: "Aashiqui 2",file:"songs/tum.mp3",image:"cover_images/ashqui2.jpg" },
    { title: "Kesariya", singer: "Arijit Singh", movie: "Brahmastra",file:"songs/kesariya.mp3",image:"cover_images/kesariya.jpeg" },
    { title: "Blinding Lights", singer: "The Weeknd", movie: "", file:"songs/blind.mp3" ,image:"cover_images/blind.jpeg"},
    { title: "Shape of You", singer: "Ed Sheeran", movie: "",file:"songs/shape.mp3",image:"cover_images/shape.jpeg"},
    { title: "Butta Bomma", singer: "Armaan Malik", movie: "Ala Vaikunthapurramuloo",file:"songs/buttabomma.mp3",image:"cover_images/ala-vaikunthapurramuloo-2020.webp" },
    { title: "Oo Antava", singer: "Indravathi Chauhan", movie: "Pushpa",file:"songs/ooantava.mp3",image:"cover_images/oo.jpg" },
    { title: "Vaathi Coming", singer: "Anirudh Ravichander", movie: "Master",file:"songs/vaatai.mp3",image:"cover_images/master-tamil-2021.webp"},
    { title: "Enjoy Enjaami", singer: "Dhee, Arivu", movie: "",file:"songs/enjoy.mp3",image:"cover_images/enjoy.jpeg"},
    { title: "Apna Bana Le", singer: "Arijit Singh", movie: "Bhediya",file:"songs/apna.mp3",image:"cover_images/bhediya-hindi-2022.webp" },
    { title: "Channa Mereya", singer: "Arijit Singh", movie: "Ae Dil Hai Mushkil",file:"songs/channa.mp3",image:"cover_images/ae-dil-hai-mushkil-2016.webp" },
    { title: "Levitating", singer: "Dua Lipa", movie: "",file:"songs/lev.mp3",image:"cover_images/Dua.jpg" },
    { title: "Perfect", singer: "Ed Sheeran", movie: "",file:"songs/perfect.mp3",image:"cover_images/perfect.webp" },
    { title: "Khairiyat", singer: "Arjith Singh", movie: "Chhichhore",file:"songs/khe.mp3",image:"cover_images/chi.jpg"},
    { title: "Save Your Tears", singer: "The Weeknd", movie: "",file:"songs/save.mp3",image:"cover_images/save.jpeg" },
    { title: "Be Free", singer: "Vidhya Vox", movie: "",file:"songs/befree.mp3",image:"cover_images/befree.jpg"},
    { title: "Anuvanuvu", singer: "Sunny M.R Arjith singh", movie: "Oh Bheem Bush",file:"songs/Anuvanuvuu.mp3" ,image:"cover_images/anu.jpeg"},
    { title: "kissik", singer: "subhlashini,DSP", movie: "Pushpa-02",file:"songs/Kissik1.mp3",image:"cover_images/kissik.jpeg"},
    { title: "Stay", singer: "The Kid LAROI, Justin Bieber", movie: "",file:"songs/stay.mp3",image:"cover_images/stay.jpeg" },
    { title: "Adhento gaani vunnapatuga", singer: "Anirudh", movie: "Jersey",file:"songs/adi.mp3",image:"cover_images/adi.jpeg"},
    { title: "Dusk Till Down", singer: "Zyan", movie: "",file:"songs/dusk.mp3",image:"cover_images/dusk.jpeg"},
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
    { title: "Bujji Thalli", singer: "DSP", movie: "Thandel",file:"songs/bujji.mp3",image:"cover_images/bujji.jpeg"}
];

function getRandomSongs(count) {
    const shuffled = songs.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// <div class='like-button' data-src="${song.click}"></div>
// <div class='add-button' data-src="${song.click}"><i class="fa-regular fa-circle-plus"></i>'like'</div>

const icon = document.createElement("i");
icon.className = "fa-solid fa-play";
// document.body.appendChild(icon); // Append to desired element



function renderSongs(containerId, songs) {
    const container = document.getElementById(containerId);
    
    container.innerHTML = songs.map((song, index) => `
        <div class="song-item" data-src="${song.file}" data-index="${index}">
            <img src="${song.image}" alt="${song.title} Cover" onerror="this.onerror=null; this.src='cover_images/default.jpg';">
            <i class="fa-solid fa-play play-btn" style='font-size:20px;margin:3px'></i>
            <i class="fa-regular fa-heart like-btn" style='font-size:18px;margin:2px' 
            id='liked'
            
            data-index="${index}"></i>
            <i class="fa-solid fa-circle-plus add-btn" style='font-size:20px;margin:3px' data-index="${index}"></i>
            <p>${song.title} - ${song.singer} ${song.movie ? `(${song.movie})` : ""}</p>
        </div>
    `).join('');

// Add event listeners for like and add buttons
document.querySelectorAll(".like-btn").forEach(btn => {
    btn.addEventListener("click", function () {
        const index = this.dataset.index;
        this.classList.toggle("liked");

        // Save liked songs to local storage
        let likedSongs = JSON.parse(localStorage.getItem('likedSongs')) || [];
        const songId = songs[index].title;

        // If already liked, remove from local storage
        if (this.classList.contains('liked')) {
            // Add to liked songs if not already present
            if (!likedSongs.includes(songId)) {
                likedSongs.push(songId);
                localStorage.setItem('likedSongs', JSON.stringify(likedSongs));
                
            }
        } else {
            // Remove from liked songs
            likedSongs = likedSongs.filter(id => id !== songId);
            localStorage.setItem('likedSongs', JSON.stringify(likedSongs));
        }

        // Log the liked song
        console.log(`Liked: ${songs[index].title}`);
    });
});

document.querySelectorAll(".add-btn").forEach(btn => {
    btn.addEventListener("click", function () {
        const index = this.dataset.index;
        const songId = songs[index].title;

        // Check if the song is already in the playlist
        let playlist = JSON.parse(localStorage.getItem('playlist')) || [];
        if (!playlist.includes(songId)) {
            playlist.push(songId);
            localStorage.setItem('playlist', JSON.stringify(playlist));
            console.log(`Added to playlist: ${songId}`);
            alert(`${songId} added to playlist!`);
        } else {
            alert(`${songId} is already in the playlist!`);
        }
    });
});


}
document.addEventListener("DOMContentLoaded", () => {
    const audioPlayer = document.getElementById("audioPlayer");
    const songTitle = document.getElementById("songTitle");
    const coverImage = document.getElementById("coverImage");
    const playPauseBtn = document.getElementById("playPauseBtn");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const volumeControl = document.getElementById("volumeControl");
    const progressBar = document.getElementById("progressBar");
    const currentTimeDisplay = document.getElementById("currentTime"); // Current time display
    const durationDisplay = document.getElementById("duration"); // Duration display

    let currentSongIndex = 0; // Track the current song index

    function loadSong(song) {
        audioPlayer.src = song.file;
        songTitle.textContent = song.title;
        coverImage.src = song.image;
        audioPlayer.play();
    }

    document.querySelectorAll(".song-item").forEach((songItem, index) => {
        songItem.addEventListener("click", function () {
            // Remove highlight from all songs
            document.querySelectorAll(".song-item").forEach(item => {
                item.style.backgroundColor = ""; // Reset background color
            });
    
            currentSongIndex = index; // Update current song index
            const songData = songs[index];
            loadSong(songData);
    
            // Highlight the currently playing song
            this.style.backgroundColor = "rgb(238, 130, 238)"; // Highlight color
        });
    });

    playPauseBtn.addEventListener("click", () => {
        if (audioPlayer.paused) {
            audioPlayer.play();
            playPauseBtn.textContent = "▐▐ "; // Change to pause icon
        } else {
            audioPlayer.pause();
            playPauseBtn.textContent = "⬜"; // Change to play icon
        }
    });

    volumeControl.addEventListener("input", () => {
        audioPlayer.volume = volumeControl.value;
    });
    audioPlayer.addEventListener("timeupdate", () => {
        const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        progressBar.value = progress;

        // Update current time display
        currentTimeDisplay.textContent = formatTime(audioPlayer.currentTime);
    });

    // Update duration display when the song is loaded
    audioPlayer.addEventListener("loadedmetadata", () => {
        durationDisplay.textContent = formatTime(audioPlayer.duration);
    });

    // Seek through the song when the progress bar is changed
    progressBar.addEventListener("input", () => {
        const seekTime = (progressBar.value / 100) * audioPlayer.duration;
        audioPlayer.currentTime = seekTime;
    });

    // Automatically go to the next song when the current song ends
    audioPlayer.addEventListener("ended", () => {
        nextBtn.click(); // Trigger the next button click
    });

    // Function to format time in minutes and seconds
    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`; // Format as mm:ss
    }

    // Add functionality for next and previous buttons
    nextBtn.addEventListener("click", () => {
        currentSongIndex = (currentSongIndex + 1) % songs.length; // Loop back to the start
        loadSong(songs[currentSongIndex]);
    });

    prevBtn.addEventListener("click", () => {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length; // Loop to the end
        loadSong(songs[currentSongIndex]);
    });
    const downloadBtn = document.getElementById("downloadBtn"); // Get the download button

// Add event listener for the download button
downloadBtn.addEventListener("click", () => {
    const currentSong = songs[currentSongIndex]; // Get the currently playing song
    const link = document.createElement("a"); // Create a temporary anchor element
    link.href = currentSong.file; // Set the href to the song file
    link.download = currentSong.title; // Set the download attribute to the song title
    document.body.appendChild(link); // Append the link to the body
    link.click(); // Programmatically click the link to trigger the download
    document.body.removeChild(link); // Remove the link after downloading
});
});

// Initialize songs on page load
const randomSongs = getRandomSongs(50);
renderSongs('recommendedList', randomSongs.slice(0, 6));
renderSongs('topChartsList', randomSongs.slice(6, 12));


// Add functionality for like  buttons




// Add functionality for addlist buttons

