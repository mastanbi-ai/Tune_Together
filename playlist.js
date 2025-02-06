document.addEventListener("DOMContentLoaded", () => {
    const playlistBtn = document.getElementById("playlistBtn");
    const likedSongsBtn = document.getElementById("likedSongsBtn");
    const playlistContainer = document.getElementById("playlistContainer");
    const sharePlaylist = document.getElementById("sharePlaylist");

    // Existing playlist songs
    const songs = [
        { title: "Naatu Naatu", singer: "Rahul Sipligunj, Kaala Bhairava", movie: "RRR", file:"songs/naatunaatu.mp3",image:"cover_images/natunatu.jpeg" },
        { title: "Inkem Inkem", singer: "Sid Sriram", movie: "Geetha Govindam",file:"songs/inkem.mp3",image:"cover_images/geetha-govindam-2018.webp"},
        { title: "Samajavaragamana", singer: "Sid Sriram", movie: "Ala Vaikunthapurramuloo",file:"songs/samaja.mp3",image:"cover_images/ala-vaikunthapurramuloo-2020.webp"},
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
        { title: "Bujji Thalli", singer: "DSP", movie: "Thandel",file:"songs/bujji.mp3",image:"cover_images/bujji.jpeg"}
    ];
    // Retrieve liked songs from localStorage
    function getLikedSongsFromStorage() {
        const likedTitles = JSON.parse(localStorage.getItem("likedSongs")) || [];
        return allSongs.filter(song => likedTitles.includes(song.title));
    }
    function getPlaylistSongsFromStorage() {
        const playlistTitles = JSON.parse(localStorage.getItem("playlist")) || [];
        return allSongs.filter(song => playlistTitles.includes(song.title));
    }

    function renderSongs(songs, showShare) {
        playlistContainer.innerHTML = "";
        playlistContainer.style.display = "block";

        songs.forEach(song => {
            const songItem = document.createElement("div");
            songItem.classList.add("song-item");

            songItem.innerHTML = `
                <span class="song-title">${song.title} by ${song.singer}</span>
                <span class="heart liked">❤️</span>
            `;
            playlistContainer.appendChild(songItem);
        });

        sharePlaylist.style.display = showShare ? "block" : "none";
    }
    function resetButtonStyles() {
        [playlistBtn, likedSongsBtn].forEach(btn => btn.style.backgroundColor = "");
    }
    let playlist = [];

    // Button to add songs to playlist
    const playlistButton = document.getElementById("playlistButton");
    const shareButton = document.getElementById("sharePlaylist");
    

    
    shareButton.addEventListener("click", function () {
        // Encode the playlist as a URL parameter
        let playlistData = encodeURIComponent(JSON.stringify(playlist));
    
        // Create a shareable link (Replace 'playlist.html' with your actual page)
        let shareableLink = `${window.location.origin}/playlist.html?data=${playlistData}`;
    
        // Copy link to clipboard and alert the user
        navigator.clipboard.writeText(shareableLink).then(() => {
            alert("Playlist link copied! Share it with friends.");
        });
    
        console.log("Shareable link:", shareableLink);
    });
    


    // Event listeners for Playlist & Liked Songs
    playlistBtn.addEventListener("click", () => {
        resetButtonStyles();
        const playlistSongs = getPlaylistSongsFromStorage();
        playlistBtn.style.backgroundColor = "#6A0DAD";
        renderSongs(playlistSongs, true);
    });

    likedSongsBtn.addEventListener("click", () => {
        resetButtonStyles();
        const likedSongs = getLikedSongsFromStorage();
        likedSongsBtn.style.backgroundColor = "#6A0DAD";
        renderSongs(likedSongs, false);
    });

    sharePlaylist.addEventListener("click", () => alert("Playlist Shared!"));

    // Add notification functionality for playlist
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

    // Example of adding/removing songs from playlist with notifications
    function addToPlaylist(songId) {
        let playlist = JSON.parse(localStorage.getItem('playlist')) || [];
        let message = "";

        if (playlist.includes(songId)) {
            playlist = playlist.filter(id => id !== songId);
            message = `"${songId}" removed from Playlist`;
        } else {
            playlist.push(songId);
            message = `"${songId}" added to Playlist`;
        }

        localStorage.setItem('playlist', JSON.stringify(playlist));
        showNotification(message); // Show notification for playlist changes
    }
    
});