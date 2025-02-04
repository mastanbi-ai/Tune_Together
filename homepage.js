const searchInput = document.getElementById('search');
const recommendedList = document.getElementById('recommendedList');
const topChartsList = document.getElementById('topChartsList');
const allsongslist=document.getElementById('AllsongsList');

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
    filterSongs(allsongslist);
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



function renderSongs(containerId, songs, sectionPrefix, startIndex) {
    const container = document.getElementById(containerId);

    container.innerHTML = songs.map((song, index) => {
        const uniqueIndex = startIndex + index; // Calculate the correct index for each section
        return `
            <div class="song-item" data-src="${song.file}" data-index="${sectionPrefix}-${uniqueIndex}">
                <img src="${song.image}" alt="${song.title} Cover" onerror="this.onerror=null; this.src='cover_images/logo.jpg';">
                <i class="fa-solid fa-play pause-btn" style='font-size:20px;margin:3px'></i>
                <i class="fa-regular fa-heart like-btn" style='font-size:18px;margin:2px' 
                id='liked'
                data-index="${sectionPrefix}-${uniqueIndex}"></i>
                <i class="fa-solid fa-circle-plus add-btn" style='font-size:20px;margin:3px' data-index="${sectionPrefix}-${uniqueIndex}"></i>
                <p>${song.title} - ${song.singer} ${song.movie ? `(${song.movie})` : ""}</p>
            </div>
        `;
    }).join('');
    document.querySelectorAll(".pause-btn").forEach(btn => {
        btn.removeEventListener('click', playHandler);  
        btn.addEventListener('click', playHandler);
    });
    

    // Add event listeners for like and add buttons
    document.querySelectorAll(".like-btn").forEach(btn => {
        // Prevent adding multiple listeners
        btn.removeEventListener('click', likeHandler);  // Remove any previous listener
        btn.addEventListener('click', likeHandler);
    });

    document.querySelectorAll(".add-btn").forEach(btn => {
        // Prevent adding multiple listeners
        btn.removeEventListener('click', addHandler);  // Remove any previous listener
        btn.addEventListener('click', addHandler);
    });
}

function likeHandler(event) {
    const btn = event.target;
    const indexString = btn.dataset.index;
    const [section, songIndexStr] = indexString.split('-');
    const songIndex = parseInt(songIndexStr);

    let likedSongs = JSON.parse(localStorage.getItem('likedSongs')) || [];
    const songId = randomSongs[songIndex].title;

    if (likedSongs.includes(songId)) {
        likedSongs = likedSongs.filter(id => id !== songId);
        btn.classList.replace("fa-solid", "fa-regular"); // Change back to outline
        btn.style.color = ""; // Reset to default
        
    } else {
        likedSongs.push(songId);
        btn.classList.replace("fa-regular", "fa-solid"); // Change to filled heart
        btn.style.color = "lightpink"; // Set heart color
        
    }

    localStorage.setItem('likedSongs', JSON.stringify(likedSongs));
}

function addHandler(event) {
    event.stopPropagation(); // Prevent triggering playHandler
    const btn = event.target;
    const indexString = btn.dataset.index;
    const [section, songIndexStr] = indexString.split('-');
    const songIndex = parseInt(songIndexStr);

    let songId = randomSongs[songIndex].title;
    let playlist = JSON.parse(localStorage.getItem('playlist')) || [];
    let message = "";

    if (playlist.includes(songId)) {
        playlist = playlist.filter(id => id !== songId);
        btn.classList.replace("fa-circle-minus", "fa-circle-plus"); // Change to plus icon
        message = `"${songId}" removed from Playlist`;
    } else {
        playlist.push(songId);
        btn.classList.replace("fa-circle-plus", "fa-circle-minus"); // Change to minus icon
        message = `"${songId}" added to Playlist`;
    }

    localStorage.setItem('playlist', JSON.stringify(playlist));
    showNotification(message);
}
function showNotification(message) {
    const notification = document.createElement("div");
    notification.className = "custom-notification";
    notification.innerText = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.opacity = "0"; // Fade out
        setTimeout(() => notification.remove(), 500); // Remove after fade out
    }, 1500); // Display for 1.5 seconds
}
document.addEventListener("DOMContentLoaded", () => {
    const addAccButton = document.getElementById("addAcc");
    const signInModal = document.getElementById("signInModal");

    addAccButton.addEventListener("click", () => {
        signInModal.style.display = "flex";  // Show the modal
    });

    // Optional: Close modal when clicking outside the form
    signInModal.addEventListener("click", (event) => {
        if (event.target === signInModal) {
            signInModal.style.display = "none";
        }
    });
});

document.querySelector(".sign-in-container form").addEventListener("submit", async function (e) {
    e.preventDefault();

    const email = document.querySelector(".sign-in-container input[type='email']").value;
    const password = document.querySelector(".sign-in-container input[type='password']").value;

    try {
        const response = await fetch("http://localhost:5000/signin", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();

        if (response.ok) {
            // Save user name and email in localStorage if authenticated
            const user = {
                name: data.user.name,  // Assuming the API returns the user's name
                email: data.user.email  // Assuming the API returns the user's email
            };
            document.querySelector(".user-name").innerText = data.user.name;
            document.querySelector(".user-email").innerText = data.user.email;
            localStorage.setItem("user", JSON.stringify(user)); // Save user data
            console.log(user)

            // Hide the sign-in container after successful sign-in
            document.querySelector(".modal").style.display = "none";
            
            // Redirect to the homepage after successful sign-in (optional)
            // window.location.href = "homepage.html"; // Replace with your homepage URL
        } else {
            alert(data.message); // Display error message if sign-in fails
        }
    } catch (error) {
        console.error("Error during fetch:", error);
        alert("There was an error processing your request. Please try again later.");
    }


});



function playHandler(event) {
    const btn = event.target;
    const isPlaying = btn.classList.contains("fa-pause");

    // Pause all other songs
    document.querySelectorAll(".pause-btn").forEach(icon => {
        icon.classList.remove("fa-pause");
        icon.classList.add("fa-play");
    });

    if (isPlaying) {
        btn.classList.remove("fa-pause");
        btn.classList.add("fa-play");
    } else {
        btn.classList.remove("fa-play");
        btn.classList.add("fa-pause");
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const musicPlayer = document.getElementById("musicPlayer");
    const songItems = document.querySelectorAll(".song-item"); // Assuming song elements have this class

    songItems.forEach(song => {
        song.addEventListener("click", function () {
            musicPlayer.style.display = "flex"; // Show the music player
        });
    });
    
});

document.addEventListener("DOMContentLoaded", () => {
    const musicPlayer = document.getElementById("musicPlayer");
    const audioPlayer = document.getElementById("audioPlayer");
    const songTitle = document.getElementById("songTitle");
    const coverImage = document.getElementById("coverImage");
    const playPauseBtn = document.getElementById("playPauseBtn");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const volumeControl = document.getElementById("volumeControl");
    const progressBar = document.getElementById("progressBar");
    const currentTimeDisplay = document.getElementById("currentTime");
    const durationDisplay = document.getElementById("duration");

    const playIcon = '<i class="fa-solid fa-play"></i>';
    const pauseIcon = '<i class="fa-solid fa-pause"></i>';

    let currentSongIndex = null; // Track the current song index

    function loadSong(song) {
        audioPlayer.src = song.file;
        songTitle.textContent = song.title;
        coverImage.src = song.image;
        audioPlayer.play();
        playPauseBtn.innerHTML = pauseIcon; // Set the main play/pause button to pause
    }

    function togglePlayPause(songItem, index) {
        if (currentSongIndex === index && !audioPlayer.paused) {
            audioPlayer.pause();
            playPauseBtn.innerHTML = playIcon;
            songItem.querySelector('.pause-btn').classList.replace('fa-pause', 'fa-play');
        } else {
            if (currentSongIndex !== index) {
                currentSongIndex = index;
                loadSong(songs[index]);
            } else {
                audioPlayer.play();
            }
            playPauseBtn.innerHTML = pauseIcon;
            songItem.querySelector('.pause-btn').classList.replace('fa-play', 'fa-pause');
        }
    }

    document.querySelectorAll(".song-item").forEach((songItem, index) => {
        songItem.addEventListener("click", function (event) {
            if (!event.target.classList.contains('pause-btn')) {
                togglePlayPause(songItem, index);
            }
        });

        songItem.querySelector('.pause-btn').addEventListener('click', function (event) {
            event.stopPropagation(); // Prevent triggering the song item click
            togglePlayPause(songItem, index);
        });
    });

    playPauseBtn.addEventListener('click', () => {
        if (audioPlayer.paused) {
            audioPlayer.play();
            playPauseBtn.innerHTML = pauseIcon;
        } else {
            audioPlayer.pause();
            playPauseBtn.innerHTML = playIcon;
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

    audioPlayer.addEventListener("ended", () => {
        nextBtn.click();
    });

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    }

    nextBtn.addEventListener("click", () => {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
        loadSong(songs[currentSongIndex]);
    });

    prevBtn.addEventListener("click", () => {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
        loadSong(songs[currentSongIndex]);
    });

    const downloadBtn = document.getElementById("downloadBtn");
    downloadBtn.addEventListener("click", () => {
        const currentSong = songs[currentSongIndex];
        const link = document.createElement("a");
        link.href = currentSong.file;
        link.download = currentSong.title;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});

// Initialize songs on page load
const randomSongs = getRandomSongs(50);
renderSongs('recommendedList', randomSongs.slice(0, 6),'rec',0);
renderSongs('topChartsList', randomSongs.slice(6, 12),'top',6);
renderSongs("AllsongsList",randomSongs.slice(12,50),'all',12)


// Add functionality for like  buttons




// Add functionality for addlist buttons

document.addEventListener('DOMContentLoaded', () => {
    const songItems = document.querySelectorAll('.song-item');

    songItems.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('selected-song');
        });
    });
});


